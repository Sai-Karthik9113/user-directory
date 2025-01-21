import React, { useState } from "react";
import EmployeeForm from "./components/Modal/Modal";
import EmplpoyeeTable from './components/UserList/UserList'
import Button from './components/Button/Button'
import './App.css'

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateUserData, setUpdateUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserClick = () => {
    setCurrentUser(null);
    setIsFormVisible(true);
  }

  const handleCloseForm = () => {
    setIsFormVisible(false);
  }

  const addNewUser = (newUser) => {
    setUpdateUserData(prevUserData => [...prevUserData, newUser]);
  }

  const updateUser = (updatedUser) => {
    setUpdateUserData((prevUserData) => 
      prevUserData.map((user) => 
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsFormVisible(true);
  }

  return (
    <div className="container">
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
      {isFormVisible && <EmployeeForm closeForm={handleCloseForm} addNewUser={addNewUser} updateUser={updateUser} currentUser={currentUser} />}
      <EmplpoyeeTable userData={updateUserData} setUserData={setUpdateUserData} handleEditUser={handleEditUser} />
    </div>
  )
}

export default App;
