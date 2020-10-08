import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA5b_pWGKvNB1eFDupb84LVbbLFtvWjbSQ",
    authDomain: "employeemanagement-d1a9e.firebaseapp.com",
    databaseURL: "https://employeemanagement-d1a9e.firebaseio.com",
    projectId: "employeemanagement-d1a9e",
    storageBucket: "employeemanagement-d1a9e.appspot.com",
    messagingSenderId: "727995219984",
    appId: "1:727995219984:web:ff62fa1a4332c979a24a95",
    measurementId: "G-0CNYLPK07C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;