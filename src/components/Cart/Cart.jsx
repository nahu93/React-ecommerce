import React, {useEffect , useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {Container,Row,Col,ListGroup,Image,Button,Badge,Alert, Form} from 'react-bootstrap'
import { productos } from "../helpers/getFetch";
import { prettyDOM } from "@testing-library/dom";
import getFirestore from "../../Firebase/firebase";
import { useState } from "react";



const Cart = ( ) => {
    const [datos, setDatos]=useState({nombre:'',apellido:'',email:'',telefono:''})
    const [idOrden,setIdOrden] = useState ('')
    const [error,setError] = useState(false)

    const{cartList,vaciarCarrito}= useContext(CartContext)

    const handleChange = (event) => {

      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
    }

    let Total = 0;


    const generarOrden =(e)=>{

      if(datos.email == "")
      {setError(true)
         return};
      

      if(cartList == "")
      {setError(true) 
        
        return 
      

      }
     

      const orden = {}

    
      orden.buyer= {datos}
      
      orden.items= cartList.map (cartItem =>{
        const id = cartItem.id
        const nombre = cartItem.nombre
        const cantidad = cartItem.cantidad
        const precio = cartItem.precio*cartItem.cantidad 
        

        return {id,nombre,cantidad,precio}
      })

      
    
    const db = getFirestore()
    db.collection('orden').add(orden)
    .then (resp=>setIdOrden(resp.id))



    }

   


    return (
      

     

        <div className='align-item-center' >


        { cartList.map( prod => /*<li key={prod.id}> {prod.nombre} {prod.cantidad}</li>*/
        
        <ListGroup horizontal key={prod.id}>
  <ListGroup.Item>
   <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={prod.foto} style={{width:'20rem'}} thumbnail />
    </Col>
    </Row>
</Container>
  </ListGroup.Item>
  <ListGroup.Item style={{width:'15rem'}}>{prod.nombre}</ListGroup.Item>
  <ListGroup.Item>{prod.precio}$</ListGroup.Item>
  <ListGroup.Item>{prod.cantidad}</ListGroup.Item>
 

</ListGroup>

      
 
        ) }
     <div>  
          { 
            cartList.map(
                prod=>{
                  
                        Total = Total + (prod.precio*prod.cantidad)
                        
                 
   
                }
                
            )
            
        }
         <h2>
    Total=<Badge bg="secondary">${Total}</Badge>
        </h2>
    </div>
        <section>

          
          {idOrden !==''&& <Alert variant="success">{datos.nombre} {""}{datos.apellido} el id de su orden es : {idOrden}</Alert>}
          

         </section>
       <hr />
       
       <section>

          
{cartList =='' && <Alert variant="danger">El carrito esta vacio</Alert>}


</section>
       
       <Form style={{ width: '18rem' }} >

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="Ingrese Nombre" name="nombre" onChange={handleChange}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Apellido</Form.Label>
    <Form.Control type="text" placeholder="Ingrese Apellido" name="apellido" onChange={handleChange} />
   
  </Form.Group>

<section>
  {datos.email ==''&& <Alert variant="danger">Ingrese su email para finalizar la compra</Alert>}
</section>

 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email" name="email" onChange={handleChange}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Telefono</Form.Label>
    <Form.Control type="text" placeholder="Telefono" name="telefono" onChange={handleChange} />
  </Form.Group>
 
  
   </Form>
    
        <Button variant="primary" onClick={()=>vaciarCarrito()}>Borrar</Button>
        <Button variant="primary" onClick={()=>generarOrden()}>Comprar</Button>

        
         
        

        </div>
    )



}

export default Cart