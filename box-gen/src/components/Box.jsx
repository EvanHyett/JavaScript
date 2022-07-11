import React, {useState} from 'react'

const Box = () => {
    let [color, setColor] = useState("");

    let [boxes, setBoxes] = useState([]);

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Form has been submitted!", color)

        let colorObj = {color};
        console.log(colorObj)

        setBoxes([...boxes, colorObj])
    }

    return(
        <>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <label>Color:</label>
                    <input onChange={(e)=>setColor(e.target.value)} type="text" />
                    <div>
                        <input type="submit" value="Add Color" className="btn btn-success mt-3" />
                    </div>
                </form>
            </div>
            <hr />
            <div className="displayBoxes">
                {
                    boxes.map((boxes, index)=> {
                        return(
                            <div className="box" style={{backgroundColor: boxes.color}} height="200px" width="200px">
                                <p>{boxes.color}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Box;