  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
  import { getFirestore,addDoc,collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

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

  //reference to firebase
  const firestore = getFirestore(app);
  
  const auth=getAuth();

  window.signUp = signUp;
  function signUp(ev){
      ev.preventDefault();
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      if(validateInput(null))
      {
        try{
          register(email,password)
            
          // console.log(email,password);
        }
        catch(e){
        // alert(e);
        }
  
      }
  }

  function register(email,password)
  {
    createUserWithEmailAndPassword(auth,email,password)
    // .then(()=>{
    //   // onAuthStateChanged(auth,(user)=>{
    //   //   if(user)
    //     location.assign("../../pages/profile.html")
    // // })   
    // })
    .catch((error)=>{
        console.log("register error")
        var emailValidation = document.getElementById("email-feedback");
        emailValidation.textContent="account already exists";
        emailValidation.setAttribute("class","text-danger");
    })
    .then((createdUser)=>{
      console.log(createdUser.user.uid);

      var fname = document.getElementById("firstname").value;
      var lname = document.getElementById("lastname").value;
      var phoneNum = document.getElementById("phone").value;
      var address = document.getElementById("address").value;
      var data={
        FirstName:fname,
        LastName:lname,
        PhoneNum:phoneNum,
        Address:address,
        Email:email,
        Password:password,
        Purchased:[]
    }
    addDoc(collection(firestore,'users'),data).then(()=>{
      location.assign("../../pages/profile.html")
    })
    // console.log(user);
  })
  }

var validFName=false;
var validLName=false;
var validEmail=false;
var validPhone=false;
var validPassword=false;
var validAddress=false;

window.validateInput=validateInput;
function validateInput(e)
{
  var nameRegex=/[A-Za-z]{3,}/
  var emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  var phoneRegex=/^(01)(0|1|5|2)[0-9]{8}$/
  var passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[&#*@_])[a-zA-Z0-9-&#*@_]{8,}$/
  var addressRegex=/^.{1,}$/
  var allValid=false;
  if(e===null)
  {
    if(validFName && validLName && validPassword && validPhone &&validAddress && validEmail)
    {
      allValid=true;
    }
  }
  else{
    if(e.target.id==="firstname")
    {
      var FName = document.getElementById("firstname-feedback")
      if(!(nameRegex.test(e.target.value)))
      {
        FName.textContent="First name should be more than 2 characters!";
        FName.setAttribute("class","text-danger")
        validFName=false;
      }
      else{
        FName.textContent="Looks good!";
        FName.setAttribute("class","text-success")
        validFName=true;
      }
    }
    else if(e.target.id==="lastname")
    {
      var LName = document.getElementById("lastname-feedback")
      if(!(nameRegex.test(e.target.value)))
      {
        LName.textContent="Last name should be more than 2 characters!";
        LName.setAttribute("class","text-danger")
        validLName=false;
      }
      else{
        LName.textContent="Looks good!";
        LName.setAttribute("class","text-success")
        validLName=true;
      }
    }
    else if(e.target.id==="phone")
    {
      var Phone = document.getElementById("phone-feedback")
      if(!(phoneRegex.test(e.target.value)))
      {
        Phone.textContent="You should enter a valid mobile number ";
        Phone.setAttribute("class","text-danger")
        validPhone=false;
      }
      else{
        Phone.textContent="Looks good!";
        Phone.setAttribute("class","text-success")
        validPhone=true;
      }
    }
    else if(e.target.id==="address")
    {
      var Address = document.getElementById("address-feedback")
      if(!(addressRegex.test(e.target.value)))
      {
        Address.textContent="you should enter your address";
        Address.setAttribute("class","text-danger")
        validAddress=false;
      }
      else{
        Address.textContent="Looks good!";
        Address.setAttribute("class","text-success")
        validAddress=true;
      }
    }
    else if(e.target.id==="email")
    {
      var Email = document.getElementById("email-feedback")
      if(!(emailRegex.test(e.target.value)))
      {
        Email.textContent="You should enter a valid email ";
        Email.setAttribute("class","text-danger")
        validEmail=false;
      }
      else{
        Email.textContent="Looks good!";
        Email.setAttribute("class","text-success")
        validEmail=true;    
      }
    }
    else if(e.target.id==="password")
    {
      var PassWord = document.getElementById("password-feedback")
      if(!(passwordRegex.test(e.target.value)))
      {
        PassWord.textContent="Password morethan 8 characters is required that contains an upper case, a lower case, a special character & a number";
        PassWord.setAttribute("class","text-danger")
        validPassword=false;
      }
      else{
        PassWord.textContent="Looks good!";
        PassWord.setAttribute("class","text-success")
        validPassword=true;
      }
    }  
  }
  return allValid;
}