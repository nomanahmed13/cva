import React, { useState } from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { PiDoorOpenDuotone } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiRepeatFill } from "react-icons/ri";
import { MdOutlineFilterAlt } from "react-icons/md";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon"
import transition from "react-element-popper/animations/transition"
import '@styles/_home.css';
// import DashboardLayers from '@icon/DashboardLayers';

const Home = () => {

  /* Variables Here...*/

  
  /* UseState Here...*/
  const [value, setValue] = useState([]);


  /* Functions Here...*/
 


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
              <div className='form_group custom_date_picker'>
                <DatePicker 
                  value={value} 
                  onChange={setValue} 
                  range 
                  dateSeparator=" - "
                  numberOfMonths={2}
                  //render={<InputIcon/>}
                  animations={[
                    transition({ duration: 800, from: 35 })
                  ]} 
                  placeholder="Start Date - End Date"
                  showOtherDays
                  monthYearSeparator="-"
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
          <div className='box blue'>
              <span>Total Knocks</span>
              <h3>0</h3>
              {/* <DashboardLayers /> */}
          </div>
          <div className='box red'>
              <span>Doors Answered</span>
              <h3>0</h3>
              {/* <DashboardLayers /> */}
          </div>
          <div className='box green'>
              <span>Productive Calls</span>
              <h3>0</h3>
              {/* <DashboardLayers /> */}
          </div>
          <div className='box orange'>
              <span>Productivity</span>
              <h3>0</h3>
              {/* <DashboardLayers /> */}
          </div>
          <div className='box purple'>
              <span>Revenue in PKR</span>
              <h3>0</h3>
              {/* <DashboardLayers /> */}
          </div>
          <div className='box yellow'>
              <span>Conversion Rate</span>
              <h3>0</h3>
              {/* <DashboardLayers /> */}
          </div>
      </div>
    </div>
  )
}

export default Home