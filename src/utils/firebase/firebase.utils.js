import { initializeApp } from 'firebase/app';
import { getAuth,
        signInWithRedirect, 
        signInWithPopup,
        GoogleAuthProvider 
        }from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6OsEsEy5VxO1ghYaZ0x_6F-Lz0BnJO0s",
    authDomain: "clothing-db-8666d.firebaseapp.com",
    projectId: "clothing-db-8666d",
    storageBucket: "clothing-db-8666d.appspot.com",
    messagingSenderId: "453684222715",
    appId: "1:453684222715:web:95aa40b71931ee47bd2e5e"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);