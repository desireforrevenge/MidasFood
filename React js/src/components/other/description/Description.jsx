import classes from './description.module.scss';

export default function Description({ text, left, top, font_size, line_height}) {
    const elementPosition = {
        left: left,
        top: top,

        fontSize: font_size,
        lineHeight: line_height
    };

    return (
        <>
            <p className={`${classes.description}`} style={elementPosition}>
                {text}
            </p>
        </>
    );
}
