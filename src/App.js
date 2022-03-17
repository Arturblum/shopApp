
import './App.css';
import {BrowserRouter,Routes,Route,Link, useParams}  from 'react-router-dom'
import List, { GetDataFunction } from "./List"
import {GetCartList} from "./CartList"

const HomePage=()=>{
  return(<div>
    <h1>Home</h1>
    <div>this is blq blq</div>
  </div>)
}

const Catalog=()=>{
  return(<div>
    <h1>Our Catalog</h1>
    <div><Link to="/Item/banana" >banana</Link></div>
    
    <GetDataFunction></GetDataFunction>
  </div>)
}



const ItemPage=()=>{

  let {name} = useParams();
  let {price} = useParams();
  let {description} = useParams();
      
  return(<div>
    <h1>Item</h1>
    <div>{name}</div>
    <div>{price}</div>
    <div>{description}</div>

    
    <button 
    >Add To My Cart</button>
  </div>)
}

const Cart =() =>{

  return (
    <div>
     My Cart:
     
    </div>
  )
  
}

function App(){
  return(
<div className='App'>

<BrowserRouter>
<Link to="/Home">Home</Link> &nbsp;
<Link to="/Catalog">Catalog</Link> &nbsp;
<Link to="/Cart">My Cart</Link>

<Routes>
<Route path="/Home" element={<HomePage/>}/>
<Route path="/Catalog" element={<Catalog/>}/>
<Route path="/Item/:name/:price/:description" element={<ItemPage/>}/>
<Route path="/Cart" element={<Cart/>}/>
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;