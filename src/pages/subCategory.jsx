import { useParams } from 'react-router-dom';
import SubCategoryCard from '../components/cards/subcategoryCard';
import TextRightCard from '../components/cards/textRightCard';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
// import {
//   getFirestore,
//   collection,
//   query,
//   where,
//   getDocs,
// } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js';
import { useEffect, useState } from 'react';
import StepsCard from '../components/cards/stepsCard';
import { getCollection } from '../services/firebase';
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
//   authDomain: 'ikea-8dc72.firebaseapp.com',
//   projectId: 'ikea-8dc72',
//   storageBucket: 'ikea-8dc72.appspot.com',
//   messagingSenderId: '293717792182',
//   appId: '1:293717792182:web:f170e2edfe2370c9769d17',
// };
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// onSnapshot(q, snapshot => {
// var div = document.querySelector('.categories-slidder');
// div.innerHTML = '';
// snapshot.size == 0
//     ? (div.innerHTML = `<div class="text-center py-5" id="noData">
//                 <h4>oops no data :(</h4>
//                 </div>`)
//     : snapshot.forEach((doc) => {
//         ShowData(doc);
//     });
// });

const SubCategory = props => {
  const params = useParams();
  const [subCategories, setSubCategories] = useState([]);

  const getSubCategories = field => {
    // const q = query(
    //   collection(firestore, 'subCategory'),
    //   where(field, 'array-contains', `${params.id}`)
    // );
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
            />
          );
        })}
      </div>
      <TextRightCard />
      <StepsCard />
    </>
  );
};
export default SubCategory;
