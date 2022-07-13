import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Color = (props) => { 
    const { word, color, background } = useParams(); // matches our :city in our Routes
    const style1 = {color: color};
    const style2 = {backgroundColor: background};
    
        return (
            <h1 style={{...style1, ...style2}}> { word }</h1>
        );
}

export default Color;