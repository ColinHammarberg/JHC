import React from 'react';
import { InlineWidget } from "react-calendly";

function CalendyWidget() {
    return (
        <div className="App">
            <InlineWidget url="https://calendly.com/colin-hammarberg" />
        </div>
    )
}

export default CalendyWidget;