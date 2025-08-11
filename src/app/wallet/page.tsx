"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

const page = () => {

    useEffect(()=>{
        const saveUser = async()=>{
            try {
                const saveUser = await axios.post("/api/wallet");
            } catch (error) {
                return (
                    <div>
                        something went wrong
                    </div>
                );
            }
        }

        saveUser();
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default page
