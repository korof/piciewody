import * as React from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import App from './src/app/home/containers/home-view';
import { store } from './src/app/store';

class Piciewody extends React.Component {
    componentDidMount() {
        firebase.auth().signInAnonymously();
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Piciewody);
