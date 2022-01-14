  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAuth ,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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
  const auth=getAuth();

  window.logout=logout;
  function logout(){
     signOut(auth);
  }

  onAuthStateChanged(auth,(user)=>{
    user?
    document.getElementById("username").innerHTML+=user.email:
    location.assign('../../sign-in.html')    
})