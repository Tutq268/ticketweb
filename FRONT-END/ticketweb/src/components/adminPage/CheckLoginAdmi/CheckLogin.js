import { useState, useEffect } from 'react';
import axios from 'axios'
const useResource = (resource) => {
    const [resources,setResouce] = useState()
    useEffect( () => {
        const fetchData = async () => {
          const result = await axios.get("/admin")
          setResouce(result.data)
        }
        fetchData()
         
       },[])
    return resources
}

export default useResource
