import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        if (!this.props.employee) {
            return(<p>Choose the person.</p>);
        }
        return (
            <div>
                <img src={this.props.employee.img}></img>
                <p>First name: {this.props.employee.firstName}</p>
                <p>Last name: {this.props.employee.lastName}</p>
                <p>Age: {this.props.employee.age}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employee: state.employeeActiv
    };
}

export default connect(mapStateToProps)(Details);
