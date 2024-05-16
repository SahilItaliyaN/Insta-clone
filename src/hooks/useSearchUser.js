import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [user,setUser] = useState(null)
    const showToast = useShowToast()

    const getUserProfile = async(username) =>{
        setIsLoading(true)
        setUser(null)
        try {
            const q = query(collection(firestore,"users"),where("username","==",username))

            const querySnapShot = await getDocs(q)
            if(querySnapShot.empty) return showToast("Error","User Not Found","error");

            querySnapShot.forEach((doc)=>{
                setUser(doc.data())
            })
        } catch (error) {
            showToast("Error",error.message,"error");
            setUser(null)
        }finally{
            setIsLoading(false)
        }
    }

    return {isLoading,getUserProfile,user,setUser}

};

export default useSearchUser;