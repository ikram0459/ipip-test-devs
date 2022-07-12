import * as firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyDjn1YPkXUGvyoCHKc1Znc2x260nEs07kQ",
    authDomain: "ipip-test-devs.firebaseapp.com",
    projectId: "ipip-test-devs",
    storageBucket: "ipip-test-devs.appspot.com",
    messagingSenderId: "500811842652",
    appId: "1:500811842652:web:64e8838e06175a0b049299",
    measurementId: "G-1RMBN0P812"
  };

  firebase.initializeApp(config);
    // firebase.database().ref().set({
    //     name: 'Ipip'
    // });
  export default firebase;