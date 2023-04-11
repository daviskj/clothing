import { initializeApp } from 'firebase/app';
import { getAuth,
        signInWithRedirect, 
        signInWithPopup,
        GoogleAuthProvider 
        }from 'firebase/auth';
import { getFirestore,
         doc,
         getDoc,
         setDoc } 
         from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVMWvSNqzz-gkXuxyUY0hQTDhxpll4y5I",
  authDomain: "crwn-clothing-db-7ce31.firebaseapp.com",
  projectId: "crwn-clothing-db-7ce31",
  storageBucket: "crwn-clothing-db-7ce31.appspot.com",
  messagingSenderId: "713665255555",
  appId: "1:713665255555:web:468f961ab5923abb55e3b6",
  measurementId: "G-4TZ6ZW5S55"
  };
  
  // Initialize Firebase
  // eslint-disable-next-line no-unused-vars
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};