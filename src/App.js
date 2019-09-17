import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './init/store';
import './App.css';
import Payment from './containers/Payment';
import ThankYou from './components/ThankYou';

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route exact path='/' component={Payment} />
                <Route exact path='/thankyou' component={ThankYou} />
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
