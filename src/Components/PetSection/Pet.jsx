import React, { useEffect, useState } from 'react'

function Pet() {
    const [dogs, setDogs] = useState([])

    useEffect(()=>{
        const fetchDogData = async()=>{
            try {
               const res = await 
            } catch (error) {
                console.error(error)
            }
        }
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Pet
