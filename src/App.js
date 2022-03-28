import './App.css'
import {useSelector , useDispatch } from 'react-redux'
import {increNum , decreNum} from './Actions/Action.js'
import Worst from './worst'

const App = ()  => {

  const myState = useSelector( (state) => state.changeTheNumber)
  const dispatch = useDispatch();

return (
<div>  
  <h1> Here we are using Redux state management method to store data in seperate store </h1>
    
  <div id="whole"> 
    <button id="color" onClick={ () => dispatch(decreNum(5))}> <strong> - </strong> </button> 
    <input  type="text" id="size" value={myState} />
    <button id="color" onClick={ () => dispatch(increNum(5))}> <strong> + </strong></button>
    </div>
    <Worst/>
    </div>


)
}
export default App;



