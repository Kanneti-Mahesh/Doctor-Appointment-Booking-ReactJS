import { createSlice } from '@reduxjs/toolkit';


export const AppointmentSlice = createSlice({

  name: 'Appointment',
  initialState:{
    UserAppointmentlist: [
        { "pname": "Sidharth", "gender": "Male", "age": 24, "pno": "9786984952", "date": "10-06-2022", "time": "06:00 PM", "dname": "Dr.Manu", "cr": "Consult" },
    
    ],
  },
  reducers: {
    add: (state, action) => {
      state.UserAppointmentlist.push(action.payload.user);
    },
    delete: (state, action) => {
      var patients=state.UserAppointmentlist
      for(let i=0; i<patients.length;i++){
        if(action.payload.id===patients[i].pname){
          patients.splice(i,1);
          break;
        }
      }
      state.UserAppointmentlist=patients;
    },
    update: (state, action) => {
      var patients=state.UserAppointmentlist
      for(let i=0; i<patients.length;i++){
        if(action.payload.id===patients[i].pname){
          patients.splice(i,1);

          break;
        }
      }

    }

  }});  

export default AppointmentSlice.reducer

