import Breadcrumb from '../../components/breadCrumb/breadCrumb';
import FilterButton from './../../components/filterButton/filterButton';
import FilterDropList from './../../components/filterDropList/FilterDropList';
import ProductRoomBtn from './productRoomBtn';
import Loader from './../../components/loader';
import { useEffect, useState } from 'react';
import { getCollection } from '../../services/firebase';
import ProductCard from '../../components/cards/productCard/productCard';
import SectionTitle from './sectionTitle';
import SubCategoryCard from './../../components/cards/subcategoryCard';
import { useSelector } from 'react-redux';

const Products = ({ match }) => {
  const [products, setProducts] = useState(null);
  const [subCategories, setSubCategories] = useState(null);

  const sortStates = [
    {
      label: 'Newest',
      id: 'newest-radio',
    },
    {
      label: 'Price: low to high',
      id: 'lowToHigh-radio',
    },
    {
      label: 'Price: high to low',
      id: 'highToLowRadio',
    },
    {
      label: 'Name',
      id: 'name-radio',
    },
  ];

  const colorsStates = [
    {
      label: 'black',
      id: 'blackR',
    },
    {
      label: 'brown',
      id: 'brown-r',
    },
    {
      label: 'white',
      id: 'whiteR',
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

  const getSubCategories = () => {
    getCollection('subCategory', [
      match.params.type === 'product' ? 'ProductCategory' : 'RoomCategory',
      'array-contains',
      `${match.params.id}`,
    ]).then((allSubCategories) => {
      setSubCategories(allSubCategories);
    });
  };

  const getProducts = () => {
    getCollection('Products', ['SubCategory', '==', match.params.subId])
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log('error :', err));
  };

  useEffect(async () => {
    getProducts();
    getSubCategories();
  }, []);
  
  return (
    <div className='mt-nav-2 pt-nav border-top'>
      <Breadcrumb params={match.params} />

      <SectionTitle title='Children beds' />

      <section className='col-12 col-md-7 col-lg-7'>
        <p className='description'>
          We understand that growing kids have lots of needs. Like a quiet spot
          to relax or a place to do their homework. That's why loft beds for
          kids are a super-smart multi-tasking solution, helping you free up
          space for a desk, sofa, wardrobe or pillow fort. Bring home a
          children's loft bed today!
        </p>
      </section>

      <div className='row sticky-top filter-row'>
        <div className='col-12 col-lg-8 d-flex flex-nowrap overflow-auto py-3 my-2'>
          {/* <FilterButton title="compare" /> */}
          <FilterButton title='sort' icon='fas fa-chevron-down' />
          <FilterDropList
            listName='sort-group'
            checkType='radio'
            items={sortStates}
          />

          <FilterButton title='color' icon='fas fa-chevron-down' />
          <FilterDropList
            listName='colors-group'
            checkType='radio'
            items={colorsStates}
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

          <FilterButton title='material' icon='fas fa-chevron-down' noDrop />
          <FilterDropList
            listName='material-group'
            checkType='radio'
            items={[]}
          />

          <FilterButton title='allFilters' icon='fas fa-filter' noDrop />
        </div>

        <ProductRoomBtn />
      </div>

      <div className='row' id='show-proDetail'>
        <Loader />

        {products?.map((i) => (
          <ProductCard
            key={i.id}
            productData={i.data()}
            pId={i.id}
            showOptions
          />
        ))}
      </div>

      <SectionTitle title='Related categories' />
      <div className='row mx-auto g-3 categories-slidder'>
        {subCategories &&
          subCategories.map((subcategory) => {
            return (
              <SubCategoryCard
                element={subcategory}
                key={subcategory.id}
                params={match.params}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
