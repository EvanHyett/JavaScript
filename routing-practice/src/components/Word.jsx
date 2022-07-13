import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Word = (props) => { 
  const { word } = useParams(); // matches our :city in our Routes
    
    return (
        <h1> { word }</h1>
    );
}

export default Word;