import React from 'react';
import { InlineWidget } from "react-calendly";

function CalendyWidget() {
    return (
        <div className="App">
            <InlineWidget url="https://calendly.com/your_scheduling_page" />
        </div>
    )
}

export default CalendyWidget;