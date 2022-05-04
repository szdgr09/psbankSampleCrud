import { Grid, TextField, Box, Select, Button, MenuItem } from '@material-ui/core';
import React, { useState, useEffect} from 'react';
import '../App.css'
import { DataTable } from './DataTable';


export const Crud = () => {
    const tempSession = sessionStorage.getItem('mockData')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddlename] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('Male')
    const [dob, setDob] = useState('')
    const [acctNum, setAcctNum] = useState('')
    const [data, setData] = useState()

    useEffect(() => {
        let temp = JSON.parse(tempSession)
        setData(temp)
    }, [tempSession])

    // handlers
    const handleSubmit = e => {
        console.log('submit')
        e.preventDefault()
        const tempData = data
        tempData.push({
            firstName,
            middleName,
            lastName,
            gender,
            dob,
            acctNum
        })
        sessionStorage.setItem('mockData', JSON.stringify(tempData))
    }

    const handleDelete = (index) => {
        const tempData = data
        tempData.splice(index,1)
        sessionStorage.setItem('mockData', JSON.stringify(tempData))
    }
    
    return <Grid xs={12} className="container">
        <Box component={'div'}>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                    <Grid className="formField">
                        <TextField placeholder='First Name' name="firstName" required value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid className="formField">
                        <TextField placeholder='Middle Name' name="middleName" required value={middleName}
                        onChange={e => setMiddlename(e.target.value)}></TextField>
                    </Grid>
                    <Grid className="formField">
                        <TextField placeholder='Last Name' name="lastName" required value={lastName}
                        onChange={e => setLastName(e.target.value)}></TextField>
                    </Grid>
                    <Grid className="formField">
                        <Select placeholder='Gender' value={gender}
                        onChange={e => setGender(e.target.value)}
                        >
                            <MenuItem value={'Male'} required>Male</MenuItem>
                            <MenuItem value={'Female'} required>Female</MenuItem>
                        </Select>
                    </Grid>
                    <Grid className="formField">
                        <TextField placeholder='Date of Birth' type="date" required value={dob}
                            onChange={e => setDob(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid className="formField">
                        <TextField placeholder='Account Number' type="number" name="acctNum" required value={acctNum}
                            onChange={e => setAcctNum(e.target.value)}
                        ></TextField>
                    </Grid>
                    <Grid className="formField">
                        <Button type="submit" required className='button'>Submit</Button>
                    </Grid>
                    {/* <Grid style={{ margin: '10px 0'}}>
                        <TextField placeholder='Search in Table'></TextField>
                    </Grid> */}
                </form>
                <DataTable data={data} handleDelete={handleDelete}/>
        </Box>
    </Grid>
}