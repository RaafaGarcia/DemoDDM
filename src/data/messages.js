// import * as firebase from 'firebase/app'
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");
// import 'firebase/firestore';

import {Observable} from 'rxjs/Observable';
export function all(){
    const database = firebase.firestore();
    return Observable.create(function(observer){
        database.collection('messages').onSnapshot((snapshot)=>{
            observer.next(snapshot.docs.map(docSnapshot => docSnapshot.data()));
        })
    });
}