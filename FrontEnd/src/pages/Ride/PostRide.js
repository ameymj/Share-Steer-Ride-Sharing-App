import axios from 'axios'
import React, { useState } from 'react'

export default function PostRide() {

    const [date_of_journey,setDate_of_journey]=useState("");
    const [time_of_journey,setTime_of_journey]=useState("");
    const [from_city,setFrom_city]=useState("");
    const [to_city,setTo_city]=useState("");
    const [total_seat,setTotal_seats]=useState("");
    const [available_seat,setAvailable_seat]=useState("");
    const [ride_cost,setRide_cost]=useState("");
    const [description,setDescription]=useState("");

    const [vehicle_model,setVehicle_model]=useState("");
    const [vehicle_reg_number,setVehicle_reg_number]=useState("");
    const [capacity,setCapacity]=useState("");


    
    function addRide(event)
    {
        const ride={};
        const vehicle={};

        axios.post("http://localhost:8080/sharesteer/addVehicle",ride)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })

    axios.post("http://localhost:8080/sharesteer/AddRide",vehicle)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    })
    }

  return (
    <div>

    </div>
  )
}
