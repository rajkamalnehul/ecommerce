import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config ={
    
        apiKey: "AIzaSyAtmSlLlcnAxSWSEeWf40TAVK8HR2bBnm4",
        authDomain: "crown-db-f0505.firebaseapp.com",
        databaseURL: "https://crown-db-f0505.firebaseio.com",
        projectId: "crown-db-f0505",
        storageBucket: "crown-db-f0505.appspot.com",
        messagingSenderId: "376954552952",
        appId: "1:376954552952:web:646339c6cddc9cd9e9e38d"
        

};

export const createUserProfileDocument = async(userAuth, additionalData)=>{
 if(!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userRef.get();
 console.log(snapShot);
 
 
 if(!snapShot.exists){
         const{displayName,email} = userAuth;
         const createdAt = new Date();

         try{
                 await userRef.set({
                         displayName,
                         email,
                         createdAt,
                         ...additionalData
                 })

         }
         catch(error){
                console.log('error creating user',error.message);
         }

 }
 return userRef;
  
};


firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;

