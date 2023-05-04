// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// env variable test
console.log('environment variable ', import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyAd8fMahQmq7BAuCyeowiO8eJgnSelBwG8",
//   authDomain: "the-news-dragon-d85fc.firebaseapp.com",
//   projectId: "the-news-dragon-d85fc",
//   storageBucket: "the-news-dragon-d85fc.appspot.com",
//   messagingSenderId: "550891865935",
//   appId: "1:550891865935:web:9f525a71ca133a65d2e73a"