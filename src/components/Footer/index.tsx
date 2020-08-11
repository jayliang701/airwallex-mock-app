import React from 'react';

import styles from './index.scss';

export type FooterProps = {
    
}

const Footer: React.StatelessComponent<FooterProps> = ({ 
    children 
}: React.PropsWithChildren<FooterProps>) => {
    
    return (
        <div className={styles.footer}>
            Footer
        </div>
    );
}

export default Footer;