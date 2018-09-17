import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserHistory } from 'history';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();
// const initialState = {};
// const store = createStore(
//     connectRouter(history)(),
//     initialState,
//     compose(applyMiddleware(routerMiddleware(history)))
// )

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <App history={history} />
        </AppContainer>,
        document.getElementById('app')
    )
}

render();