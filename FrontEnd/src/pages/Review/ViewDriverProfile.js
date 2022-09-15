import React from 'react'
import User from './images/user.jpg'
//testing is pending
export default function ViewDriverProfile(props)
{
    const driver = props.user;
    const rating = props.rating;
    let rating_sum=0;
    
    
    
    for(let i=0;i<rating.length();i++)
    {
        rating_sum=rating_sum+rating[i].rating;
    }
    console.log(rating_sum)
    let avg_rating=rating_sum/(rating.length+1);

    return (
        <center>
    <div id='ride'>
      <div className="card">
        <div className="card-body">
      {/* Image part is pending <img src={User} style={{'borderRadius':'50%','height':'400px','width':'350px'}} /> */}  
          <h1 className="card-title">{driver.first_name} {driver.last_name}</h1>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Gender </b>:{driver.gender}</li>
          <li className="list-group-item"><b>Email </b>: {driver.email_id}</li>
          <li className="list-group-item"><b>Contact No </b>: {driver.contact}</li>
          <li className="list-group-item"><b>Rating &#11088; </b>: {avg_rating}</li>
          <li className="list-group-item"><b>Rewies of Driver </b>: {rating.comment}</li>
        </ul>
      </div>

    </div>
    </center>

    );
}