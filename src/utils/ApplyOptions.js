import React from 'react';
import {userData} from "../data";
import GetEventInfo from "./getEventInfo";

class ApplyOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActive: true};
        this.eventKey = props.eventKey;
        this.hasAppliedToCurrentEvent = userData.appliedEvents.indexOf(this.eventKey) !== -1;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(eventKey, e) {
        this.setState(state => ({
            isActive: false
        }));
        console.log("e.target", e.target);

        const event = GetEventInfo(eventKey);
        if (event.type.toLowerCase() === "premium webinar" && userData.subscriptionType.toLowerCase() !== "premium") {
            openModal("warning-modal");
        } else {
            if (!this.state.isActive) {
                console.log("entró and I don't know why");
                return;
            }
            userData.appliedEvents.push(eventKey);
            //setModalInfo(eventNode);
            this.disableApplyButtons(eventNode);
        }
    }

    disableApplyButtons(eventNode) {
        const applyButtons = eventNode.querySelectorAll(".primary-button");

        applyButtons.forEach(function (button) {
            button.classList.add("primary-button--checked");
            button.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>Applied';
            button.setAttribute("disabled", true);
        })
    }

    render() {
        return this.hasAppliedToCurrentEvent ? (
            <button className="primary-button primary-button--checked" data-event-status="available" disabled={true}>
                <i className="fas fa-check" aria-hidden={true}></i>
                Applied
            </button>
        ) : (
            <button className={`primary-button ${this.state.isActive ? '' : 'primary-button--checked'}`} data-event-status="available"
                    onClick={(e) => this.handleClick(this.eventKey, e)}>
                {this.state.isActive ? 'Apply' : 'Applied'}
            </button>
        );
    }
}

export default ApplyOptions;