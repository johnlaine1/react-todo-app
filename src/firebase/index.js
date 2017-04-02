import firebase from 'firebase';

try {
  var config = {
  apiKey: "AIzaSyCCFHqBJGRE1nyjS2QQ21Z7dSFkNyVQIVs",
  authDomain: "todo-app-29cec.firebaseapp.com",
  databaseURL: "https://todo-app-29cec.firebaseio.com",
  projectId: "todo-app-29cec",
  storageBucket: "todo-app-29cec.appspot.com",
  messagingSenderId: "691030097454"
  };

  firebase.initializeApp(config);
}catch(e) {
  
}

export const firebaseRef = firebase.database().ref();
export default firebase;
