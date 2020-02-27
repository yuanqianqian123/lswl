import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './router/index'
import { HashRouter } from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
// 引入redux
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
    (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    )
    , document.getElementById('root'));
    
serviceWorker.unregister();
