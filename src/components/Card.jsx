import classes from '../modules/Card.module.scss';

const Card = ({ product }) => {
    return (
        <div className={classes.card}>
            <img src={product.image} alt={product.title} />

            <div className={classes.content}>
                <p>{product.category}</p>
                <p>{product.title}</p>
                <p>{product.desc}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
};

export default Card;