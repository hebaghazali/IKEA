import FilterButton from './../../components/filterButton/filterButton';
import FilterDropList from './../../components/filterDropList/FilterDropList';
import { useEffect, useState } from 'react';
import {
  getCollection,
  filterCollection,
  sortCollection,
  sortCollectionWithoutCondition,
} from '../../services/firebase';
import { useTranslation } from 'react-i18next';

import FiltersMenu from './filtersMenu.jsx/filtersMenu';

const Filters = ({
  setLoading,
  allProducts,
  setProducts,
  subId,
  sale,
  newArrival,
}) => {
  const { t, i18n } = useTranslation();

  const [materials, setMaterials] = useState(null);
  const [colors, setColors] = useState(null);
  const [widthes, setWidthes] = useState(null);
  const [lengthes, setLengthes] = useState(null);
  const [heights, setHeights] = useState(null);

  const getUniqueFilters = () => {
    console.log('loop');
    let colors = [];
    let materials = [];
    let widthes = [];
    let lengthes = [];
    let heights = [];

    allProducts.forEach((product) => {
      const { ColorAr, Color, Material, MaterialAr, Width, Length, Height } =
        product.data();

      let foundColor = colors.find(
        (col) => col.label === (i18n.language == 'en' ? Color : ColorAr)
      );
      !foundColor &&
        colors.push({
          label: i18n.language == 'en' ? Color : ColorAr,
          id: i18n.language == 'en' ? Color : ColorAr,
        });

      let foundMaterial = materials.find(
        (mat) => mat.label === (i18n.language == 'en' ? Material : MaterialAr)
      );
      !foundMaterial &&
        (i18n.language == 'en' ? Material : MaterialAr) != undefined &&
        materials.push({
          label: i18n.language == 'en' ? Material : MaterialAr,
          id: i18n.language == 'en' ? Material : MaterialAr,
        });

      let foundWidth = widthes.find((wid) => wid.label === Width);
      !foundWidth &&
        Width != undefined &&
        widthes.push({ label: Width, id: Width });

      let foundLength = lengthes.find((len) => len.label === Length);
      !foundLength &&
        Length != undefined &&
        lengthes.push({ label: Length, id: Length });

      let foundHeight = heights.find((height) => height.label === Height);
      !foundHeight &&
        Height != undefined &&
        heights.push({ label: Height, id: Height });
    });

    materials.length > 0 && setMaterials(materials);
    widthes.length > 0 && setWidthes(widthes);
    colors.length > 0 && setColors(colors);
    lengthes.length > 0 && setLengthes(lengthes);
    heights.length > 0 && setHeights(heights);
  };

  useEffect(() => {
    allProducts && getUniqueFilters();
  }, [allProducts]);

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

  return (
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

      {colors && (
        <>
          <FilterButton title={t('Color')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='colors-group'
            checkType='radio'
            items={colors}
            clickHandler={(color) =>
              filterProds(i18n.language == 'en' ? 'Color' : 'ColorAr', color)
            }
          />
        </>
      )}

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

      {materials && (
        <>
          <FilterButton title={t('Material')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='material-group'
            checkType='radio'
            items={materials}
            clickHandler={(material) =>
              filterProds(
                i18n.language == 'en' ? 'Material' : 'MaterialAr',
                material
              )
            }
          />
        </>
      )}

      {widthes && (
        <>
          <FilterButton title={t('Width')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='Width'
            checkType='radio'
            items={widthes}
            clickHandler={(width) => filterProds('Width', width)}
          />
        </>
      )}

      {lengthes && (
        <>
          <FilterButton title={t('Length')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='length'
            checkType='radio'
            items={lengthes}
            clickHandler={(len) => filterProds('Length', len)}
          />
        </>
      )}

      {heights && (
        <>
          <FilterButton title={t('Height')} icon='fas fa-chevron-down' />
          <FilterDropList
            listName='height'
            checkType='radio'
            items={heights}
            clickHandler={(height) => filterProds('Height', height)}
          />
        </>
      )}

      <FilterButton
        title={t('AllFilters')}
        icon='fas fa-filter'
        noDrop
        offcanvas
      />
      <FiltersMenu />
    </div>
  );
};

export default Filters;
