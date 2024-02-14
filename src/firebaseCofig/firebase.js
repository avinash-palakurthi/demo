import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDUxwxz5raXa7cEZJGyerxnuBV2nlB3oi0",
	authDomain: "redpill-b7f68.firebaseapp.com",
	projectId: "redpill-b7f68",
	storageBucket: "redpill-b7f68.appspot.com",
	messagingSenderId: "784499453473",
	appId: "1:784499453473:web:e986180715ecc1327e3d60",
	measurementId: "G-RFY7K5V7CV",
	// measurementId: "G-RFY7K5V7CV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		await signInWithRedirect(auth, provider);
	} catch (error) {
		console.log(error);
	}
};
export { auth, signInWithGoogle, storage, firestore, app };
