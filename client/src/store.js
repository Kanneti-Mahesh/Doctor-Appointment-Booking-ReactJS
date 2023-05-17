import { configureStore } from '@reduxjs/toolkit'

import AppointmentReducer from './AppointmenSlice'

export default configureStore({
    reducer: {
      Appointment: AppointmentReducer,
    },
  })
