 import classes from '../modules/OurProducts.module.scss'
 import { productsList } from "../components/products-list.jsx";
 import Card from "../components/Card";

const OurProducts = () =>{
    return(
        < div  className={classes['main']}>

        <div className={classes['title']} >
<p>Our Products</p>
            <p className={classes['p2']}>Discover innovation in every detail</p>
        </div>
<div className={classes['card']}>
            {productsList.map((item) => (
                <Card key={item.id} product={item}/>
            ))}
</div>
        </div>
    )
 }

 export default OurProducts