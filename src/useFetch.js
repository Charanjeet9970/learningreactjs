import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setisPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() =>{
        setTimeout(() =>{
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('fetch request chould not be made')
                }
                return res.json()
            })
            .then(data =>{
                setData(data);
                setisPending(false);
                setError(null)
            })
            .catch(err =>{
                setError(err.message)
                setisPending(false)
                setData(null)
            })
        },500)   
    },[url])
    return {data,isPending,error}
}
 
export default useFetch;