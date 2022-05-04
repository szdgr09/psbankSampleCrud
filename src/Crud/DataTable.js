import { Grid, Button } from '@material-ui/core';
import React from 'react';
import '../App.css'

export const DataTable = ({ data, handleDelete }) => {
    return (
    <Grid className={'table'}>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Date of Birthday</th>
                    <th>Account Number</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data && data?.length > 0 && data?.map((mock,index) => (
                    <tr key={index}>
                        <td>
                            {mock?.firstName}
                        </td>
                        <td>
                            {mock?.middleName}
                        </td>
                        <td>
                            {mock?.lastName}
                        </td>
                        <td>
                            {mock?.gender}
                        </td>
                        <td>
                            {mock?.dob}
                        </td>
                        <td>
                            {mock?.acctNum}
                        </td>
                        <td>
                            <Button onClick={() => {
                                handleDelete(index)
                            }}>Delete</Button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </Grid>
    )
}