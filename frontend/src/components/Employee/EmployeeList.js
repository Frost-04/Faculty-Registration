import React, { useEffect, useState } from 'react';
import EmployeeService from '../../services/EmployeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await EmployeeService.getAllEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch employees.');
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="mt-4">
            <h4>Employees</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>
                                {employee.firstName} {employee.lastName}
                            </td>
                            <td>{employee.email}</td>
                            <td>{employee.title}</td>
                            <td>{employee.department.deptName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
