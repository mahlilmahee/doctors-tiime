import initializingFirebase from "../Firebase/firebase.initialize";

import { getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged ,signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
initializingFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('')
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignin=()=>{
        signInWithPopup(auth, provider)
         .then((result) => {
           
            // The signed-in user info.
             setUser(result.user);
             console.log(result.user)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            setError(error.message);
            // // The email of the user's account used.
            // const email = error.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });

    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser('')
            }
          });
    },[]);
    const googleSignOut=()=>{
        signOut(auth).then(() => {
            setUser('')
          }).catch((error) => {
            setError('')
          });
    }
    return{
        googleSignin,
        user,error,
        googleSignOut
    }

}
export default useFirebase;