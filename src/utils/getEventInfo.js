import React from 'react';
import {eventData} from "../data";

const GetEventInfo = (eventKey) => {
    return(
        eventData.find(element => element.key === eventKey)
    )
};

export default GetEventInfo;