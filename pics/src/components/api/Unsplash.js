import React from 'react'
import axios from 'axios'

//creates customized requests 
export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 00e90b30da9b361ddebbc2975f4e49069cc75b9947e2ad5447a90e35beed989f'
    }
    //promise obj gives notification when network req is completed
   
})