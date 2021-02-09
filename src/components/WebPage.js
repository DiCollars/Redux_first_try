import React from 'react';
import EmployeeList from '../containers/employee-list';
import DetailList from '../containers/details-list';

const WebPage = () => (<div>
        <h3>Employees:</h3>
        <EmployeeList/>
        <hr></hr>
        <h3>Details:</h3>
        <DetailList/>
    </div>);

export default WebPage;