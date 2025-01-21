import styles from './Modal.module.css';
import React, { useState } from "react";

const EmployeeForm = ({ closeForm, addNewUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            name,
            email,
            company: {
                name: company
            },
        }

        addNewUser(newUser);
        
        closeForm();
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Add New User</h2>
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
                        <button type="submit">Add User</button>
                        <button type="button" onClick={closeForm}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default EmployeeForm;