import classes from '../modules/Card.module.scss'
import iphone from '../assets/iphone.jpg'
const Card = () =>{
    return(
        // <div className={classes['main']}>
        //     <img src={iphone} alt="iphone"
        //     <p>Smartphone</p>
        //     <p>Iphone 13</p>
        //     <p>Revolutionary performance in your pocket</p>
        // </div>
        <div className={classes['main']}>
            <img src={iphone} alt="iphone" className={classes['image']}/>
            <p className={classes['p1']}>Smartphone</p>
             <p className={classes['p2']}>Iphone 13</p>
             <p className={classes['p1']}>Revolutionary performance in your pocket</p>
            <p className={classes['p2']}>999$</p>
        </div>
    )
}

export default Card