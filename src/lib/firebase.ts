import { initializeApp, type FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, type Auth, connectAuthEmulator } from 'firebase/auth';

// Initialize Firebase
const app: FirebaseApp = initializeApp(
    {
        apiKey: "AIzaSyCegRf8GZYR9yGo3QWeoRUQrs9B1GvabP4",
        authDomain: "example-c76ca.firebaseapp.com",
        projectId: "example-c76ca",
        storageBucket: "example-c76ca.appspot.com",
        messagingSenderId: "773371216860",
        appId: "1:773371216860:web:b0ef8bbd6ce51ffa6b0519",
        measurementId: "G-ZQ17N5PNFL"
    }
);

export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);

// For SvelteKit to build, must check if window is defined before trying to use it
if (typeof window !== 'undefined') {
    // Only connect to emulator(s) if localhost
    if (window.location.hostname.includes('localhost')) {
        connectFirestoreEmulator(db, "127.0.0.1", 8080)
        connectAuthEmulator(auth, "http://127.0.0.1:9099")
    }
}