import React from 'react';
import ReactDom from 'react-dom';

import '@styles/normalize.css';
import '@styles/main.scss';

import Home from './pages/Home';

const renderApp = () => {
    ReactDom.render(
        <div>
            <Home />
        </div>,
        document.getElementById('root')
    );
}

renderApp();
