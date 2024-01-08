import React from 'react';
import './menu__item.scss';

import galka from './../../../images/galka.svg';

const MenuItem = (props: { currentActive: string | null; value: number; handler: (value: number) => void }) => {
    const { value, handler, currentActive } = props;

    let currentActiveNumber = currentActive?.split('').pop();
    if (currentActiveNumber === undefined) currentActiveNumber = '0';

    return (
        <li className={`menu__item ${+currentActiveNumber == value ? 'active' : ''}`} onClick={() => handler(value)}>
            <div className="radio-button">
                <img src={galka} />
            </div>
            <p>{`Варіант ${value}`}</p>
        </li>
    );
};

export default MenuItem;
