import React from 'react';


const EventCard = (props) => {
    return(
        <div className="event">
            <div className="event__media">{props.eventMedia}</div>
            <div className="event__info">
                <span className="event__type">{props.eventType}</span>
                <span className="event__date">{props.eventDate}</span>
                <h2 className="event__title">{props.eventTitle}</h2>
                <span className="event__description">{props.eventDescription}</span>
                <span className="event__location"><i className="fas fa-map-marker-alt"></i>{props.eventLocation}</span>
    
                <div className="event__options">
                    <span className="event__deadline"><b>Deadline: </b>{props.eventDeadline}</span>
                    <span className="event__attendees"><i className="fas fa-map-marker-alt"></i>{props.eventAttendees} people attending</span>
                    <button className="secondary-button details-link">Learn More</button>
                    <button className="primary-button" data-event-status="available">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default EventCard;