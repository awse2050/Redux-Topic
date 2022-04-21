
import React from 'react'
import ReactDOM from 'react-dom';
import App from './component/App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    // Provider는 Store가 필요하다.
    <Provider store={store} >
        <App />
    </Provider>,
 document.getElementById("root")
 );