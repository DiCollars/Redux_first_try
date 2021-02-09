import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/actionCreater';

class EmployeeList extends Component {
    showList() {
         return this.props.employees.map((emploee) => {
             return (
                 <li key={emploee.id}>{emploee.firstName} -- <button onClick={() => this.props.select(emploee)}>Details</button></li>
             );
        });
    }
    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ select: select }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EmployeeList);