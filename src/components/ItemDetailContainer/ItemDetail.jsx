import react, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {Card,Button,Col, ThemeProvider} from 'react-bootstrap'
import { productos } from '../helpers/getFetch'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'



export const ItemDetail = ({prod}) =>{

    const [count,setCount]= useState (1)

    const {cartList,agregarProducto} = useContext (CartContext)

    function onAdd (cant) {
        
        setCount(cant)
        agregarProducto ({...prod,cantidad: cant})
      }
     


    return (
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.foto} />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            {prod.precio}$
  
          </Card.Text> 
        

          <Card.Text>
             <ItemCount initial ={1} stock={10} onAdd={onAdd}/>
    
            </Card.Text> 
         

      
         
        </Card.Body>
      </Card>
      

      </Col>
     
  )
    
}