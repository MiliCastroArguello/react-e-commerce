import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCNNF6XYbIXry2hZu0JW-3Jtt54BtJ-dx8",
    authDomain: "react-e-commerce-ccd53.firebaseapp.com",
    projectId: "react-e-commerce-ccd53",
    storageBucket: "react-e-commerce-ccd53.appspot.com",
    messagingSenderId: "236284074995",
    appId: "1:236284074995:web:6b0c31870a273ebaea1086"
};
  
const app = initializeApp(firebaseConfig);

export const getPrendas = async function () {
  const dataBase = getFirestore(app);
  const prendasCol = collection(dataBase, 'items');
  const prendasSnapshot = await getDocs(prendasCol);
  return prendasSnapshot.docs.map(doc => doc.data())
}

export default app;