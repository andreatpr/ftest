import '../assets/styles/App.css';
import React, { useState, useEffect } from 'react';
import { createStudent } from '../services/api';

const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [ streetAddress, setStreetAddress] = useState('')
  const [age, setAge] = useState(0);
  const [birthdate, setBirthdate] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [dni, setDni] = useState(0);
  const [error, setError] = useState('');

  const addStudent = async () => {
    try {
      const studentData = {name, gender, streetAddress, age, birthdate, speciality, dni};
      const response = await createStudent(studentData);
      setName('');
      setGender('');
      setStreetAddress(''); 
      setAge(0);
      setBirthdate('');
      setSpeciality('');
      setDni(0);
      console.log('Student added ', response);
    }catch(error) {
      console.error('Error adding student:', error);
      window.alert(error.response?.data?.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="Main-One">
      <h4>Add New Student!</h4>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={addStudent}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        <input type="text" placeholder="Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="date" placeholder="Birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        <input type="text" placeholder="Speciality" value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
        <input type="number" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </div>
  );

};

export default App;
