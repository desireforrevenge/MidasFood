import classes from './weight.module.scss';

export default function Weight({ text, left, top }) {
    const elementPosition = {
        left: left,
        top: top
    };

    return (
        <>
            <div className={classes.weight_frame} style={elementPosition}>
                <p className={classes.weight}>
                    {text} г
                </p>
            </div>
        </>
    );
}
