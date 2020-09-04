import React from 'react';
import './App.css';
import { eventData, userData } from "./data";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Landing from "./Landing";
import EventDetails from "./EventDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    function disableButtons(eventNode) {
        const applyButtons = eventNode.querySelectorAll(".primary-button");

        applyButtons.forEach(function (button) {
            button.classList.add("primary-button--checked");
            button.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>Applied';
            button.setAttribute("disabled", true);
        })
    }

    function getEventObject(eventKey) {
        return eventData.find(element => element.key === eventKey);
    }

    function hasApplied(eventKey) {
        if(userData.appliedEvents.indexOf(eventKey) > -1) {
            return true;
        }
    }

    function socialWindow(url) {
        // eslint-disable-next-line no-restricted-globals
        const left = (screen.width - 570) / 2;
        // eslint-disable-next-line no-restricted-globals
        const top = (screen.height - 570) / 2;
        const params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
        window.open(url,"NewWindow",params);
    }

    function setSocialSharingLinks(linkDescription) {
        const pageUrl = encodeURIComponent("https://vanhack.com/platform/#/events");
        const tweet = encodeURIComponent("I just applied to "+linkDescription+" at Vanhack.com. Check more events!");

        document.querySelector(".sharing-link.twitter").addEventListener('click', e => {
            const url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
            socialWindow(url);
        });

        document.querySelector(".sharing-link.facebook").addEventListener('click', e => {
            const url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
            socialWindow(url);
        });

        document.querySelector(".sharing-link.linkedin").addEventListener('click', e => {
            const url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
            socialWindow(url);
        });
    }

    return(
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/event-:eventKey" component={EventDetails}/>
              </Switch>
              <Footer/>
          </div>
      </Router>
    );
}

export default App;
