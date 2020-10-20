import React, { useState, useEffect } from "react";
import "./SpeechText.css";
import Section from "../../components/Section";
import { getSpeechTextAxn } from "./state/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SpeechText = props => {
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  let [speechText, setSpeechText] = useState(null);
  let [speechTitle, setSpeechTitle] = useState(null);
  let [redirect, setRedirect] = useState(false);

  useEffect(() => {
    loadSpeechText();
  }, []);

  const loadSpeechText = () => {
    console.log("Loading speech text...");
    setError(null), setLoading(true);
    // speechText : this.props.runSpeechTextAction(this.props.speechID)

    //	Parsing the speechID from URL

    let fetchURL, urlText, lastPartOfURL;
    urlText = window.location.href;
    lastPartOfURL = urlText.split("/").pop();

    // setting up the fetch url

    lastPartOfURL === "5a1ad99f978ca2681f42df12"
      ? (fetchURL = `${window.backendPath}/api/speeches/text/default`)
      : (fetchURL = `${window.backendPath}/api/speeches/text/${lastPartOfURL}`);

    //	send & return speechText
    //	set speechText to container's state

    return fetch(fetchURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("localStorageAuthToken")
      }
    })
      .then(res => {
        if (res.status == 401) {
          console.log("redirecting...");
          setRedirect(true);
        }

        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(({ text, title }) => {
        setSpeechText(text), setSpeechTitle(title), setLoading(false);
      })
      .catch(err => setError("Could not load SpeechText"), setLoading(false));
  };

  //WHEN loading...
  if (loading) {
    return (
      <main role="main" className="splashBack">
        <p>Processing Speech Text...</p>
      </main>
    );

    //WHEN not loading
  } else {
    if (redirect === true) {
      return <Redirect to="/login" />;
    }

    const sectionsArray = [
      {
        title: speechTitle,
        sectionSpeechID: props.speechID,
        // img: `[ Image of Orator behind Title ]`,
        text: speechText,
        includeBottomSpace: true
      }
    ];

    const sections = sectionsArray.map((sec, ind) => {
      return <Section key={ind} {...sec} />;
    });

    return (
      <main role="main" className="splashBack">
        {sections}
      </main>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  runSpeechTextAction: speechId => {
    getSpeechTextAxn(speechId, dispatch);
  }
});

const mapStateToProps = state => ({
  speechID: state._root.entries["0"][1]
});

//$FlowReduxBug
export { SpeechText };
export default connect(mapStateToProps, mapDispatchToProps)(SpeechText);
