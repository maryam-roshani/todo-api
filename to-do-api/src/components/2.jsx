import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { AdapterJalaali } from './JalaaliDateAdapter';
import dayjs from 'dayjs';
import 'dayjs/locale/fa';

const toPersianDigits = (str) => str.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

const MyDatePicker = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <div className='bg-gray-100'>
      <LocalizationProvider dateAdapter={AdapterJalaali} adapterLocale="fa">
        <DatePicker
          label="تاریخ"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>

      {/* ⬇️ Persian-formatted selected date */}
      <div className="mt-4 text-center text-lg text-gray-700 font-medium">
        تاریخ انتخاب شده:
        <span className="ml-2 text-purple-700">
          {toPersianDigits(value.format('jYYYY/jMM/jDD'))}
        </span>
      </div>
    </div>
  );
};

export default MyDatePicker;
