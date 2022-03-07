import Breadcrumb from '../../components/breadCrumb/breadCrumb';
import FilterButton from './../../components/filterButton/filterButton';
import FilterDropList from './../../components/filterDropList/FilterDropList';
import SubCategoryCard from './../../components/cards/subcategoryCard';
import ProductCard from '../../components/cards/productCard/productCard';
import ProductRoomBtn from './productRoomBtn';
import Loader from './../../components/loader';
import { useEffect, useState } from 'react';
import {
  getCollection,
  filterCollection,
  sortCollection,
  getDocumentByID,
  sortCollectionWithoutCondition,
} from '../../services/firebase';
import SectionTitle from './sectionTitle';
import EmptyData from './../../components/emptyData';
import Carousel from './../../components/carousel/carousel';
import { useTranslation } from 'react-i18next';

import FiltersMenu from './filtersMenu.jsx/filtersMenu';

const Products = ({ match }) => {
  const { t, i18n } = useTranslation();
  let { type, name, id, subName, subId, sale, newArrival } = match?.params;
  const [products, setProducts] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
  const [currentSub, setCurrentSub] = useState(null);
  const [roomBtn, setRoomBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  const sortStates = [
    {
      label: t('Newest'),
      id: 'CreatedAt',
    },
    {
      label: t('PriceLowToHigh'),
      id: 'Price',
    },
    {
      label: t('PriceHighToLow'),
      id: 'DPrice',
    },
    {
      label: t('Name'),
      id: 'Name',
    },
  ];

  const colorsStates = [
    {
      label: 'black',
      id: 'black',
    },
    {
      label: 'brown',
      id: 'brown',
    },
    {
      label: 'white',
      id: 'white',
    },
    {
      label: 'Gray',
      id: 'gray',
    },
    {
      label: 'Beige',
      id: 'beige',
    },
  ];

  const pricesStates = [
    {
      label: t('Max2000'),
      id: '2000',
    },
    {
      label: t('Max3000'),
      id: '3000',
    },
    {
      label: t('Max4000'),
      id: '4000',
    },
    {
      label: t('Max5000'),
      id: '5000',
    },
    {
      label: t('Max10000'),
      id: '10000',
    },
    {
      label: t('Max20000'),
      id: '20000',
    },
  ];

  const sizesStates = [
    {
      label: '120 cm * 80 cm',
      id: 'size1',
    },
    {
      label: '120 cm * 90 cm',
      id: 'size2',
    },
    {
      label: '120cm * 100cm',
      id: 'size3',
    },
    {
      label: '120cm*120cm',
      id: 'size4',
    },
    {
      label: '120cm*130cm',
      id: 'size5',
    },
  ];

  const materialStates = [
    {
      label: 'Wood',
      id: 'wood',
    },
    {
      label: 'Steel',
      id: 'steel',
    },
    {
      label: 'Upholstered',
      id: 'Upholstered',
    },
    {
      label: 'Cotton',
      id: 'cotton',
    },
  ];

  const getSubCategories = () => {
    filterCollection(
      'subCategory',
      [
        type === 'product' ? 'ProductCategory' : 'RoomCategory',
        'array-contains',
        `${id}`,
      ],
      ['Name', '!=', `${subName}`]
    ).then((allSubCategories) => {
      setSubCategories(allSubCategories);
    });
  };

  const getCurrentSub = () => {
    getDocumentByID('subCategory', subId).then((current) => {
      setCurrentSub(current);
    });
  };

  const getProducts = () => {
    {
      subId &&
        getCollection('Products', ['SubCategory', '==', subId])
          .then((res) => {
            setLoading(true);
            setProducts(res);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
    {
      sale &&
        getCollection('Products', ['SalePrice', '>', 0])
          .then((res) => {
            setLoading(true);
            setProducts(res);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
    {
      newArrival &&
        sortCollectionWithoutCondition('CreatedAt', 'desc')
          .then((res) => {
            const partOfres = res.slice(0, 10);
            setLoading(true);
            setProducts(partOfres);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
  };

  const filterProds = (key, value, operator = '==') => {
    {
      subId &&
        filterCollection(
          'Products',
          ['SubCategory', '==', subId],
          [key, operator, value]
        )
          .then((res) => {
            setLoading(true);
            setProducts(res);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }

    {
      sale &&
        getCollection('Products', [key, operator, value])
          .then((result) => {
            return result.filter((prd) => prd.data().SalePrice > 0);
          })
          .then((res) => {
            setLoading(true);
            setProducts(res);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
    {
      newArrival &&
        sortCollectionWithoutCondition('CreatedAt', 'desc')
          .then(async (result) => {
            const partOfres = result.slice(0, 10);
            const filtered = await getCollection('Products', [
              key,
              operator,
              value,
            ]);
            return { partOfres, filtered };
          })
          .then((res) => {
            let filtered = [];
            for (let i = 0; i < res.partOfres.length; i++) {
              for (let j = 0; j < res.filtered.length; j++) {
                if (res.filtered[j].id === res.partOfres[i].id) {
                  filtered.push(res.filtered[j]);
                }
              }
              if (i === res.partOfres.length - 1) {
                return filtered;
              }
            }
          })
          .then((res) => {
            setProducts(res);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
  };

  const sortProducts = (sortProp) => {
    let order = 'asc';
    if (sortProp[0] === 'D') {
      //DPrice for descinding
      order = 'desc';
      sortProp = sortProp.substring(1);
    }
    {
      subId &&
        sortCollection(['SubCategory', '==', subId], sortProp, order)
          .then((res) => {
            setLoading(true);
            setProducts(res);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
    {
      sale &&
        sortCollectionWithoutCondition(sortProp, order)
          .then((res) => {
            return res.filter((prd) => prd.data().SalePrice > 0);
          })
          .then((results) => {
            setLoading(true);
            setProducts(results);
            setLoading(false);
          })
          .catch((err) => console.log('error :', err));
    }
  };

  const clearFilters = () => {
    getProducts();
  };

  useEffect(() => {
    console.log('start products');
    Promise.all([
      getProducts(),
      subId && getSubCategories(),
      subId && getCurrentSub(),
    ]);
  }, [match.params.subId, match.params]);
  return (
    <>
      {/* <Breadcrumb state={location.state} /> */}

      {subId && (
        <>
          <SectionTitle
            title={
              i18n.language === 'en' ? currentSub?.Name : currentSub?.NameAr
            }
          />

          <section className='col-12 col-md-7 col-lg-7'>
            <p className='description'>
              {i18n.language === 'en'
                ? currentSub?.Description
                : currentSub?.DescriptionAr}
            </p>
          </section>
        </>
      )}

      <div className='row sticky-top filter-row'>
        <div className='col-12 col-lg-8 d-flex flex-nowrap overflow- py-3 my-2'>
          {/* <FilterButton title="compare" /> */}
          {!newArrival && (
            <>
              <FilterButton title={t('Sort')} icon='fas fa-chevron-down' />
              <FilterDropList
                listName='sort-group'
                checkType='radio'
                items={sortStates}
                clickHandler={sortProducts}
              />
            </>
          )}

          <FilterButton title={t('Color')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='colors-group'
            checkType='radio'
            items={colorsStates}
            clickHandler={(color) => filterProds('Color', color)}
          />

          <FilterButton
            id='price-filter'
            title={t('Price')}
            icon='fas fa-chevron-down'
          />
          <FilterDropList
            listName='price-group'
            checkType='radio'
            items={pricesStates}
            clickHandler={(maxPrice) => {
              {
                (subId || newArrival) &&
                  filterProds('Price', parseInt(maxPrice), '<=');
              }
              {
                sale && filterProds('SalePrice', parseInt(maxPrice), '<=');
              }
            }}
          />

          <FilterButton title={t('Size')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='sizes-group'
            checkType='radio'
            items={sizesStates}
          />

          <FilterButton title={t('Material')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='material-group'
            checkType='radio'
            items={materialStates}
            clickHandler={(material) => filterProds('Material', material)}
          />

          <FilterButton
            title={t('AllFilters')}
            icon='fas fa-filter'
            noDrop
            offcanvas
          />
          <FiltersMenu />
        </div>

        <ProductRoomBtn
          totalItems={products?.length}
          setRoomBtn={(val) => setRoomBtn(val)}
        />
      </div>

      {true && (
        <div className='my-3'>
          <FilterButton
            title='clear filter'
            icon='bi bi-x'
            noDrop
            setRoomBtn={clearFilters}
          />
        </div>
      )}

      <div className='carousel-body overflow-hidden px-3 pb-2 mb-5'>
        <div className='row' id='show-proDetail'>
          {loading && <Loader />}
          {!loading && !products?.length && <EmptyData />}

          {products?.map((i) => (
            <ProductCard
              key={i.id}
              productData={i.data()}
              pId={i.id}
              showOptions
              roomBtn={roomBtn}
              carousel={false}
              baseUrl={subId && match.url}
            />
          ))}
        </div>
      </div>

      <SectionTitle title='Top Seller' />
      <Carousel
        condition={{ property: 'SalePrice', operator: '>', value: 0 }}
      />

      <SectionTitle title='Related categories' />
      {/* <Loader /> */}
      <div className='row mx-auto g-3 categories-slidder'>
        {subCategories &&
          subCategories.map((subcategory) => {
            return (
              <SubCategoryCard
                element={subcategory}
                key={subcategory.id}
                type={type}
                name={name}
                id={id} //categId
              />
            );
          })}
      </div>
    </>
  );
};

export default Products;
