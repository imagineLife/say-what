import React, { Component } from "react";
import "./Splash.css";
import HeaderSplash from "../../components/HeaderSplash";
import Section from "../../components/Section";
import "./Splash.css";

const Splash = props => {
  const pageHeader = {
    Title: `Say What?!`,
    subTitle: `See data within speeches`
  };

  const sectionsArray = [
    {
      title: `Notice What They're Saying`,
      text: `SayWhat treats speeches like large datasets.`
    },
    {
      title: `Pick from a List of Speeches`,
      text: `Look at the words of Trump, Obama, Bill Clinton, & more!`
    },
    {
      title: "Check It Out!",
      includeBeginForm: true,
      includeBottomSpace: true,
      speechID: props.mappedSpeechID
    }
  ];

  const sections = sectionsArray.map((sec, ind) => {
    return <Section key={ind} {...sec} />;
  });

  return (
    <main role="main" className="splashBack">
      <HeaderSplash title={pageHeader.Title} subTitle={pageHeader.subTitle} />
      <div className="row">{sections}</div>
    </main>
  );
};

export default Splash;
