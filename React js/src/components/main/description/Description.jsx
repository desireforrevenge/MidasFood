import React, { useState, useEffect } from 'react';

import classes from './description.module.scss';

export default function Description() {
    return (
        <>
            <p className={`${classes.description_text}`}>Доставка готовой еды из фермерских продуктов!</p>
        </>
    );
}