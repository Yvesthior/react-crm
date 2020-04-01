import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDi4ozKnEFdnxGWN_yMRLDYVFgYTvwyW3Y",
  authDomain: "crm-linkedin-ded5d.firebaseapp.com",
  databaseURL: "https://crm-linkedin-ded5d.firebaseio.com",
  projectId: "crm-linkedin-ded5d",
  storageBucket: "crm-linkedin-ded5d.appspot.com",
  messagingSenderId: "70408463997",
  appId: "1:70408463997:web:8cee4ddb418a063e8c3314",
  measurementId: "G-449CQMJM1T"
};
firebase.initializeApp(config);

export default firebase;
