import { useEffect } from 'react';
import { useState } from 'react';


import {Link, useParams}  from 'react-router-dom'


 export const GetCartList =(props)=>
{

    let [choosedItems,setChoosedItems] = useState("[]");


    let AddItemToCart = (a) => {
        let newArr=choosedItems;
        newArr.push(a);
        setChoosedItems({choosedItems:newArr});

        let MyCart =newArr.map((i)=>{
          return(<div>i<br/></div> )
        })


 return (

     <div>{MyCart}</div>
 )
      };

      

}