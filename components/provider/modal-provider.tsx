'use client'
import { useEffect, useState } from "react";
import AddUserModal from "../modals/addUserModal";
 
 
 
 
 

const ModalProvider = ()=>{

    const [isMounted,setisMounted] = useState(false)
    
    
    useEffect(()=>{
    setisMounted(true);
    },[setisMounted])
    
    if(!isMounted){
        return null
    }
    return(
 
       <>
  <AddUserModal/>  
 

</>
        )
}

export default ModalProvider;