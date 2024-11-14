import { signInWithPopup } from "firebase/auth"
import { auth ,db,provider, storage} from "../../firebase"
import * as actions from "./action"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore"
import Cookies from "js-cookie";

export function SignInAPI() {
   return (dispatch) => {
     signInWithPopup(auth, provider)
       .then((res) => {
         const user = res.user;
         dispatch(actions.SetUser(user)); 
         Cookies.set("accessToken", user.accessToken, { expires: 7 }); 
       })
       .catch((err) => {
         alert(err.message);
       });
   };
 }
export function getUserAuth(){
   return(dispatch)=>{
     auth.onAuthStateChanged(async (user)=>{
         if(user){
            dispatch(actions.SetUser(user))
         }
     })

   }
}
export function SingOutAPI() {
   return (dispatch) => {
       auth.signOut()
           .then(() => {
               dispatch(actions.SetUser(null));
               Cookies.remove("accessToken");
           })
           .catch((err) => {
               alert(err.message);
           });
   };
}


export function PostArticleAPI(payload) {
   return async (dispatch) => {
      try {
         dispatch(actions.SetLoading(true));
         let downloadUrl = null;
         if (payload.image) {
            const storageRef = ref(storage, `images/${payload.image.name}`);
            const uploadRef = uploadBytesResumable(storageRef, payload.image);
           
            await new Promise((resolve, reject) => {
               uploadRef.on(
                  "state_changed",
                  (snapshot) => {
                     const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                     console.log(`Upload is ${progress}% done`);
                  },
                  (error) => {
                     console.error("Upload failed:", error);
                     alert("Error uploading image: " + error.message);
                     reject(error); 
                  },
                  async () => {
                     downloadUrl = await getDownloadURL(uploadRef.snapshot.ref);
                     console.log("Download URL obtained:", downloadUrl);
                     resolve();  
                  }
               );
            });
         }
         const colRef = collection(db, "articles");
         const articleData = {
            actor: {
               UserEmail: payload.user.email,
               UserName: payload.user.displayName,
               date: payload.time,
               UserImage: payload.user.photoURL,
            },
            Comments: 0,
            video: payload.video || null,  
            description: payload.description,
            shareImg: downloadUrl, 
         };
         
         console.log("Data being sent to Firestore:", articleData);
         await addDoc(colRef, articleData);
         console.log("Document successfully written to Firestore!");

      } catch (error) {
         console.error("Error in posting article:", error);
      } finally {
         dispatch(actions.SetLoading(false));
      }
   };
}

export function GetArticlesAPI(){
   return(dispatch)=>{
      let payload;
      const colRef =collection(db,"articles");
      const orderedRef=query(colRef,orderBy("actor.date","desc"));
      onSnapshot(orderedRef,(snapshot)=>{
         payload = snapshot.docs.map((doc)=>doc.data());
         dispatch(actions.GetArticles(payload))
      })
   }
}