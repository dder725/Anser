import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyBCI6YlPIEWU6LoNyWeb3moMvEIDXTSPGs",
  authDomain: "anser-ca9ee.firebaseapp.com",
  databaseURL: "https://anser-ca9ee.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
