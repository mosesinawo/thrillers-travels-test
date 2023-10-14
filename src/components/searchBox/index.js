import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowDown2, Calendar, Location } from 'iconsax-react';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';

const Search = () => {

    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);

    const handleDate = () => setOpenDate(!openDate)
    return (
        <div className='search'>
            <div className='--flex-center search-input-box'>
                <span><Location size="20" color="#c1c8d3" /></span> &nbsp; &nbsp;
                <input className='search-input' type='text' placeholder='Where Are You Going?' />
                <span style={{ marginLeft: "auto" }}><ArrowDown2 size="20" color="#333" /></span>
            </div>
            <div className=' search-date'>
                <div>
                    <span><Calendar size="20" color="#c1c8d3" /></span> &nbsp; &nbsp;
                    <span onClick={handleDate} style={{color:"#c1c8d3", cursor:'pointer'}}>Check in date</span>
                </div>
                {openDate &&   <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="search-date-calender"
                    minDate={new Date()}
                  />}
                <span style={{ marginLeft: "auto" }}><ArrowDown2 size="20" color="#333" /></span>
            </div>
            <div className='--flex-center'>
                <FontAwesomeIcon icon={faUser} size="2xs" style={{ width: 20, height: 20 }} />&nbsp; &nbsp;
                <input type='text' value="3 adults" className='search-input-2' />
                <span style={{ marginRight: 50 }}><ArrowDown2 size="20" color="#333" /></span>
                <span className='search-btn'>Search</span>
            </div>
        </div>
    )
}

export default Search