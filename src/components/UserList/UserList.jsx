import React, { useState, useEffect } from "react";
import styles from './UserList.module.css';
import Button from "../Button/Button";
import { MdOutlineEdit, MdOutlineCancel } from "react-icons/md";
import { CircularProgress, colors } from "@mui/material";
import { fetchUsers } from "../../api";

const EmplpoyeeTable = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchUsers();
                setUserData(res);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        loadData();

    }, []);

    const getFirstName = (fullName) => {
        const nameArr = fullName.split(" ");
        return nameArr[0];
    }

    const getLastName = (fullName) => {
        const nameArr = fullName.split(" ");
        if (nameArr.length > 1) {
            return nameArr[1];
        } else {
            return "-";
        }
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
                        !userData ? (
                            <CircularProgress />
                        ) : (
                            userData.map((user, idx) => (
                                <>
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
                                            />
                                            <Button
                                                text={<MdOutlineCancel />}
                                                style={{
                                                    backgroundColor: 'red'
                                                }}
                                            />
                                        </td>
                                    </tr>
                                </>
                            ))
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default EmplpoyeeTable;