import classes from "../modules/Whyus.module.scss";
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'


const Whyus = ({ product }) => {
    return (
        <div className={classes['main']}>

            <div className={classes['title']}>
                <p>Why Us</p>
                <p className={classes['p2']}>Excellence in every aspect</p>
            </div>


            <div className={classes['icons']}>
                <div className={classes['items']}>
                    <img src={icon1} alt={''}/>
                    <h4>Premium Design</h4>
                    <p>Crafted with precision and attention to every detail</p>
                </div>

                <div className={classes['items']}>
                    <img src={icon2} alt={''}/>
                    <h4>Lightning Fast</h4>
                    <p>Experience unparalleled performance and speed</p>
                </div>

                <div className={classes['items']}>
                    <img src={icon3} alt={''}/>
                    <h4>Secure & Private</h4>
                    <p>Your data is protected with advanced security</p>
                </div>
            </div>
        </div>
    );
};

export default Whyus;