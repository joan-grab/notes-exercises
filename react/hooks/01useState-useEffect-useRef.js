// useState

import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [inputHistory, setInputHistory] = useState([]);
  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setInputHistory([...inputHistory, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {inputHistory.map((rec) => {
          return <div>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;

// useRef

import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-187.jpg"
        secondaryImg="/static/speakers/Speaker-187.jpg"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/bw/Speaker-1124.jpg"
        secondaryImg="/static/speakers/Speaker-1124.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;

import React, { useRef } from 'react';

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    ></img>
  );
};

export default ImageTogglerOnMouseOver;

//useEffect

import React, { useEffect, useState } from 'react';
import ImageTogglerOnScroll from '../src/ImageTogglerOnScroll';

const ImageChangeOnScroll = () => {
  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseEventCnt, setMouseEventCnt] = useState(0);

  useEffect(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: ${currentSpeakerId}`);
  }, [currentSpeakerId]);

  return (
    <div>
      <span>mouseEventCnt: {mouseEventCnt}</span>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div
            key={speakerId}
            onMouseOver={() => {
              setCurrentSpeakerId(speakerId);
              setMouseEventCnt(mouseEventCnt + 1);
              console.log(`onMouseOver: ${speakerId}`);
            }}
          >
            <ImageTogglerOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;

// component

import React, { useEffect, useRef, useState } from 'react';

const ImageTogglerOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return (
    <img
      src={
        isLoading
          ? 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
          : inView
          ? secondaryImg
          : primaryImg
      }
      alt=""
      ref={imageRef}
      width="400"
      height="400"

    ></img>
  );
};

export default ImageTogglerOnScroll;

