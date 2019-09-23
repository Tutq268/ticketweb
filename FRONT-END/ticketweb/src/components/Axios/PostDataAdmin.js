import axios from 'axios'

export const loginAdmin = async (data) => {
 try {
   let result =  await axios.post("/admin/login",data)
   return result
 } catch (error) {
     return error
 }
}

