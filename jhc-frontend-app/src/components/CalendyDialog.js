import React from 'react';
import { PopupModal } from 'react-calendly';

class InlineWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    render() {
        return (
            <div>
                <PopupModal
                    url="https://calendly.com/"
                    pageSettings={this.props.pageSettings}
                    utm={this.props.utm}
                    prefill={this.props.prefill}
                    onModalClose={() => this.setState({ isOpen: false })}
                    open={this.state.isOpen}
                    rootElement={document.getElementById("root")}
        />
            </div>
        )
    }
}
export default InlineWidget;