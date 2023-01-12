import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyuQvYVEAhGTIcajIz606JSsWTzo6U55s",
  authDomain: "todo-app-26bd8.firebaseapp.com",
  projectId: "todo-app-26bd8",
  storageBucket: "todo-app-26bd8.appspot.com",
  messagingSenderId: "331394420114",
  appId: "1:331394420114:web:3c16c022b8c338306b854b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };