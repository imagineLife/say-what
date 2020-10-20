import React, { useState, useEffect } from "react";
import "../../float-grid.css";
import "./SpeechData.css";
import Header from "../../components/Header";
import ResizingSection from "../../components/ResizingSection";
// const Image = require('../../imgs/trump.jpg');
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const SpeechData = props => {
  let urlSplit = window.location.href.split("/");
  const [loading, setLoading] = useState(true);
  const [urlSpeechID, setUrlSpeechID] = useState(urlSplit[urlSplit.length - 1]);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const [state, setState] = useState({});

  useEffect(() => {
    loadStats();

    let myH = 0;
    document.querySelectorAll('section[ class *= "col-" ]').forEach(itm => {
      myH = Math.max(myH, itm.offsetHeight);
    });

    setSectionHeight(myH);
  }, []);

  const loadStats = () => {
    setLoading(true);

    //	send & return speechstats
    //	set speechstats to containers state
    return fetch(
      `${window.backendPath}/api/speeches/${
        urlSpeechID !== "default" ? urlSpeechID : ""
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + localStorage.getItem("localStorageAuthToken")
        }
      }
    )
      .then(res => {
        if (res.status == 401 || !res.ok) {
          console.log("here");
          setRedirect(true);
        } else {
          res.json().then(stats => {
            setState({
              Audience: stats.Audience,
              Date: stats.Date,
              Orator: stats.Orator,
              bigWords: stats.bigWords,
              id: stats.id,
              mostUsedWords: stats.mostUsedWords,
              numberOfWords: stats.numberOfWords,
              speechTextLink: stats.speechTextLink,
              imageFile: stats.imageFile,
              eventOverview: stats.eventOverview,
              title: stats.title,
              wordsBySize: stats.wordsBySize,
              sentences: stats.sentences
            });
            setLoading(false);
          });
        }
      })
      .catch(err => {
        console.log("error!");
        console.log(err);
        setError("Could not load board"), setLoading(false);
      });
  };

  const parseDate = dateToParse => {
    let usableDate = new Date(dateToParse);

    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let day =
      usableDate.getDate() < 10
        ? "0" + usableDate.getDate()
        : usableDate.getDate();
    let month =
      usableDate.getMonth() + 1 < 10
        ? monthNames[usableDate.getMonth() + 1]
        : monthNames[usableDate.getMonth() + 1];
    let year =
      usableDate.getFullYear() < 10
        ? "0" + usableDate.getFullYear()
        : usableDate.getFullYear();
    return month + " " + day + ", " + year;
  };
  if (
    (localStorage.getItem("localStorageAuthToken") === null &&
      urlSpeechID !== "default") ||
    redirect == true
  ) {
    //no authToken & urlSpeechID is not-default
    return <Redirect to="/login" />;
  } else {
    //WHEN loading...
    if (loading) {
      return (
        <main role="main" className="splashBack">
          <p>Processing Speech Stats...</p>
        </main>
      );

      //WHEN not loading
    } else {
      const pageHeader = {
        Title: state.title,
        image: Image,
        imageFile: state.imageFile
      };

      const sectionsArray = [
        {
          introInfo: {
            Title: "Quick Stats",
            Orator: state.Orator,
            Date: parseDate(state.Date),
            Audience: state.Audience,
            "Event Overview": state.eventOverview
          },
          colSize: 4
        },
        {
          title: `Words By Size`,
          wordsBySize: state.wordsBySize,
          includeWordBubble: true,
          colSize: 8
        },
        {
          title: "How Many Words",
          numberOfWords: state.numberOfWords,
          colSize: 8
        },
        {
          title: `12 Longest Words`,
          bigWords: state.bigWords,
          colSize: 4
        },
        {
          title: `Speech Text`,
          includeSpeechTextForm: true,
          includeBottomSpace: true,
          speechID: state.id,
          speechTitle: state.title,
          colSize: 3
        },
        {
          title: `Common Words`,
          mostUsedWords: state.mostUsedWords,
          includeBarChart: true,
          colSize: 9
        },
        {
          title: `Words Per Sentence`,
          sentences: state.sentences,
          chart: "line",
          colSize: 12
        }
      ];

      //converts the above sectionsArray into a 'sections' var for returning
      const sections = sectionsArray.map((sec, ind) => {
        sec.calcHeight = state.sectionHeight;
        // sec.canLoadHeight = state.canLoadHeight;
        return <ResizingSection key={ind} {...sec} />;
      });

      return (
        <main role="main" className="splashBack">
          <Header
            title={pageHeader.Title}
            subTitle={pageHeader.text}
            imageFile={pageHeader.imageFile}
          />

          <div className="row">
            {sections[0]}
            {sections[1]}
          </div>

          <div className="row">
            {sections[2]}
            {sections[3]}
          </div>

          <div className="row">
            {sections[4]}
            {sections[5]}
          </div>

          <div className="row">{sections[6]}</div>
        </main>
      );
    }
  }
};

const mapStateToProps = state => ({
  mappedSpeechID: state._root.entries["0"][1]
});

//$FlowReduxBug
export default connect(mapStateToProps)(SpeechData);
