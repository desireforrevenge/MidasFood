import React, { useState, useEffect } from 'react';

import classes from './heading.module.scss';

export default function Heading() {

    return (
        <>
            <p className={`${classes.heading_text}`}>Популярные блюда</p>
        </>
    );
}
