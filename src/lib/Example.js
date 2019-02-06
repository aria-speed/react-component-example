import React, { Component } from 'react';
import MyComponent from './tes/MyComponent';
import "./example.css";

class Example extends Component {
    render() {
        return (
            <div className="simple-form-group">
                <MyComponent/>
            </div>
        );
    }
}

export default Example;