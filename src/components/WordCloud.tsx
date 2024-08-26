import React from "react";
import WordCloud from "react-wordcloud";
import { Word } from "../api/types/word";
import { generateWordCloudData} from "./GenerateWordCloud";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {TEXT} from "./constants";

const text = TEXT;
const excludeWords = ['she', 'is', 'for', 'the', 'to', 'have', 'are', 'we', 'who', 'without', 'every', 'also', 'in', 'her'];
const words: Word[] = generateWordCloudData(text, excludeWords);

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [10, 60] as [number, number],
};

const WCloud: React.FC = () => {
  const wordCloudStyle: React.CSSProperties = {
    width: '90%',
    height: 'auto',
    maxWidth: '600px',
    border: '1px solid #666',
    margin: 'auto'
  };

const h2Style: React.CSSProperties = {
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
};

  return (
    <div style={wordCloudStyle}>
      <h2 style={h2Style}><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> Using react-wordcloud to generate Word Cloud from provided text</h2>
      <WordCloud words={words} options={options} />
    </div>
  );
};

export default WCloud;
