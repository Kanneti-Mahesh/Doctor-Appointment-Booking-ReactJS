
import React, { useState } from 'react';
import Applist from './Applist';
import {AppointmentSlice} from './AppointmenSlice'
import { useSelector, useDispatch } from 'react-redux'



 function Appoint(props){
 
    const [inputs,setinputs]= useState({})
  
   const UserAppointmentlist = useSelector((state) => {
   return state.Appointment.UserAppointmentlist});

function handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setinputs({ ...inputs, [name]: value  });
  }


const dispatch = useDispatch();
  
const patientbook = () => {
        dispatch(AppointmentSlice.actions.add({user:{"pname":inputs.pname,"gender":inputs.gender,"age":inputs.age,"pno":inputs.pno,"date":inputs.date,"time":inputs.time,"dname":inputs.dname,"cr":inputs.cr}}));
        setinputs({"pname":"","gender":"","age":"","pno":"","date":"","time":"","dname":"","cr":""})        
}

const deletepatient = (val) => {
    dispatch(AppointmentSlice.actions.delete({id:val}))

}

const editpatient=(pname,gender,age,pno,date,time,dname,cr)=>{
    setinputs({"pname":pname,"gender":gender,"age":age,"pno":pno,"date":date,"time":time,"dname":dname,"cr":cr})
    
    dispatch(AppointmentSlice.actions.update({id:pname}))

}


    return (
        <div>
        <section class="form-content">
        <div class="container register-form">
                    <div class="form">
                        <div class="note">
                            <p>Welcome to MB TECH Doctor Appointment Booking</p>
                        </div>
        
                        <div class="form-content">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control"  placeholder="Patient Name *" name='pname' value={inputs.pname} onChange={handleInputChange}/>
                                    </div>
                                    <div class="form-group">
                                        <select  class="form-control" placeholder="Select Male/Female *" name='gender' value={inputs.gender} onChange={handleInputChange}>
                                        <option name="M">Male</option>
                                        <option name="F">Female</option> 
                                        </select>                               
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Age *" name='age' value={inputs.age} onChange={handleInputChange}/>
                                    </div>
        
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Phone Number *" name='pno' value={inputs.pno} onChange={handleInputChange}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Date *" name='date' value={inputs.date} onChange={handleInputChange}/>
                                    </div>
        
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Time *" name='time' value={inputs.time} onChange={handleInputChange}/>
                                    </div>
        
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Doctor Name *" name='dname' value={inputs.dname} onChange={handleInputChange}/>
                                    </div>
                                    <div class="form-group">
                                        <select  class="form-control" placeholder="Select Consule/Revisit *" name='cr' value={inputs.cr} onChange={handleInputChange}>
                                        <option name="Consult">Consult</option>
                                        <option name="Revisit">Revisit</option> 
                                        </select>                               
        
                                    </div>
                                </div>
        
                            </div>
                            <button type="button" class="btnSubmit" onClick={patientbook} >Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>
             
               
            <Applist lists={UserAppointmentlist} delete={deletepatient} edit={editpatient} />
            </div>
            
        
    );
  }


export default Appoint ;
