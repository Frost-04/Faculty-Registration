import React, { useEffect, useState } from 'react';
import DepartmentService from '../../services/DepartmentService';

const DepartmentDropdown = ({ value, onChange }) => {
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
        <div>
            <label>Department</label>
            <select
                className="form-control"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
            >
                <option value="">Select a department</option>
                {departments.map((department) => (
                    <option key={department.deptId} value={department.deptId}>
                        {department.deptName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DepartmentDropdown;
