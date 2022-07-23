import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    const [urlData, seturlData] = useState([])
    const [viewdata, setviewdata] = useState([])
    useEffect(() => {
        const data=async()=>{
            const  {data} = await axios ("https://swapi.dev/api/people")
            console.log(data);
            seturlData(data.results)
        }
        data()
    }, [])
    const viewdeails=(id)=>{
        const view=  urlData.filter((item,index)=>index==id)
        setviewdata(view)
        console.warn(view);
    }
    
     
  return (
   <>
   <div className="row w-100 mt-3">
    
   
    
    <table class="table table-striped table-hover w-100">
  <thead className='table-primary'>
    <tr>
      <th scope="col" ></th>
      <th scope="col" >Sr No</th>
      <th scope="col">Name</th>
      <th scope="col">Hair Color</th>
      <th scope="col">Mass</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
        {
           urlData.map((item,index)=>{
            return(
                <tbody>
                    <tr>
                    <td></td>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.hair_color}</td>
                    <td>{item.mass}</td>
                    <td><button className='btn btn-danger d-flex justify-content-center' 
                    data-bs-target="#update"
                    data-bs-toggle="modal" 
                    onClick={(e)=>{viewdeails(index)}}>view details  </button></td>
                    </tr>
                    <tr></tr>
                    </tbody>
                           
            )
           }) 
        }
    </table>
    </div>
    
    <div class="modal"id="update">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">View Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {viewdata.map((item)=>{
            return(
                <div className="card text-center bg-warning">
                   
                    <div className="card-body ">
                    <div><span className='fs-1'>Name:</span><span className='fs-3'>{item.name}</span></div>
                   <div> <span className='fs-1'>Skin color:</span><span className='fs-3'>{item.skin_color}</span></div>
                    <div><span className='fs-1'>EyeColor:</span><span className='fs-3'>{item.eye_color}</span></div>
                    <div><span className='fs-1'>Gender:</span><span className='fs-3'>{item.gender}</span></div>
                    <div><span className='fs-1'>Height:</span><span className='fs-3'>{item.height}</span></div>
                    <div><span className='fs-1'>hair color:</span><span className='fs-3'>{item.hair_color}</span></div>
                    </div>
                </div>
            )
        })}
      </div>
      
    </div>
  </div>
</div>
   </>

  )
}
