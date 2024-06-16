import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/student/new';

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post(API_URL, studentData);
        console.log('response', response);
        return response.data;
    } catch (error) {
        throw error;
    }
};

