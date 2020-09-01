import React from 'react';
import HeroBanner from "./components/HeroBanner";
import EventCard from "./components/EventCard";
import { eventData } from "./data";

function Landing () {

    return (
        <main id="events-list">
            <HeroBanner/>
            <div className="starred-events even-container">
                <div className="main-container">
                    {
                        eventData.map(event => {
                            if ((event.type.toLowerCase() === "leap" ||
                                event.type.toLowerCase() === "recruiting mission" ||
                                event.type.toLowerCase() === "vanhackathon")) {
                                return <EventCard
                                    eventMedia={event.media}
                                    eventType={event.type}
                                    eventDate={event.date}
                                    eventTitle={event.title}
                                    eventDescription={event.description}
                                    eventLocation={event.location}
                                    eventDeadline={event.deadline}
                                    eventAttendees={event.attendees}
                                />
                            }
                        })
                    }
                </div>
            </div>

            <div className="regular-events">
                <div className="main-container">
                    {
                        eventData.map(event => {
                            if ((event.type.toLowerCase() !== "leap" ||
                                event.type.toLowerCase() !== "recruiting mission" ||
                                event.type.toLowerCase() !== "vanhackathon")) {
                                return <EventCard
                                    eventKey={event.key}
                                    eventMedia={event.media}
                                    eventType={event.type}
                                    eventDate={event.date}
                                    eventTitle={event.title}
                                    eventDescription={event.description}
                                    eventLocation={event.location}
                                    eventDeadline={event.deadline}
                                    eventAttendees={event.attendees}
                                />
                            }
                        })
                    }
                </div>
            </div>
        </main>
    )}

export default Landing;