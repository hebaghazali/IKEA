
  document.getElementById("catg-b-crumb").innerHTML = 
  sessionStorage.getItem("ProductCategoryName");
  
  let subCatName=sessionStorage.getItem("subCategoryName");
  document.getElementById("sub-b-crumb").innerHTML = subCatName;
  
  document.getElementById("sub-title").innerHTML =subCatName;

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
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
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4",
  authDomain: "ikea-8dc72.firebaseapp.com",
  projectId: "ikea-8dc72",
  storageBucket: "ikea-8dc72.appspot.com",
  messagingSenderId: "293717792182",
  appId: "1:293717792182:web:f170e2edfe2370c9769d17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// reference to firestore
const firestore = getFirestore(app);

//listen on any change
const subCateg = sessionStorage.getItem("subCategory");

//query for filtering query(collection, where( "attr","operator","value"))
const q = query(
  collection(firestore, "Products"),
  where("SubCategory", "==", `${subCateg}`)
);

// onSnapshot( q,callback)
onSnapshot(q, (snapshot) => {
  var div = document.querySelector("#show-proDetail");
  div.innerHTML = "";
  snapshot.size == 0
    ? (div.innerHTML = `<div class="text-center py-5" id="noData">
                    <h4>oops no data :(</h4>
                  </div>`)
    : snapshot.forEach((doc) => {
        ShowData(doc);
      });
});

function ShowData(product) {
  var productData = product.data();
  var div = document.querySelector("#show-proDetail");
  var para = `
    <div class="col-6 col-md-4 col-lg-3 prod-container">
    <header class="d-flex align-items-center justify-content-between"  style="padding:  .625rem;"  > 
    <div class="form-check" >
    <input
    class="form-check-input"
    type="checkbox"
    value=""
    id=""
    />
    <small>Compare</small> 
    </div>

    <i class="far fa-heart "></i>
    </header>

    <a class="card category-card col-12 " href="../productsA.html">
    <img
    src="https://www.ikea.com/eg/en/images/products/soederhamn-chaise-longue-samsta-orange__0802365_pe768432_s5.jpg?f=xxs"
    class="card-img-top"
    alt="sofa"
    />
    </a>

    <div class="mt-1 position-relative"">
    <strong class="new">New</strong>
    <p class="card-text">                
    <a href="#">${productData.Name}</a>
    <p>${productData.Material}</p>
    <p>3-seats sofa</p>
    <strong >EGP ${productData.Price}</strong>
    </p>
    <button class="card-icon" ><i class="fas fa-cart-plus"></i></button>
    </div>

    <div class="row">
    <small class="col-12">more variants</small>
    <a class="variant-container">
    <img  class='variant-img' src="https://www.ikea.com/eg/en/images/products/vimle-3…saxemara-light-blue__0949435_pe799741_s5.jpg?f=xu" alt="3-seat sofa, blue"/>
    </a>
    <a class="variant-container">
    <img  class='variant-img' src="https://www.ikea.com/eg/en/images/products/vimle-3…saxemara-light-blue__0949435_pe799741_s5.jpg?f=xu" alt="3-seat sofa, blue"/>
    </a>
    <a class="variant-container">
    <img  class='variant-img' src="https://www.ikea.com/eg/en/images/products/vimle-3…saxemara-light-blue__0949435_pe799741_s5.jpg?f=xu" alt="3-seat sofa, blue"/>
    </a>
    </div>
    </div>
    `;

  div.innerHTML += para;
}
