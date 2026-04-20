import classes from '../modules/Ending.module.scss'
import {Link} from "react-router";
const Ending = () => {
    return (
        <div className={classes['main']}>

            <div className={classes['title']}>
                <p>Ready to experience the future?</p>
                <p className={classes['p2']}>Join thousands of satisfied customers worldwide</p>
                <button className={classes['button1']}>
                    <Link to={'/products'} className={classes['navLink']}> get started today!</Link>
                </button>
            </div>


        </div>
    );
};

export default Ending;