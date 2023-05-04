import css from './app.module.css';
//import Header from './header.js'
import React, {useState} from 'react';
import {products} from '../data/products'

// interface ProductProps {
//   product: IProduct
// }

export function Product(props) {
  const [details, setDetails] = useState(false)
    
  const btnClassName = details ? css.pbtnhide : css.pbtnshow
  //const btnClasses = [css.pbtn, btnClassName]//if btn is a common class but it does't work

    return ( 
    <div className={css.item}>
    <img src={props.product.image} className={css.img} alt={props.product.title}/>
    <p>{props.product.title}</p>
    <p className={css.fontbold}>${props.product.price}</p>
    <button className={btnClassName}
        onClick={()=> setDetails(prev =>!prev)} 

    >{ details ? 'Hide Details' : 'Show Details' }</button>
    {details && <div>
      <p>{props.product.description}</p>
    </div>}
    </div>
      
    );
  }
  
  export default Product