import React, { useState } from 'react';
import DepartmentDropdown from '../Department/DepartmentDropdown';
import EmployeeService from '../../services/EmployeeService';

const EmployeeForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        title: '',
        photoPath: '', // Store photo path here
        deptId: '', // Department selection
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFilePathChange = (e) => {
        // Assuming the file path is manually provided or calculated
        setForm({ ...form, photoPath: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the request body in JSON format
        const requestBody = {
            email: form.email,
            password: form.password,
            firstName: form.firstName,
            lastName: form.lastName,
            title: form.title,
            photoPath: form.photoPath, // Include photo path
            department: {
                deptId: form.deptId, // Wrap department ID inside a department object
            },
        };

        try {
            await EmployeeService.addEmployee(requestBody); // Send JSON request
            alert('Employee added successfully!');
            setForm({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                title: '',
                photoPath: '',
                deptId: '',
            });
        } catch (error) {
            console.error(error);
            alert('Failed to add employee. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={form.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label>Photo Path</label>
                    <input
                        type="file"
                        className="form-control"
                        name="photoPath"
                        value={form.photoPath}
                        onChange={handleFilePathChange}
                        required
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <DepartmentDropdown
                        value={form.deptId}
                        onChange={(value) =>
                            setForm({ ...form, deptId: value })
                        }
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Faculty
            </button>
        </form>
    );
};

export default EmployeeForm;
