import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Image from '../images/spce-small.svg'

export const ScrollButton = (props) => {
  const { onClick, showSpceLanding } = props;
    return (
      <>
        <div className="scrolling-btn">
            <div className="image" onClick={onClick}>
                <img src={Image} alt="" />
            </div>
            {!showSpceLanding ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </div>
      </>
    )
}