import React, { useEffect, useState } from 'react';
import DepartmentService from '../../services/DepartmentService';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await DepartmentService.getAllDepartments();
                setDepartments(response.data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch departments.');
            }
        };

        fetchDepartments();
    }, []);

    return (
        <div className="mt-4">
            <h4>Departments</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.deptId}>
                            <td>{department.deptId}</td>
                            <td>{department.deptName}</td>
                            <td>{department.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentList;
