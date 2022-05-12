import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Game from './components/Game'
import Text from './components/Text'
import TextHarder from './components/TextHarder';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
// root.render(<Text />);
root.render(<TextHarder />);