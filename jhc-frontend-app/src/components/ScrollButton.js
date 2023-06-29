import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from '../images/spce-small.svg'

export const ScrollButton = (props) => {
  const { onClick } = props;
    return (
      <>
        <div className="scrolling-btn">
            <div className="image" onClick={onClick}>
                <img src={Image} alt="" />
            </div>
           <ArrowDropDownIcon />
        </div>
      </>
    )
}