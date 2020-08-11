import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './index.scss';

export type PageProps = {
    onContentRender?: Function | React.ReactNode | string;
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

//HOC
export const pageContent = (Component) => {
    const WrapperComponent:React.StatelessComponent<any> = (props:any) => {
        return (
            <Page>
                <Component />
            </Page>
        );
    };
    return WrapperComponent;
}

export default Page;
