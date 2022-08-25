// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
 } from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpjG9I38KwDN_lSrScaV2vwDFZKqsiz9k",
  authDomain: "crazy-coders-commerce.firebaseapp.com",
  projectId: "crazy-coders-commerce",
  storageBucket: "crazy-coders-commerce.appspot.com",
  messagingSenderId: "745439231371",
  appId: "1:745439231371:web:d65204882f7a03d6c8c38e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// GOOGLE PROVIDER

const googleProvider = new GoogleAuthProvider();


googleProvider.setCustomParameters( {
    prompt: "select_account"
});


export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach( (object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Done");
}


export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("email already taken.")
            } else {
                console.log("Error creating user", error.message);
            };
        }
    }

    return userDocRef;
} 


export const createAuthUserWithEmailPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


// My Code


export const getDocuments = async () => {

    const querySnapshot = await getDocs(collection(db, 'products'));

    const productArray = [];
    
    querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        productArray.push(data);
    });

    return productArray;
}