import { useParams } from 'react-router-dom';
import SubCategoryCard from '../components/cards/subcategoryCard';
import TextRightCard from '../components/cards/textRightCard';
import { useEffect, useState } from 'react';
import StepsCard from '../components/cards/stepsCard';
import { getCollection, getDocumentByID } from '../services/firebase';
import { useTranslation } from 'react-i18next';

const SubCategory = props => {
  const params = useParams();
  const { i18n }= useTranslation();
  const [subCategories, setSubCategories] = useState([]);
  const [category,setCategory]=useState({});

  const getSubCategories = field => {
    getCollection('subCategory', [field, 'array-contains', `${params.id}`])
      .then(allSubCategories => {
        setSubCategories(allSubCategories);
      })
      .catch(err => console.log('error :', err));
  };
  const getCategoryData = name =>{
    getDocumentByID(name,params.id).then((res)=>{
      setCategory(res);
    })
  }
  useEffect(() => {
    if (params.type === 'product') {
      getSubCategories('ProductCategory');
      getCategoryData('ProductCategories');
    } else if (params.type === 'room') {
      getSubCategories('RoomCategory');
      getCategoryData('RoomCategories')
    }
  },[category]);
  return (
    <>
      <h4 className='head-title'>{i18n.language==='en'?category.Name:category.NameAr}</h4>
      <div className='row mx-auto g-3 categories-slidder'>
        {subCategories.map(subcategory => {
          return (
            <SubCategoryCard
              element={subcategory}
              key={subcategory.id}
              params={params}
              type={params.type}
              name={params.name}
              id={params.id} //categId
            />
          );
        })}
      </div>
      {/* <TextRightCard /> */}
      <StepsCard />
    </>
  );
};
export default SubCategory;
