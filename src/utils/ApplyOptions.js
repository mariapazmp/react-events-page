import React from 'react';
import {userData} from "../data";

const ApplyOptions = (props) => {
    const hasAppliedToCurrentEvent = userData.appliedEvents.indexOf(props.eventKey) !== -1;

    return hasAppliedToCurrentEvent ? (
        <button className="primary-button primary-button--checked" data-event-status="available" disabled={true}>
            <i className="fas fa-check" aria-hidden={true}></i>
            Applied
        </button>
    ) : (
        <button className="primary-button" data-event-status="available">Apply</button>
    );
};

export default ApplyOptions;