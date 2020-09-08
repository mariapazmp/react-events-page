import React from 'react'
import {
    useParams
} from "react-router-dom";
import GetEventInfo from "./utils/getEventInfo";
import ApplyOptions from "./utils/ApplyOptions";

function EventDetails () {
    let { eventKey } = useParams();
    const event = GetEventInfo(eventKey);

    function setEventDetails(eventKey) {

        /*if (hasApplied(eventKey)) {
            disableButtons(document.querySelector("#event-details"));
        }

        setSocialSharingLinks(event.title);*/
    }

    return (
        <main id="event-details" className="event" data-key="">
            <section className="main-container">
                <ul className="breadcrumbs">
                    <li className="breadcrumbs__item"><a href="/" className="details-link">Vanhack Events</a></li>
                    <li className="breadcrumbs__item breadcrumbs__item--current">{event.title}</li>
                </ul>

                <h2 className="event-details__title event__title">{event.title}</h2>
                <div className="event-details__date">{event.date}</div>
                <ApplyOptions eventKey={event.key}/>

                <div className="event-details__body">
                    <article>
                        <div className="event-details__featured-image">{event.media}</div>
                        <div className="event-details__article-body">
                            <p>VanHack is hosting our first <strong>Virtual Hiring Event for Women the week of September
                                21st.</strong> If you are a woman developer and are looking for a job abroad you should
                                apply.</p>

                            <p>We are looking for candidates with:&nbsp;</p>
                            <p>&nbsp;</p>
                            <p><strong>- 4+ years of professional experience</strong></p>
                            <p><strong>- Verified English</strong></p>
                            <p><strong>-</strong> Nice to have: <strong>Good results in the coding
                                challenge&nbsp;</strong></p>
                            <p><strong>***Don't worry you still have until mid of August to complete your
                                profile.</strong></p>
                            <p><strong>Here are some of the top skills companies are looking for right now:</strong></p>
                            <p><strong>- RoR</strong></p>
                            <p><strong>- JavaScript</strong></p>
                            <p><strong>- Python</strong></p>
                            <p><strong>- DevOps</strong></p>
                            <p><strong>- Java</strong></p>
                            <p><strong>- React</strong></p>
                            <p><strong>- Angular</strong></p>
                            <p><strong>- .NET</strong></p>
                            <p><strong>- PHP</strong></p>
                            <p><strong>What to expect once you've applied:&nbsp;</strong></p>
                            <ul>
                                <li>You have until August 19th to complete your VanHack profile</li>
                                <li>We will start the selection process the week of August 24th</li>
                                <li>The selection process will take roughly a month</li>
                                <li>If you receive a rejection it’s not because you haven't a good profile - we will be
                                    picking candidates based on what the companies ask for.
                                </li>
                                <li>Being selected doesn’t guarantee an interview</li>
                                <li>We will forward selected profiles to the participating companies</li>
                                <li>When a company shows interest in your profile we will reach out to you directly</li>
                                <li>Get prepared through VanHack with access to classes twice a week</li>
                                <li>Be ready to start remotely before relocating to Canada or Europe</li>
                                <li>Be open to different cities in Canada and Europe (let us know if you have
                                    questions)
                                </li>
                            </ul>
                            <p><strong>Logistics:</strong></p>
                            <ul>
                                <li>If a company selects your profile we will inform you immediately and will schedule
                                    the interview during that time frame
                                </li>
                                <li>If we haven’t contacted you by September 17th, your profile was unfortunately not
                                    picked by any company
                                </li>
                            </ul>
                        </div>
                    </article>
                    <aside>
                        <div className="event-details__options">
                            <div className="event-details__date"><i className="far fa-calendar-alt"></i><span>{event.date}</span></div>
                            <div className="event-details__event-type">{event.type}</div>
                            <div className="event-details__location"><i className="fas fa-map-marker-alt"></i><span>{event.location}</span>
                            </div>

                            <ApplyOptions eventKey={event.key}/>
                            <div className="social-media-sharing">
                                <h4>Share it with your friends!</h4>
                                <ul>
                                    <li className="sharing-link twitter"><i className="fab fa-twitter-square"></i></li>
                                    <li className="sharing-link facebook"><i className="fab fa-facebook-square"></i>
                                    </li>
                                    <li className="sharing-link linkedin"><i className="fab fa-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    )}

export default EventDetails;