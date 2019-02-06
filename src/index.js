import React from 'react';
import { render } from "react-dom";
import Example from './lib/Example';

/**
 * reset document body style
 * with no padding and margin
 */
(() => { 
    document.body.style.margin = 0;
    document.body.style.padding = 0;
})();

/**
 * set context to center of page
 * for preview component
 */
const rootAppStyle = { 
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, .05)'
};

const containerStyle = {
    boxShadow: '0px 1px 4px 2px rgba(0, 0, 0, .1)', 
    background: 'white',
    padding: '12px'
};

const App = () => (
    <div style={rootAppStyle}>
        <div style={containerStyle}>
            <Example label="Email Address" placeholder="name@example.com" />
        </div>
    </div>
);

render(<App />, document.getElementById("root"));
