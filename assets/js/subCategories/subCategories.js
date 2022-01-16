import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js';
document.getElementById('c-title').innerHTML=sessionStorage.getItem('ProductCategoryName');
document.getElementById('catg-b-crumb').innerHTML=sessionStorage.getItem('ProductCategoryName');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
  authDomain: 'ikea-8dc72.firebaseapp.com',
  projectId: 'ikea-8dc72',
  storageBucket: 'ikea-8dc72.appspot.com',
  messagingSenderId: '293717792182',
  appId: '1:293717792182:web:f170e2edfe2370c9769d17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// reference to firestore
const firestore = getFirestore(app);

//listen on any change
const prodCateg = sessionStorage.getItem('ProductCategory');

//query for filtering query(collection, where( "attr","operator","value"))
const q = query(
  collection(firestore, 'subCategory'),
  where('ProductCategory', 'array-contains', `${prodCateg}`)
);
// onSnapshot( q,callback)
onSnapshot(q, snapshot => {
  var div = document.querySelector('.categories-slidder');
  div.innerHTML = '';
  snapshot.size == 0
    ? (div.innerHTML = `<div class="text-center py-5" id="noData">
                  <h4>oops no data :(</h4>
                </div>`)
    : snapshot.forEach((doc) => {
        ShowData(doc);
      });
});

//   var https://www.ikea.com/global/assets/navigation/images = "https://www.ikea.com/global/assets/navigation/images/";

var imgaes = [
  'https://www.ikea.com/global/assets/navigation/images/gaming-furniture-55002.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/furniture-sets-55036.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/beds-bm003.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/sofas-fu003.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/bookcases-shelving-units-st002.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/tables-desks-fu004.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/cabinets-cupboards-st003.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/tv-media-furniture-10475.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/chests-of-drawers-drawer-units-st004.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/wardrobes-19053.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/chairs-fu002.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/outdoor-furniture-od003.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/sideboards-buffets-console-tables-30454.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/childrens-furniture-18767.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/room-dividers-46080.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/sideboards-buffets-console-tables-30454.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/childrens-furniture-18767.jpeg?imwidth=300',
  'https://www.ikea.com/global/assets/navigation/images/room-dividers-46080.jpeg?imwidth=300',
];
for (var i = 0; i < imgaes.length; i++) {
  var showImg = imgaes[i];
}
function ShowData(subCateg) {
  var Cat_ID = subCateg.id;
  var {Name} = subCateg.data();
  var div = document.querySelector('.categories-slidder');
  var row = `

   <a href="./products.html" class="card category-card col-4 col-lg-2" 
   id=${Cat_ID} name=${Name} 
   onclick=" setSession('subCategory',this)"
    >

     <img
     src=" ${showImg}"

       class="card-img-top"
       alt="..."
     />

     <div class="card-body category-body">
      <p class="card-text">${Name}</p>
     </div>
  </a>

    `;

  div.innerHTML += row;
}