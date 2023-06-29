import React from 'react';
import PropTypes from 'prop-types';
import './styles/Avatar.scss'

export const Avatar = (props) => {
    const { image } = props;
    return (
        <div className="avatar">
            <img src={image} className="image" alt="" />
       </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.string,
};  

