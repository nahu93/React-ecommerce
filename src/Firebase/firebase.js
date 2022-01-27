import firebase from 'firebase/app'
import 'firebase/firestore'


var  firebaseconfig = {

    apiKey: "AIzaSyDCiYiDgSj-IfW6f3jBJsq1HWk8pIPzegU",
    authDomain: "react-curso-coder.firebaseapp.com",
    projectId: "react-curso-coder",
    storageBucket: "react-curso-coder.appspot.com",
    messagingSenderId: "272094072506",
    appId: "1:272094072506:web:2138a9dd72e169e7fe3c83",
    measurementId: "${config.measurementId}"

};



const app = firebase.initializeApp (firebaseconfig);

export default function getFirestore(){
    return firebase.firestore(app)
}