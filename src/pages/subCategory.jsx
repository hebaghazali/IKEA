import { useParams } from 'react-router-dom';
import SubCategoryCard from '../components/cards/subcategoryCard';
import { useEffect, useState } from 'react';
import StepsCard from '../components/cards/stepsCard';
import { getCollection } from '../services/firebase';

const SubCategory = props => {
  const params = useParams();
  const [subCategories, setSubCategories] = useState([]);

  const getSubCategories = field => {
    getCollection('subCategory', [field, 'array-contains', `${params.id}`])
      .then(allSubCategories => {
        setSubCategories(allSubCategories);
      })
      .catch(err => console.log('error :', err));
  };
  useEffect(() => {
    if (params.type === 'product') {
      getSubCategories('ProductCategory');
    } else if (params.type === 'room') {
      getSubCategories('RoomCategory');
    }
  });
  return (
    <>
      <h4 className='head-title'>{params.name}</h4>
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
