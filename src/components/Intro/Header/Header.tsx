import React from 'react';

import Logo from '../../../assets/Logo.png';
import cn from 'clsx';

import styles from './Header.module.css';

const Header = (): React.ReactElement => (
    <header>
        <ul className={cn(styles.leftMenu, styles.list)}>
            <a>Shop</a>
            <a>About</a>
        </ul>
        <div className={styles.logo}>
            <img src={Logo}/>
        </div>
        <ul className={cn(styles.rightMenu, styles.list)}>
            <a>Subscription</a>
            <a>Sign In</a>
        </ul>
    </header>
)

export default Header;
