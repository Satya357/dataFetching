import {  useState , useEffect} from "react";
import './worst.css'


function Worst() {
    const [state, setState ] = useState([])
   useEffect( () => {
        fetch("https://lms-erp-api.herokuapp.com/api/contactInfo")
        .then((data) => data.json())
        .then((response) => {
            console.log(response) 
            setState(response)}) 
    } , [] )
        
    return (
        <div> 
            <h4> Trying to get data in a table but not working it shows data accessed in console but not rendering in component dont know why it should be render in we are using state  </h4>
            <table>
                <tbody>
                    <tr> 
                        <td> Name : </td>
                        <td> Email : </td>
                        <td> Message : </td>
                    </tr>
                    { state.map( (item , index)  =>
                   <tr key={index}> 
                       <td> {item.name} </td>
                       <td> {item.email} </td>
                       <td> {item.message}</td>
                   </tr> )}
                </tbody>
            </table>
     </div>
             
        
    )
}
export default Worst;