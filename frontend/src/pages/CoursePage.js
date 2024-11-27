import React from 'react';
import CourseForm from '../components/Course/CourseForm';
import CourseList from '../components/Course/CourseList';
import CourseDetails from '../components/Course/CourseDetails';

const CoursePage = () => {
    return (
        <div className="container mt-4">
            <h2>Course Management</h2>
            <CourseForm />
            <CourseList />
            {/*<CourseDetails />*/}
        </div>
    );
};

export default CoursePage;
