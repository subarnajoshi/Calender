import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import "./Calender.scss";

const CalenderComponent = (props: any) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
    <div className="calender-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
        className="custom-calender"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        shouldDisableDate={(date) => date < today}
      />
      </LocalizationProvider>
      </div>
    );
  };
  
  export default CalenderComponent;