import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
import { PiDoorOpenDuotone } from "react-icons/pi";
import { IoCallSharp } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiRepeatFill } from "react-icons/ri";
import '@styles/_home.css';

const Home = () => {
  return (
    <div className='dashboard_wrap'>
      <div className='dashboard_filter'>
         <div className='left'>
            <span>filters</span>
         </div> 
         <div className='right'>
            <form>
              <div className='form_group'>
                <label>select city</label>
                <select>
                  <option>select</option>
                </select>
              </div>
              <div className='form_group'>
                <label>select campaign</label>
                <select>
                  <option>select</option>
                </select>
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