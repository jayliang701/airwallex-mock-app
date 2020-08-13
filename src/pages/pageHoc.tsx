import React, { lazy, useEffect, useState } from 'react';

const loadPage = ():Promise<LoadableComponent> => {
    return new Promise(resolve => {
        import('./Page').then(mod => {
            resolve(mod as LoadableComponent);
        });
    });
};

export type LoadableComponent = {
    default:any;
}

export type WrapperComponentState = {
    page:LoadableComponent | null;
}

//HOC
export const pageContent = (Component) => {
    class WrapperComponent extends React.Component<any, WrapperComponentState> {

        constructor(props) {
            super(props);
            this.state = { page: null };
        }

        componentDidMount() {
            loadPage().then((mod:LoadableComponent) => {
                this.setState({
                    page: mod,
                });
            });
        }

        render() {
            const { page } = this.state;
            if (!page) return null;

            const PageComponent:React.StatelessComponent<any> = page.default as React.StatelessComponent<any>; 
            return React.createElement(PageComponent, { ...this.props }, <Component />);
        }

    };
    return WrapperComponent;
}