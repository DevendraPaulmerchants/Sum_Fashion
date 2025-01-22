import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK8l7iY5o_XQdpCSp9awb6FkuXhYQFj4Y",
  authDomain: "sum-fashion-6ae92.firebaseapp.com",
  projectId: "sum-fashion-6ae92",
  storageBucket: "sum-fashion-6ae92.firebasestorage.app",
  messagingSenderId: "1564712640",
  appId: "1:1564712640:web:62145359e2d9adaf545725",
  measurementId: "G-96Q5Q3YG64"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export  const auth= getAuth(app) ;
auth.useDeviceLanguage();