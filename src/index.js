import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter  as Router,
} from 'react-router-dom';
import App from './App';
import './style/base';

/**
 * 兼容IE 9+
 */

import 'raf/polyfill';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}