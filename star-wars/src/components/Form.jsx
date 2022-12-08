import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ()=> {
    let [category, setCategory] = useState("people");
    let [id, setId] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return(
        <form onSubmit={submitHandler} >
            <div className="pt-8 text-2xl">
                <label>Search For:</label>
                <select className="required:border-red-500 text-center" onChange={(e)=>setCategory(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                </select>
            </div>
            <div className="text-2xl">
                <label>ID:</label>
                <input className='text-center border-red-500 w-20' onChange={(e)=>setId(e.target.value)} type="number" />
            </div>
            <div className='pt-2 pb-2'>
                <button className="bg-sky-500 p-2 hover:bg-sky-700 text-white rounded-lg text-2xl" type="submit" value="search" >Search</button>
            </div>
        </form>
    )
}

export default Form;