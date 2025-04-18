import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { AdapterJalaali } from '../assets/JalaliDateAdapter';
import dayjs from 'dayjs';
import 'dayjs/locale/fa';

dayjs.locale('fa'); // Set global locale

const MyDatePicker = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <div className='bg-gray-100 w-full p-4 text-black'>
      <LocalizationProvider dateAdapter={AdapterJalaali} adapterLocale="fa">
        <DatePicker
          label="تاریخ"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          inputFormat="jYYYY/jMM/jDD"
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MyDatePicker;
