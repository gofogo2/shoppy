import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut,onAuthStateChanged    } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export async function login() {
  const user = await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    })
    .catch(console.error);

    return user;
}


export function logout(){
    return signOut(auth).then(()=>{return null});
}

export  function onUserStateChanged(callback){
  
    onAuthStateChanged(auth,async (user) => {
      const updatedUser = user? await adminUser(user):null;
      console.log(updatedUser);
      callback(updatedUser);
      });
}

async function adminUser(user){
  return get(ref(database,'Admins')).then((snapshot)=>{
    if(snapshot.exists()){
      const admins = snapshot.val();    
      const isAdmin = admins.includes(user.uid);

      return{...user,isAdmin}

    }
    return user;
  }).catch(e=>console.log(e));
}


