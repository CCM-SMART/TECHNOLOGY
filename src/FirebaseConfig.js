import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcCZ5KByl9lSd7tj-fAkV-OV7KSRpDwX0",
  authDomain: "chat-web-a429a.firebaseapp.com",
  databaseURL: "https://chat-web-a429a-default-rtdb.firebaseio.com",
  projectId: "chat-web-a429a",
  storageBucket: "chat-web-a429a.appspot.com",
  messagingSenderId: "784868548944",
  appId: "1:784868548944:web:c1cd9de9d246266b048c55",
  measurementId: "G-46ZXH6M2BH"
};
const fire = firebase.initializeApp(firebaseConfig);



export default fire;
