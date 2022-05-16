import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Game from './components/Game'
import Text from './components/Text'
import TextHarder from './components/TextHarder';
import List from './components/List';
import List2 from './components/List2';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
// root.render(<Text />);
// root.render(<TextHarder />);
// root.render(<List />);
root.render(<List2 />);