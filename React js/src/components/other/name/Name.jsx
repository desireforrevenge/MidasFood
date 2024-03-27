import classes from './name.module.scss';

export default function Name({ text, left, top, font_size, line_height}) {
    const elementPosition = {
        left: left,
        top: top,

        fontSize: font_size,
        lineHeight: line_height
    };

    return (
        <>
            <p className={`${classes.name}`} style={elementPosition}>
                {text}
            </p>
        </>
    );
}
