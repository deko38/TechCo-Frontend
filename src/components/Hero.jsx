import classes from '../modules/Hero.module.scss'
import {Link} from "react-router";
const Hero =()=>{

    return(
        <div className={classes['main']}>

            <div className={classes['top']}>
                <h2>The Future Of </h2>
                <h2 className={classes['p2']}>Innovation</h2>
            </div>

            <div className={classes['text']}>
<p>Experience technology that adapts to you.
         Seamlessly integrated, beautifully designed, incredibly powerful.</p>
            </div>

            <div className={classes['button-holder']}>
                <button className={classes['button1']}>
                    <Link to={'/products'} className={classes['navLink']}> explore Product</Link>
                </button>
                <button >
                    <Link to={'/features'} className={classes['navLink-burger']}> Learn More</Link>
                </button>
            </div>
        </div>

    )

}

export default Hero