import * as React from 'react';
import { AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { name as appName } from './app.json';
import App from './src/app/home/containers/home-view';
import { store } from './src/app/store';

const rehydrateStore = () => {
    persistStore(store, null, () => {
        store.getState();
    });
};

class Piciewody extends React.Component {

    componentDidMount() {
        rehydrateStore();
        firebase.auth().signInAnonymously();
        firebase.messaging().getToken().then(res => {
            AsyncStorage.setItem('token', res);
        })
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
