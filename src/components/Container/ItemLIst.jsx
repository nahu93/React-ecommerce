import React from "react";
import { CardGroup,Row } from "react-bootstrap";
import Item from "./Item";






export default function ItemLIst (props){


    return (
        <Row xs={1} md={3} className="g-4">

            {
                props.lista.map((item, index)=>{
                    return(
                        
                       <Item key={index} item={item}/>

                   )
                     
                })
            }
    </Row>
    )
}