  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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
  const auth=getAuth();

  window.signUp = signUp;
  function signUp(ev){
      ev.preventDefault();
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      try{
        register(email,password);   
        console.log(email,password);
      }
      catch(e){
          alert(e);
      }
  }

  function register(email,password)
  {
    createUserWithEmailAndPassword(auth,email,password).then((createdUser)=>{
        console.log(createdUser.user.uid);
    }).catch((error)=>{
        alert(error.message);
    })
  }

  onAuthStateChanged(auth,(user)=>{
    if(user)
    location.assign("../../pages/profile.html")
})