import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4",
  authDomain: "ikea-8dc72.firebaseapp.com",
  projectId: "ikea-8dc72",
  storageBucket: "ikea-8dc72.appspot.com",
  messagingSenderId: "293717792182",
  appId: "1:293717792182:web:f170e2edfe2370c9769d17",
};

const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

var menu = document.getElementById("main-menu");
var offCanva = document.getElementById("offcanvasExample");
var content;
var Cat_ID= "M2601fIIjtQ9r7L5QfnJ";

async function getCategories() {
  let prCatListEl = document.getElementById("products-list");

  var allCategories = await getDocs(collection(fireStore, "ProductCategories"));
  prCatListEl.innerHTML = "";
  allCategories.docs.forEach((element) => {
    console.log(element.id, element.data().Name);
    prCatListEl.innerHTML += 
    `<li><a href="./pages/category.html"  id=${element.id} onclick="setSession('ProductCategories',this)">
      ${element.data().Name} </a></li>`;
  });
}

window.setSession = setSession;
function setSession(key,element) {
    sessionStorage.setItem(key,element.id); 
    console.log(key,element.id);   
}

window.ShowDiv = ShowDiv;
function ShowDiv(id) {
  content = document.getElementById(id);
  content.style.display = "block";
  menu.style.display = "none";
  if (id === "p-content") {
    getCategories();
  }
}

window.ShowMain = ShowMain;
function ShowMain() {
  menu.style.display = "block";
  content.style.display = "none";
}
