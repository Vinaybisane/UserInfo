import React, { useEffect } from "react";
import { useState } from "react";
const User:React.FC<any>=(props)=>{

    const [name, setName]=useState<string>('php');
    const [age,setAge]=useState<number>(20);

    const[isError, setIsError]=useState<any>({status: false, msg:""})

    const checkErr=(msg:'default massage')=>{
        alert(msg);
    }
    useEffect(()=>{
        console.log('name', name)
        if(!isError.status && name=='php'){
            checkErr(isError.msg);
        }else if(isError.status){
            checkErr(isError.msg)
        }
    },[isError]);
    const login=()=>{

        if(name ==='php'){
            setIsError({status:true, msg:"name can not be php"})
            return
        }

        console.log(name, age)
        
    }
    return(

       <div>
         <h1>user</h1>
        {props.children}
        <br></br>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
      <br></br>
      <input type='number' value={age} onChange={e=> setAge(parseInt(e.target.value))} />
      <br></br>
      <button onClick={login}>login</button>
       </div>
    )
}
export default User;