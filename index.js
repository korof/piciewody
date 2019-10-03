import * as React from 'react';
import { AppRegistry } from 'react-native';
import firebase from 'react-native-firebase';

import { name as appName } from './app.json';
import App from './src/app/App';
import { Navigation } from './src/app/shared/navigation';

class Piciewody extends React.Component {
    componentDidMount() {
        firebase.auth().signInAnonymously();
    }

    render() {
        return <App />;
    }
}

AppRegistry.registerComponent(appName, () => Piciewody);
