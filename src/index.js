import React from 'react';
import ReactDom from 'react-dom';

import Button from './components/Button';

import icon from '@static/imgs/coffee.svg';

const renderApp = () => {
    ReactDom.render(
        <div>
            <div>Mock App</div>
            <div><textarea></textarea></div>
            <div><img style={{ width: 48, height: 48 }} src={icon} /></div>
            <div><Button>Commit</Button></div>
        </div>,
        document.getElementById('root')
    );
}

renderApp();
