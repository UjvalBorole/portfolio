import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()
    // const [data,setdata] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/UjvalBorole')
    //     .then(resp => resp.json())
    //     .then(data=>{
    //     console.log(data)
    //     setdata(data);
    //     })
        
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub: {data.followers}
    <img src={data.avatar_url} alt="" srcset="" width={300} />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/UjvalBorole')
    return res.json();

}