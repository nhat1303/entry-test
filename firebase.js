import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCuAUpRdbOxRCsAH0F0rssr9o0ZDUjXJ7g",
    authDomain: "todo-crud-d0a9f.firebaseapp.com",
    projectId: "todo-crud-d0a9f",
    storageBucket: "todo-crud-d0a9f.appspot.com",
    messagingSenderId: "569705916068",
    appId: "1:569705916068:web:06fb64d0aed336d5bd2831"
  };

  // const firebaseConfig = {
  //      apiKey: "AIzaSyAzxgO1Ic7NaPlBNxYf82sL43Qi-EJsaKo",
  //      authDomain: "signin-firebase-48dd9.firebaseapp.com",
  //      databaseURL: "https://signin-firebase-48dd9-default-rtdb.asia-southeast1.firebasedatabase.app",
  //      projectId: "signin-firebase-48dd9",
  //      storageBucket: "signin-firebase-48dd9.appspot.com",
  //      messagingSenderId: "438435219401",
  //      appId: "1:438435219401:web:2d493bd8efdfee7be3ca18",
  //      measurementId: "G-THYWGLPM92"
  //    };
    
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };