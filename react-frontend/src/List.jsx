import React from "react";
import { Link } from "react-router-dom";


const List = ({
    allStudents,
    DeleteStudent
}) => {
    return (
        <React.Fragment>
            <div style={{ textAlign: "center", backgroundColor: "darkgoldenrod", height: '50px' }}>
                <h1>Student Details list</h1>
            </div>
            <div style={{ width: '100%' }}>
                <table style={{ width: '100%' }}>
                    <th style={{ display: 'contents', fontSize: '20px' }}>
                        <tr style={{ backgroundColor: "#616000", height: '40px' }}>
                            <td align="center">No</td>
                            <td align="center">Name</td>
                            <td align="center">Email</td>
                            <td align="center">Address</td>
                            <td align="center">Delete</td>
                        </tr>
                    </th>
                    <tbody>
                        {allStudents && allStudents.map((student, inx) => {
                            return (
                                <tr style={{ backgroundColor: "#616000", height: '40px' }} key={inx}>
                                    <td align="center">{inx + 1}</td>
                                    <td align="center">{student.name}</td>
                                    <td align="center">{student.email}</td>
                                    <td align="center">{student.address}</td>
                                    <td align="center">
                                        <Link to="/">
                                            <button onClick={() => DeleteStudent(student.id)}> ➖ </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default List;
