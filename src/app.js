import React from 'react';
import ReactDOM from 'react-dom';

import NeatListApp from './containers/NeatListApp/NeatListApp';

import './styles/style.scss';

const appRoot = document.getElementById('app');

ReactDOM.render(<NeatListApp />, appRoot);