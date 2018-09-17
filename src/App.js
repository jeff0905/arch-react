import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRrouter } from 'connected-react-router';
import routes from './routes';

const App = ({ history }) => {
    console.log('history', history);
    return (
        <ConnectedRrouter history={history}>
            { routes }
        </ConnectedRrouter>
    )
}

export default App;
