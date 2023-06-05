import React from 'react';
import './styles/ShowcaseCompany.scss';

export const ProblemAreas = (props) => {
    const { item } = props;
    return (
        <div className="showcase-company">
            <img src={item.source} key={item.key} alt="" />
        </div>
    )
}