import React, { useState, useEffect } from "react";
import styles from './UserList.module.css';
import Button from "../Button/Button";
import { MdOutlineEdit, MdOutlineCancel } from "react-icons/md";
import { CircularProgress } from "@mui/material";
import { fetchUsers, deleteUser } from "../../api";

const EmplpoyeeTable = ({ userData, setUserData, handleEditUser }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchUsers();
                setUserData(res);
                setLoading(false);
            } catch (error) {
                console.error("Error: ", error);
                setLoading(false);
            }
        }

        loadData();

    }, []);

    const getFirstName = (fullName) => {
        const nameArr = fullName.split(" ");
        if (nameArr[0] !== "Mr." && nameArr[0] !== "Mrs." ) {
            return nameArr[0];
        } else {
            return nameArr[1];
        }
    }

    const getLastName = (fullName) => {
        const nameArr = fullName.split(" ");
        if (nameArr.length > 1) {
            if (nameArr[nameArr.length - 1].length > 1) {
                return nameArr[(nameArr.length - 1)];
            } else if (nameArr.length > 2) {
                return nameArr[(nameArr.length - 2)];
            } else {
                return "-";
            }
        } else {
            return "-";
        }
    }
    
    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUserData(userData.filter(user => user.id !== id));
        } catch (error) {
            setError(error);
        }
    }

    if (loading) {
        return (
            <div className={styles.circularLoading}>
                <CircularProgress />
            </div>
        )
    }

    if (error) {
        return (
            <p className={styles.displayErrMessage}>
                {error}
            </p>
        )
    }

    return (
        <>
            <table className={styles.userTable} align="center" cellPadding={10}>
                <thead>
                    <tr className={styles.userTableRow}>
                        <th> ID </th>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Email </th>
                        <th> Company </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody align="center">
                    {
                        userData.map((user, idx) => (
                            <tr key={`${user}-${idx}`} className={styles.userTableRow}>
                                <td> {user.id} </td>
                                <td> {getFirstName(user.name)} </td>
                                <td> {getLastName(user.name)} </td>
                                <td> {user.email} </td>
                                <td> {user.company.name} </td>
                                <td className={styles.actionButtons}>
                                    <Button
                                        text={<MdOutlineEdit />}
                                        style={{
                                            backgroundColor: 'orange',
                                            color: 'black'
                                        }}
                                        onClick={() => handleEditUser(user)}
                                    />
                                    <Button
                                        text={<MdOutlineCancel />}
                                        style={{
                                            backgroundColor: 'red'
                                        }}
                                        onClick={() => handleDelete(user.id)}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default EmplpoyeeTable;