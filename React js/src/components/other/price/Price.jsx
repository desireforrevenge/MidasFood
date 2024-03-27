import classes from './price.module.scss';

export default function Price({ text, left, top }) {
    const elementPosition = {
        left: left,
        top: top
    };

    return (
        <>
            <p className={`${classes.price}`} style={elementPosition}>
                {text} ₽
            </p>
        </>
    );
}
