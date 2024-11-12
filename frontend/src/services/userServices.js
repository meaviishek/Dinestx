import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user'


export const googleLogin=async(data)=>{
    try {
        const response = await axios.post(`${API_URL}/googleauth`,{tokenId:data})
    return response.data
    }catch(error){
throw error.response.data
    }
}