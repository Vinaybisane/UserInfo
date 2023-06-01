import React, {useEffect, useState}from 'react';

import './App.css';

function App() {

  const [title, setTitle]=useState('');
  const userNameAPI=()=>{
    return new Promise<any>((resolve, reject) => {
      
      return setTimeout(()=>{
        resolve({name:'vinay'});
      },1000)
    })
  };

  const getUserName=async()=>{
    console.log('test before')
    const userdata= await userNameAPI().catch((err)=>{ console.log('err',err)});
    console.log('userdata', userdata)
    const { name}=userdata
    setTitle(name)
    console.log('test after')
  }

  const [age, setAge]=useState<number>(0);
  const userAgeAPI=()=>{
    return new Promise<any>((resolve, reject) => {
      
      return setTimeout(()=>{
        resolve({age:22});
      },1000)
    })
  };

  const getUserAge=async()=>{
    
    const userdata= await userAgeAPI().catch((err)=>{ console.log('err',err)});
    console.log('userdata', userdata)
    const { age}=userdata
    setAge(age)
    
  }

  const [cmp, setCmp]=useState('');
  const userCmpAPI=()=>{
    return new Promise<any>((resolve, reject) => {
      
      return setTimeout(()=>{
        resolve({cmp:'vigo'});
      },1000)
    })
  };

  const getUserCmp=async()=>{
    
    const userdata= await userCmpAPI().catch((err)=>{ console.log('err',err)});
    console.log('userdata', userdata)
    const { cmp}=userdata
    setCmp(cmp)
  }

  const [city, setCity]=useState('');
  const userCityAPI=()=>{
    return new Promise<any>((resolve, reject) => {
      
      return setTimeout(()=>{
        resolve({city:'Mumbai'});
      },1000)
    })
  };

  const getUserCity=async()=>{
    
    const userdata= await userCityAPI().catch((err)=>{ console.log('err',err)});
    console.log('userdata', userdata)
    const { city}=userdata
    setCity(city)
  }

  // const [title, setTitle]=useState('no change')
  useEffect(()=>{
    getUserName();
    getUserAge();
    getUserCmp();
    getUserCity();
  },[])

  return (
   <div>
    use effect {title}<br></br>
   
    { age}<br></br>
    { cmp}<br></br>
    { city}<br></br>
    </div>
  );
}

export default App;
