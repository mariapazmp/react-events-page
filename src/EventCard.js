import React from 'react';


const EventCard = (props) => {
    return(
        <div class="event__media">event.media</div>
        <div class="event__info">
            <span class="event__type">{props.eventType}</span>
            <span class="event__date">'+event.date+'</span>
            <h2 class="event__title">'+event.title+'</h2>
            <span class="event__description">'+event.description+'</span>\n'+
            <span class="event__location"><i class="fas fa-map-marker-alt"></i>'+event.location+'</span>

            <div class="event__options">
                <span class="event__deadline"><b>Deadline: </b>'+event.deadline+'</span>
                <span class="event__attendees"><i class="fas fa-map-marker-alt"></i>'+event.attendees+' people attending</span>
                <button class="secondary-button details-link">Learn More</button>
                <button class="primary-button" data-event-status="available">Apply</button>
            </div>
        </div>
    );
}

export default EventCard