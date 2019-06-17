import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAUxhNDDFHci8BbLhzPlQjSodclyiS6Ovo",
    authDomain: "icas-phase-1.firebaseapp.com",
    databaseURL: "https://icas-phase-1.firebaseio.com",
    projectId: "icas-phase-1",
    storageBucket: "icas-phase-1.appspot.com",
    messagingSenderId: "923279483711",
    appId: "1:923279483711:web:f7ad3752a5528a0c"
  };
  // Initialize Firebase
  class Firebase {
	constructor() {
		firebase.initializeApp(firebaseConfig);
		this.auth = firebase.auth();
		this.db = firebase.firestore();
		this.storage = firebase.storage();
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(username, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: username
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUser(){
		return this.auth().currentUser
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	getStorage(){
		return this.storage;
	}

}

export default new Firebase();