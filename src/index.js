import React from 'react';
import ReactDom from 'react-dom';

import '@styles/normalize.css';
import '@styles/main.scss';

import Test from './pages/Test';

const renderApp = () => {
    ReactDom.render(
        <div>
            <Test />
        </div>,
        document.getElementById('root')
    );
}

renderApp();
