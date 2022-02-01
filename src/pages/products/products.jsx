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
} from '../../services/firebase';
import SectionTitle from './sectionTitle';
import { useSelector } from 'react-redux';
import EmptyData from '../../components/emptyData';

const Products = ({ match, location }) => {
  //props.location.statet.subobj
  let { type, name, id, subCatName, subCatId, subObj } = location?.state;
  const [products, setProducts] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
  const { loader } = useSelector(state => state.loader);

  const sortStates = [
    {
      label: 'Newest',
      id: 'CreatedAt',
    },
    {
      label: 'Price: low to high',
      id: 'Price',
    },
    {
      label: 'Price: high to low',
      id: 'DPrice',
    },
    {
      label: 'Name',
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
  ];

  const pricesStates = [
    {
      label: 'EGP 1000-2000 ',
      id: 'min1000',
    },
    {
      label: 'EGP 2000-3000',
      id: 'min2000',
    },
    {
      label: 'EGP 3000-4000',
      id: 'min3000',
    },
    {
      label: 'EGP 3000-4000',
      id: 'min3000',
    },
    {
      label: 'EGP 4000-5000',
      id: 'min4000',
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
      ['Name', '!=', `${subCatName}`]
    ).then(allSubCategories => {
      setSubCategories(allSubCategories);
    });
  };

  const getProducts = () => {
    getCollection('Products', ['SubCategory', '==', subCatId])
      .then(res => {
        setProducts(res);
      })
      .catch(err => console.log('error :', err));
  };

  const filterProds = (key, value) => {
    filterCollection(
      'Products',
      ['SubCategory', '==', subCatId],
      [key, '==', value]
    )
      .then(res => {
        console.log('products', products);
        setProducts(res);
      })
      .catch(err => console.log('error :', err));
  };

  const sortProducts = sortProp => {
    let order = 'asc';
    if (sortProp[0] === 'D') {
      //DPrice for descinding
      order = 'desc';
      sortProp = sortProp.substring(1);
    }

    sortCollection(['SubCategory', '==', subCatId], sortProp, order)
      .then(res => {
        console.log('products', res);
        setProducts(res);
      })
      .catch(err => console.log('error :', err));
  };

  useEffect(() => {
    console.log('>>>>>>>>>>>', location.state);
    getProducts();
    getSubCategories();
  }, []);

  return (
    <>
      <Breadcrumb state={location.state} />

      <SectionTitle title={subCatName} />

      <section className='col-12 col-md-7 col-lg-7'>
        <p className='description'>{subObj?.Descripton}</p>
      </section>

      <div className='row sticky-top filter-row'>
        <div className='col-12 col-lg-8 d-flex flex-nowrap overflow-auto py-3 my-2'>
          {/* <FilterButton title="compare" /> */}
          <FilterButton title='sort' icon='fas fa-chevron-down' />
          <FilterDropList
            listName='sort-group'
            checkType='radio'
            items={sortStates}
            clickHandler={sortProducts}
          />

          <FilterButton title='color' icon='fas fa-chevron-down' />
          <FilterDropList
            listName='colors-group'
            checkType='radio'
            items={colorsStates}
            clickHandler={color => filterProds('Color', color)}
          />

          <FilterButton
            id='price-filter'
            title='price'
            icon='fas fa-chevron-down'
          />
          <FilterDropList
            listName='price-group'
            checkType='checkbox'
            items={pricesStates}
          />

          <FilterButton title='size' icon='fas fa-chevron-down' />
          <FilterDropList
            listName='sizes-group'
            checkType='radio'
            items={sizesStates}
          />

          <FilterButton title='material' icon='fas fa-chevron-down' />
          <FilterDropList
            listName='material-group'
            checkType='radio'
            items={materialStates}
            clickHandler={material => filterProds('Material', material)}
          />

          <FilterButton title='allFilters' icon='fas fa-filter' noDrop />
        </div>

        <ProductRoomBtn totalItems={products?.length} />
      </div>

      <div className='carousel-body p-0 pb-2 mb-5'>
        <div className='row' id='show-proDetail'>
          <Loader />
          {!loader && !products?.length && <EmptyData />}

          {products?.map(i => (
            <ProductCard
              key={i.id}
              productData={i.data()}
              pId={i.id}
              showOptions
            />
          ))}
        </div>
      </div>

      <SectionTitle title='Related categories' />
      <Loader />
      <div className='row mx-auto g-3 categories-slidder'>
        {subCategories &&
          subCategories.map(subcategory => {
            return (
              <SubCategoryCard
                element={subcategory}
                key={subcategory.id}
                params={match.params}
              />
            );
          })}
      </div>
    </>
  );
};

export default Products;
