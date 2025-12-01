const openBtn = document.getElementById("openBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("popupcloseBtn");

openBtn.addEventListener("click", () =>{
    popup.style.display ="block";
   
})

closeBtn.addEventListener("click" , () => {
    popup.style.display="none";

})


const chatopen = document.getElementById("chatbotopen");
const chatpopup = document.getElementById("chatbotpopup");
const chatclose = document.getElementById("chatbotclose");

chatopen.addEventListener("click", () => {
    chatpopup.style.display ="block";
});

chatclose.addEventListener("click", () => {
    chatpopup.style.display ="none";
});







// ////////////////////////////////////////////  fire base cdn /////////////////////////////////////



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyAQl55bPrJmIl_kkJE8wZyl8Tbj33D3mns",
  authDomain: "portfolio-connect.firebaseapp.com",
  projectId: "portfolio-connect",
  storageBucket: "portfolio-connect.appspot.com",
  messagingSenderId: "985114298964",
  appId: "1:985114298964:web:9fd62d0a1aa268c5c8fbc1",
  measurementId: "G-PL3SC16J4F",
  databaseURL: "https://portfoliocontect-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getDatabase(app);
const db = getDatabase(app)

//console.log("Firebase Connected!");

set(ref(db, "test"), {
  name: "Sachin",
  mobile: "1234567890",
  email: "sachin@gmail.com"
})
  .then(() => console.log("Data saved!"))
  .catch((err) => console.log("Error:", err));

// CONTACT FORM
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("msg").value;

  set(ref(db, "contacts/" + Date.now()), {
    name,
    mobile,
    email,
    message,
  })
    .then(() => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch((err) => {
      alert("Error");
      console.log(err);
    });
});



///////////////////////////////////////////share quesiion button/////////
const form1 = document.getElementById("askForm");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  const question = document.getElementById("question").value;
 

  set(ref(db, "askquestion/" + Date.now()), {
    question,
   
  })
    .then(() => {
      alert("Form submitted successfully!");
      form1.reset();
    })
    .catch((err) => {
      alert("Error");
      console.log(err);
    });
});

