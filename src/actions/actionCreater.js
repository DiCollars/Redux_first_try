export const select = (employee) => {
    alert (`${employee.firstName} ${employee.lastName}`);
    return {
        type: 'EMPLOYEE_SELECTED',
        payload: employee
    }
};
