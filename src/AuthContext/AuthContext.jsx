import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../fireBaseConfig/firerbase.config";

const auth = getAuth(app);

export const UserContext = createContext(null)

const AuthContext = ({children}) => {
        const [user,setUser] = useState(null)
        const [loading,setLoading] = useState(true)

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)
            if(currentUser){
                fetch('https://sportysummercamp.vercel.app/jwt',{
                    method: "POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({email:currentUser.email})
                })
                .then(res => res.json())
                .then(data => {
                    
                        localStorage.setItem("user-token",data.token)
                    
                })
            }else{
                localStorage.removeItem("user-token")
            }



            setLoading(false)

        })
        

        
        return () => {
            return unsubscribe()
        }
        
    },[loading])


    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (name,photo)=>{
        setLoading(true)
       return  updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }

    const signInUser = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const provider = new GoogleAuthProvider();
    const googleSign = () =>{
        return signInWithPopup(auth,provider)
    }

    const logOut =() =>{
        signOut(auth)
    }
    const userInfo = {
        user,
        loading,
        logOut,
        setLoading,
        createUser,
        updateUser,
        signInUser,
        googleSign

    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;