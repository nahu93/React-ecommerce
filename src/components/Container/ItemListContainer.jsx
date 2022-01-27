
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink, useParams} from 'react-router-dom'
import { getFetch } from '../helpers/getFetch';
import ItemLIst from './ItemLIst';
import getFirestore from '../../Firebase/firebase';







const Greeting  = () => {

  const [products, setProducts] = useState ([])
  const [loading,  setLoading] = useState (true)
  const {idCategoria}= useParams()
  
  useEffect ( () => {

    if (idCategoria) {
      
      const db = getFirestore ()
    const dbQuery = db.collection('Productos').where('categoria','==' ,idCategoria)
    dbQuery.get ()
    .then (data => setProducts(data.docs.map(item =>({id: item.id,...item.data()}))))
    .finally(()=>setLoading(false))

      
    } else {

      const db = getFirestore ()
      const dbQuery = db.collection('Productos')
      dbQuery.get ()
      .then (data => setProducts(data.docs.map(item =>({id: item.id,...item.data()}))))
      .finally(()=>setLoading(false))
  
      
    }
    
},[idCategoria])




 return(
   <div>
     { loading ? <h1>Cargando...</h1> :
       <ItemLIst lista={products} />
     }
   </div>
  

  

 )

  
   
}


export default Greeting 
