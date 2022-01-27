import React, { useState } from "react";
import {Card,Button,Col, ThemeProvider} from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'



const ItemCount = ({initial, stock, onAdd}) => {

const [count,setCount] = useState (1)

function Sumar (){
    if (count<stock) {
        setCount(count + 1)
    }
}

function Restar () {
    setCount(count-1)
}

function Agregar (){
    onAdd (count)
    setCount (1)
}

return (

<>
    <Button variant="primary" onClick={Sumar} >+</Button>

    {count}

    
    <Button variant="primary" onClick={Restar}>-</Button>
    
    <Button variant="primary" onClick={Agregar}>Agregar al carrito</Button>

  </>
)



}

export default ItemCount
