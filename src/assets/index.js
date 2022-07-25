import React from 'react';
import './app.css';
import 'react-circular-progressbar/dist/styles.css';
import loadable from '@loadable/component';
const RouterComponent = loadable(() => import('./routers/web'));
const App = () => {
    return (
        <RouterComponent/>
    )
}

export default React.memo(App);