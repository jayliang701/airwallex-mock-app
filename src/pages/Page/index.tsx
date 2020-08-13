import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './index.scss';

export type PageProps = {
    onContentRender?: Function | React.ReactNode | string | null;
}

const Page: React.StatelessComponent<PageProps> = ({ 
    children,
    onContentRender, 
}: React.PropsWithChildren<PageProps>) => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.content}>
            { 
                onContentRender ? (
                    typeof onContentRender === 'function' ? onContentRender() : onContentRender
                ) : children 
            }
            </div>
            <Footer />
        </div>
    );
}

export default Page;
