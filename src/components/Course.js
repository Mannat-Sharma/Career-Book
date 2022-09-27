import React from "react";

export default function Course(props){

    return(
        <div className="course">
            <h1>{props.name}</h1>
            <a href={props.link} className="view-btn">View Course</a>
        </div>
    )
}