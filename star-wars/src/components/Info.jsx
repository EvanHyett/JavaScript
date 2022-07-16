import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import People from "./People";
import Planets from "./Planets";
import Films from "./Films";
import Species from "./Species";
import Vehicles from "./Vehicles";
import Starships from "./Starships";
import { useNavigate } from 'react-router-dom';

const Info = ()=> {
    let [details, setDetails] = useState({});
    const {id, category} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response=>{
                console.log(response)
                setDetails(response.data)
        })
            .catch(err=>{
                console.log(err)
                navigate("/obiwan")
        })
    }, [id, category])

    return(
        <div>
            {
                category == "people"?
                <>
                    <People details={details}></People>
                </> : category == "planets"?
                <>
                    <Planets details={details}></Planets>
                </> : category == "films"?
                <>
                    <Films details={details}></Films>
                </> : category == "species"?
                <>
                    <Species details={details}></Species>
                </> : category == "vehicles"?
                <>
                    <Vehicles details={details}></Vehicles>
                </> : category == "starships"?
                <>
                    <Starships details={details}></Starships>
                </> : null
            }
        </div>
    )
}

export default Info;