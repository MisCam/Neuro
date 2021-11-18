import React from 'react';

import PageLayout from '../PageLayout';

import styles from './Intro.module.css';

const Intro = (): React.ReactElement => (
    <div className={styles.container}>
        <PageLayout>
            <div>Навигация</div>
            <div>Welcome text</div>
        </PageLayout>
    </div>
)

export default Intro;
