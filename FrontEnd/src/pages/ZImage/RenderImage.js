import React, { useState } from 'react'
import axios from 'axios'
import Buffer from 'buffer-from'
import image from './UserImage/user.jpg'

export default function RenderImage() {

    function getData() {
        axios.get("http://localhost:8080/sharesteer/getImage")
            .then(function (response) {
            });
    }
    return (
        <div>
            <input type='file' name='image' onBlur={(e)=>{console.log(e);}} />
            <div className="pt-1 mb-4">
                <button className="btn btn-dark btn-lg btn-block" type="button" onClick={getData}>Get Image</button>
            </div>
            <div>
                <img src={image} />
            </div>
        </div>
    )
}
