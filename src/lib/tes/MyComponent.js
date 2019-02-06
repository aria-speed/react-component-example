import React, { Component } from 'react';
import Swal from 'sweetalert2';
import './my-component.css';

class MyComponent extends Component {
    showMessage() {
        Swal.fire(
            'Good job!',
            'You just try the react example component!',
            'success'
        )
    }
    render() {
        return (
            <div className="com-button" onClick={this.showMessage.bind(this)}>
                Show The Message
            </div>
        );
    }
}

export default MyComponent;