import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export default function CalendarUi({ availableDates, onDateSelect }) {
  // Function to check if a date is available
  const isAvailable = (date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    return availableDates.includes(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DateCalendar
          shouldDisableDate={(date) => !isAvailable(date)}
          sx={{
            '& .MuiPickersDay-root': {
                backgroundColor: '#FFCCCC',//lightred
                color: 'grey',
                '&:not(.Mui-disabled)': {
                  backgroundColor: '#96e16a',
                  color: '#000',
                },
                '&:not(.Mui-disabled):hover': {
                backgroundColor: '#8df350',
                color: '#fff',
              },
                '&.Mui-selected': {
                backgroundColor: '#4fd400',
                color: '#fff',
              },
            },
          }}
          onChange={(newDate) => onDateSelect(newDate)} // Notify parent on date selection
        />
      </div>
    </LocalizationProvider>
  );
}
