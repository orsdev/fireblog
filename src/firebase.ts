import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkfx6hUmV-qS3hAfxii3YDwzUy-KuD29M",
  authDomain: "fireblog-fb1e1.firebaseapp.com",
  projectId: "fireblog-fb1e1",
  storageBucket: "fireblog-fb1e1.appspot.com",
  messagingSenderId: "856813616187",
  appId: "1:856813616187:web:d5a42ef6281aeea40e301e"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const user_collection = db.collection("users");
const post_collection = db.collection("posts");

export {
  auth,
  user_collection,
  post_collection
};
