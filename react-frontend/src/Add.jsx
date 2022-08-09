import React, { useState, useEffect } from "react";
import List from "./List";
import axios from "axios";


const Add = () => {
    const [addstudent, setStudent] = useState({
        name: "",
        email: "",
        address: ""
    });
    const [allStudents, setAllStudents] = useState([])

    useEffect(()=>{
        getAllStudent()
    }, [addstudent])    //dependence_array:-if somthing heppen in the addstudent then it will call 

    const getAllStudent = async () => {
        try{
            const student = await axios.get("https://djangoasbackend.herokuapp.com/list")
            console.log(student.data);
            setAllStudents(student.data);
        }catch(error){
            console.log("Somthing is wrong");
        }
    }

    const deleteStudentAPI = async (id) => {
        try {
            await axios.delete(`https://djangoasbackend.herokuapp.com/destroy/${id}`)
        } catch (error) {
            console.log('Something went wrong');        
        }
    }
    
    const DeleteStudent =  (id) => {
        deleteStudentAPI(id).then(() => {
            getAllStudent()
        })
    }

    const onTextFieldChange = (event) => {
        setStudent({
            ...addstudent,
            [event.target.name]: event.target.value
        })
        // console.log(addstudent);
    }

    const addStudentAPI = async(student) => {
        try {
            await axios.post("https://djangoasbackend.herokuapp.com/create",student)
        } catch(error) {
            console.log("Error", error)
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        const ref = {
            name: addstudent.name,
            email: addstudent.email,
            address: addstudent.address
        }

        addStudentAPI(ref).then((res) => {
            // debugger
            resetForm()
        })
    }

    const resetForm  = () => {
        setStudent({
            name: "",
            email: "",
            address: ""
        });
    }

    return (
        <React.Fragment>
            <div style={{ width: '100%', backgroundColor: 'cyan', marginTop:'10px', height:'50px',
            textAlign:"center"}}>
                <h1>React CRUD operation with material-UI</h1>
            </div>
            <div style={{ width: '100%', marginTop:'10px', height:'50px', textAlign:"center"}}>
                <div >
                    <div style={{ backgroundColor: "gold", height:'50px', width:'50%', margin:'auto'}}>
                        <h1> Student details</h1>
                    </div>
                    <form onSubmit={onFormSubmit}>
                        <div>
                            <div>
                                <input autoComplete="stuname" name="name"
                                    variant="outlined" required fullWidth id="stuname"
                                    label="Name"
                                    value={addstudent.name} 
                                    placeholder="Name"
                                    onChange={(e) => { onTextFieldChange(e) }}
                                    style={{width: '49%',height: '40px'}}>
                                </input>
                            </div>
                            <div>
                                <input autoComplete="email" name="email"
                                    variant="outlined" reaquired fullWidth id="email"
                                    label="Email Address"
                                    value={addstudent.email}
                                    placeholder="Email"
                                    onChange={(e) => { onTextFieldChange(e) }}
                                    style={{width: '49%',height: '40px'}}>
                                </input>
                            </div>
                            <div>
                                <input autoComplete="email" name="address"
                                    variant="outlined" reaquired fullWidth id="email"
                                    label="Address"
                                    value={addstudent.address}
                                    placeholder="Address"
                                    onChange={(e) => { onTextFieldChange(e) }}
                                    style={{width: '49%',height: '40px'}}>
                                </input>
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={(event) => onFormSubmit(event)}
                                style={{ width: '50%', backgroundColor: 'cadetblue', 
                                marginTop:'10px', height:'50px', merginBottom:'20px'}}>
                                Add Stuent Details
                            </button>
                        </div>
                    </form>
                </div>
                <div style={{ width: '100%', marginTop:'50px', height:'50px',
                textAlign:"center"}}>
                    <List allStudents={allStudents} DeleteStudent={DeleteStudent}/>
                </div>
            </div>
        </React.Fragment>
    )
}   

export default Add;
