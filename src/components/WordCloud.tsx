import React from "react";
import WordCloud from "react-wordcloud";
import { Word } from "../api/types";
import { generateWordCloudData} from "./GenerateWordCloud";
import {TEXT} from "./constants";

const text = TEXT;
const excludeWords = ['and', 'she', 'is', 'for', 'the', 'to', 'have', 'are', 'we', 'who', 'without', 'every', 'also', 'in', 'her'];
const words: Word[] = generateWordCloudData(text, excludeWords);

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [18, 80] as [number, number],
};

const WCloud: React.FC = () => {
  return (    
      <WordCloud words={words} options={options} />
  );
};

export default WCloud;
