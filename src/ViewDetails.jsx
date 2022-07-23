import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ViewDetails() {
    const [urlData, seturlData] = useState([])

    const data=async({match})=>{
        const  {data} = await axios ("https://swapi.dev/api/people")
        console.log(data.results);
        seturlData(data.results)
        const view=  urlData.filter((item,index)=>index==match.params.id)
        console.warn(view)
    }
    useEffect(() => {
        data()
    }, [urlData])
  return (
    <div>ViewDetails</div>
  )
}
