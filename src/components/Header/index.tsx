import React from 'react';

import styles from './index.scss';

export type HeaderProps = {
    
}

const Header: React.StatelessComponent<HeaderProps> = ({ 
    children 
}: React.PropsWithChildren<HeaderProps>) => {
    
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Broccoli & Co.
            </div>
        </div>
    );
}

export default Header;