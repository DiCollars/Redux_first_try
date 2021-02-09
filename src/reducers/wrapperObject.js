import {combineReducers} from 'redux';
import EmployeeReducers from './emploee';
import EmployeeActive from './emploee-active';

const allReducers = combineReducers({
    employees: EmployeeReducers,
    employeeActiv: EmployeeActive
});

export default allReducers;