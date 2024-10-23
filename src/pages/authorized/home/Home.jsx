import React, { useState } from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { PiDoorOpenDuotone } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiRepeatFill } from "react-icons/ri";
import { MdOutlineFilterAlt } from "react-icons/md";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import '@styles/_home.css';

const Home = () => {

  /* UseState Here...*/
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  });
  const [focusedDate, setFocusedDate] = useState(false);


  /* Functions Here...*/
  const handleDateChange = (focusedDate) => {
    setFocusedDate(focusedDate);
  };
  const handleDatesChange = ({ startDate, endDate }) => {
    setDateRange({ startDate, endDate });
  };


  return (
    <div className='dashboard_wrap'>
      <div className='dashboard_filter'>
         <div className='left'>
            <span><MdOutlineFilterAlt /> filters</span>
         </div> 
         <div className='right'>
            <form>
              <div className='form_group'>
                <select>
                  <option>select city</option>
                </select>
              </div>
              <div className='form_group'>
                <select>
                  <option>select campaign</option>
                </select>
              </div>
              <div className='form_group'>
                <DateRangePicker
                  startDate={dateRange.startDate} 
                  startDateId="your_unique_start_date_id"
                  endDate={dateRange.endDate} 
                  endDateId="your_unique_end_date_id"
                  onDatesChange={handleDatesChange}
                  focusedInput={focusedDate}
                  onFocusChange={handleDateChange}
                  minimumNights={0}
                  isOutsideRange={() => false}
                />
              </div>
              <div className='btn_group'>
                <button>search</button>
                <button>clear</button>
              </div>
            </form>
         </div>
      </div>
      <div className='top_bar'>
          <div className='box'>
              <FaHandsClapping />
              <h3>0</h3>
              <span>Total Knocks</span>
          </div>
          <div className='box'>
              <PiDoorOpenDuotone />
              <h3>0</h3>
              <span>Doors Answered</span>
          </div>
          <div className='box'>
              <IoCallSharp />
              <h3>0</h3>
              <span>Productive Calls</span>
          </div>
          <div className='box'>
              <SlGraph />
              <h3>0</h3>
              <span>Productivity</span>
          </div>
          <div className='box'>
              <BsCurrencyDollar />
              <h3>0</h3>
              <span>Revenue in PKR</span>
          </div>
          <div className='box'>
              <RiRepeatFill />
              <h3>0</h3>
              <span>Conversion Rate</span>
          </div>
      </div>
    </div>
  )
}

export default Home