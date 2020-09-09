import React from 'react';
import {userData} from "../data";

class ApplyOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActive: true};
        this.eventKey = props.eventKey;
        this.hasAppliedToCurrentEvent = userData.appliedEvents.indexOf(this.eventKey) !== -1;

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("holi");
        this.setState(state => ({
            isActive: false
        }));
    }

    render() {
        return this.hasAppliedToCurrentEvent ? (
            <button className="primary-button primary-button--checked" data-event-status="available" disabled={true}>
                <i className="fas fa-check" aria-hidden={true}></i>
                Applied
            </button>
        ) : (
            <button className={`primary-button ${this.state.isActive ? '' : 'primary-button--checked'}`} data-event-status="available" onClick={this.handleClick}>
                {this.state.isActive ? 'Apply' : 'Applied'}
            </button>
        );
    }
}

export default ApplyOptions;