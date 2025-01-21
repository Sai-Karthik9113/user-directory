import React, { useState } from "react";
import EmployeeForm from "./components/Modal/Modal";
import EmplpoyeeTable from './components/UserList/UserList'
import Button from './components/Button/Button'
import './App.css'

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateUserData, setUpdateUserData] = useState([]);

  const handleUserClick = () => {
    setIsFormVisible(true);
  }

  const handleCloseForm = () => {
    setIsFormVisible(false);
  }

  const addNewUser = (newUser) => {
    setUpdateUserData(prevUserData => [...prevUserData, newUser]);
  }

  return (
    <>
      <div className='heading-container'>
        <h1 align="left"> User Directory </h1>
        <Button
          text="Add User" 
          style={{
            backgroundColor: 'green',
            padding: '7.5px 15px',
            borderRadius: '5px'
          }}
          onClick={handleUserClick}
        />
      </div>
      {isFormVisible && <EmployeeForm closeForm={handleCloseForm} addNewUser={addNewUser} />}
      <EmplpoyeeTable userData={updateUserData} setUserData={setUpdateUserData} />
    </>
  )
}

export default App;
