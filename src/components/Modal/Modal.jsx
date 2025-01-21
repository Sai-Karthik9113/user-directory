import React, { useEffect, useState } from "react";
import styles from './Modal.module.css';
import { addUser, updateNewUser } from "../../api";

const EmployeeForm = ({ closeForm, addNewUser, updateUser, currentUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setEmail(currentUser.email);
            setCompany(currentUser.company.name);
        }
    }, [currentUser]);

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const user = {
            id: currentUser ? currentUser.id : Date.now(),
            name,
            email,
            company: {
                name: company
            },
        }

        try {
            if (currentUser) {
                const updatedUser = await updateNewUser(user.id, user);
                updateUser(updatedUser);
            } else {
                const newUser = await addUser(user);
                addNewUser(newUser);
            }
        } catch (error) {
            setError("An error occured whilesaving user details");
            console.error(error);
        }
        
        closeForm();
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>{currentUser ? 'Edit User' : 'Add New User'}</h2>
                {error && <p align="center" style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'> Full Name: </label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        required
                    />
                    <label htmlFor='email'> Email: </label>
                    <input
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor='company'> Company: </label>
                    <input
                        type="text"
                        id='company'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter company name"
                        required
                    />
                    <div className={styles.formButtons}>
                        <button type="submit">{currentUser ? 'Update User' : 'Add User'}</button>
                        <button type="button" onClick={closeForm}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EmployeeForm;