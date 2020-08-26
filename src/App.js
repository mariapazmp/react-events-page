import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './EventCard';

function App() {
    const MOCK_EVENTS = [
        {
            key: "ruth-hired-canada",
            title: "How Ruth got hired and relocated to Canada. Success Cases of Vanhack.",
            media: "<img class='details-link' src='https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/06da3742-d896-4573-87f9-9fccb92f341a.jpg'>",
            type: "Premium Webinar",
            date: "Sat, August 22 // 2020",
            location: "Vancouver, Canada",
            deadline: "August 10th"
        },
        {
            key: "women-mission-2020",
            title: "Virtual Hiring Event for Women. Canada and Europe 2020",
            media: "<img class='details-link' src='https://raw.githubusercontent.com/mariapazmp/events-page/master/img/event-1.png'>",
            type: "Open Webinar",
            date: "Mon, September 21 // 2020",
            location: "ONLINE",
            deadline: "August 9th"
        },
        {
            key: "interview-practice-august",
            title: "Interview-practice class OPEN HOUSE August",
            media: "<img class='details-link' src='https://raw.githubusercontent.com/mariapazmp/events-page/master/img/event-2.png'>",
            type: "Meetup",
            date: "Mon, August 10 // 2020",
            location: "ONLINE",
            deadline: "September 1st"
        },
        {
            key: "interview-practice-august",
            title: "How Ruth got hired and relocated to Canada. Success Cases of Vanhack.",
            media: "<img class='details-link' src='https://raw.githubusercontent.com/mariapazmp/events-page/master/img/event-1.png'>",
            type: "Open Webinar",
            date: "Sat, August 22 // 2020",
            location: "Montreal, Canada",
            deadline: "August 20th"
        },
        {
            key: "acing-code-interview",
            title: "Acing the Code Interview with Tam KBeili",
            media: "<img class='details-link' src='https://raw.githubusercontent.com/mariapazmp/events-page/master/img/event-3.png'>",
            type: "Premium Webinar",
            date: "Fri, August 7 // 2020",
            location: "Berlin, Germany",
            deadline: "August 20th"
        },
        {
            key: "career-front-dev",
            title: "A Successful Career As a Front-end Developer in Europe",
            media: "<img class='details-link' src='https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/7e38624b-ba79-4e1d-9817-d4209edbb685.jpg'>",
            type: "Meetup",
            date: "Sat, August 22 // 2020",
            location: "ONLINE",
            deadline: "August 20th"
        },
        {
            key: "colombia-recruiting-mission-2021",
            title: "<strong>Apply</strong> now to the Colombia Recruiting Mission.",
            media: '<iframe width=\"515\" height=\"290\" src=\"https://www.youtube.com/embed/oYI3qbb6eJs\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>',
            description: "Get interview for top-tech companies from Canada and Europe and be ready to relocate. A weekend long hackathon and recruiting fair to find your company best match. If you are a senior talent do not hesitate on participate.",
            type: "Recruiting Mission",
            date: "Sat, August 22 // 2020",
            location: "Medellin, Colombia",
            deadline: "March 20th - 25th // 2021",
            attendees: 102,
        },
        {
            key: "leap-montreal-2021",
            title: "Vanhack <strong>Leap </strong>Montreal 2021 is on the way.",
            media: "<img class='details-link' src='https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/06da3742-d896-4573-87f9-9fccb92f341a.jpg'>",
            description: "Get interview for top-tech companies from Canada and Europe and be ready to relocate. A weekend long hackathon and recruiting fair to find your company best match. If you are a senior talent do not hesitate on participate.",
            type: "Leap",
            date: "Sat, January 14 // 2021",
            location: "Vancouver, Canada",
            deadline: "December 20th",
            attendees: 323,
        },
        {
            key: "colombia-vanhackathon-2020",
            title: "Start your engines for the Online Vanhackathon",
            media: "<img class='details-link' src='https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/06da3742-d896-4573-87f9-9fccb92f341a.jpg'>",
            description: "Get interview for top-tech companies from Canada and Europe and be ready to relocate. A weekend long hackathon and recruiting fair to find your company best match. If you are a senior talent do not hesitate on participate.",
            type: "Vanhackathon",
            date: "Sat, August 22 // 2020",
            location: "Montreal, Canada",
            deadline: "August 20th",
            attendees: 78,
        },
    ];
  return(
      <header>
          <div className="main-container">
            <div className="header__options">
                <div className="header__logo">
                    <img src="https://vanhack.com/platform/7fefa6b1dc9802203f976c49b68a47bf.svg" alt="Vanhack Logo" />
                </div>
                <nav>
                    <a href="">Find a Job</a>
                    <a href="" className="active details-link">Events</a>
                    <a href="">Premium</a>
                    <a href="">Blog</a>
                </nav>
                <EventCard eventType="Open webinar" />
                <EventCard eventType="Open webinar" />
                <EventCard eventType="Open webinar" />
                <EventCard eventType="Open webinar" />
                <div className="events-container">
        {
            MOCK_EVENTS.map(event => {
                return <EventCard
                eventType={event.type}
                eventDate={event.date}
                eventTitle={event.title}
                />
            })
        }
                </div>
            </div>
            <div className="header__user-account">
                <a href=""><img src="https://vanhackblobstorageprod.blob.core.windows.net/img/User/20e9a5ac-9761-4d8e-a5de-a31a31056857.jpg" alt="user-avatar"/></a>
            </div>
            </div>
        </header>
  );
}

export default App;
