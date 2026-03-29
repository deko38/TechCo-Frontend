import classes from "../modules/Navbar.module.scss"
import { Link } from "react-router";
import {useState} from "react";

const Navbar = ()=> {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    };

    return (
        <div className={classes['navbar']}>

        {!isOpenBurgerMenu ? (
        <div className={classes['main']}>

            <div className={classes['logo']}>
                <Link to={'/'} className={classes['logo-link']}>TechCo</Link>
            </div>
            <div className={classes['nav-items']}>
                <Link to={'/products'} className={classes['navLink']}>Products</Link>
                <Link to={'/features'} className={classes['navLink']}>Features</Link>
                <Link to={'/dashboard'} className={classes['navLink']}>Dashboard</Link>
                <Link to={'/cart'} className={classes['navLink']}>Cart</Link>
            </div>
            <Link to={'/'} className={classes['burger']} onClick={toggleBurgerMenu}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </Link>

        </div>
        ) : (
            <div className={classes['main-burger']}>
                <div>
                    <div className={classes['logo']}>
                        <Link to={'/'} className={classes['logo-link']}>TechCo</Link>
                    </div>

                    <div className={classes['main-burger-navbar']}>
                        <Link to={'/products'} className={classes['navLink-burger']}>Products</Link>
                        <Link to={'/features'} className={classes['navLink-burger']}>Features</Link>
                        <Link to={'/dashboard'} className={classes['navLink-burger']}>Dashboard</Link>
                        <Link to={'/cart'} className={classes['navLink-burger']}>Cart</Link>
                    </div>
                </div>

                <Link to={'/'} className={classes['burger-close']} onClick={toggleBurgerMenu}>
                    <div className={classes['line-1']}></div>
                    <div className={classes['line-2']}></div>
                </Link>

            </div>
        )}
        </div>
    )
}

export default Navbar
