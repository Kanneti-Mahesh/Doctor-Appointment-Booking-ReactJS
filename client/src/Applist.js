import React from 'react';
import pic from './prof.png'

function Applist(props) {
    
    
    function handleEdit(pname,gender,age,pno,date,time,dname,cr)
    {
        props.edit(pname,gender,age,pno,date,time,dname,cr)
    }
    function handleDelete(val)
    {
        props.delete(val)
    }

    
        return(
        <div class="container">
            <br/>
                <br/>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Status</th>
                                <th>Appointment</th>
                                <th>Phone</th>
                                <th>Doctor</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.lists.map(list => (

                                    <tr>
                                        <td>
                                            <div class="user-info">
                                                <div class="user-info__img">
                                                    <img src={pic} alt="User Img"/>
                                                </div>
                                                <div class="user-info__basic">
                                                    <h5 class="mb-0">{list.pname}</h5>
                                                    <p class="text-muted mb-0">{list.age+" yrs "+list.gender}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="btn btn-success">{list.cr}</span>
                                        </td>
                                        <td>
                                            <h6 class="mb-0">{list.time}</h6>
                                            <small>{list.date}</small>
                                        </td>
                                        <td>

                                            <h6 class="mb-0">{list.pno}</h6>
                                            <a href="#!"><small>Contact</small></a>
                                        </td>
                                        <td>
                                            <h6 class="mb-0">{list.dname}</h6>
                                        </td>
                                        
                                            <td>
                                            <button type="button" class="btn btn-success" onClick={()=>handleEdit(list.pname,list.gender,list.age,list.pno,list.date,list.time,list.dname,list.cr)}>Edit</button>
                                            </td>
                                            <td>
                                            <button  type="button" class="btn btn-danger" onClick={()=>handleDelete(list.pname)}>Delete</button>
                                            </td>
             
                                        
                                    </tr>))
                           
                           
                        }

                        </tbody>
                    </table>
                </div>

        )
    }


export default Applist