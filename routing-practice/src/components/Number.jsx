import { useParams } from "react-router"; //Top of App.js
//Rest of imports here...
    
const Number = (props) => { 
  const { number } = useParams(); // matches our :city in our Routes
    
    return (
        <h1> { number }</h1>
    );
}

export default Number;