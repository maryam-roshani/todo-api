import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { AdapterJalaali } from '../assets/JalaliDateAdapter';
import dayjs from 'dayjs';
import 'dayjs/locale/fa';


const MyDatePicker = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <div className='bg-gray-100 w-full'>
      <LocalizationProvider dateAdapter={AdapterJalaali} adapterLocale="fa">
        <DatePicker
          label="تاریخ"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
          className='w-full flex justify-between'
        />
      </LocalizationProvider>
    </div>
  );
};

export default MyDatePicker;
