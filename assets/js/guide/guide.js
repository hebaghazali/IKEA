// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore , collection , onSnapshot , doc , where , query , getDocs} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4",
authDomain: "ikea-8dc72.firebaseapp.com",
projectId: "ikea-8dc72",
storageBucket: "ikea-8dc72.appspot.com",
messagingSenderId: "293717792182",
appId: "1:293717792182:web:f170e2edfe2370c9769d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app) ;


onSnapshot(collection(fireStore , 'ProductCategories') , (SnapChanges)=>{
    console.log("collection",SnapChanges);

    var sliderElement = document.getElementById("guideTest");
    sliderElement.innerHTML = "" ;
    SnapChanges.forEach((doc) => {
        ShowData(doc)
    })
})

window.ShowData = ShowData
function ShowData (element)
{
    console.log("doc",element.data());
    var elementData = element.data()
    var sliderElement = document.getElementById("guideTest");
        var row = `
            <ul>
            <li onclick="FillElemData(('${element.id}'))">${elementData.Name}</li>
            </ul> `
        
        sliderElement.innerHTML+=row;  // To insert data into table
}

window.FillElemData = FillElemData
async function FillElemData (ElemID)
{
    const CategID = ElemID
    console.log(CategID);

    const que = query(collection(fireStore,'subCategory'),
                where('ProductCategory','==',ElemID))
    
    const ItemResult = await getDocs(que)
    ItemResult.forEach((doc)=>{
            console.log(doc.data().Name);
            var Sub = document.getElementById("sub");
            var row = `
            <ul>
            <li onclick=>${doc.data().Name}</li>
            </ul> `
        
        Sub.innerHTML+=row;
            
    })
}
