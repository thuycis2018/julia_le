declare module 'wordcloud' {
    type WordCloudOptions = {
      list: Array<{ text: string; weight: number }>;
      // Add other options if necessary
    };
  
    function WordCloud(canvas: HTMLCanvasElement, options: WordCloudOptions): void;
  
    export default WordCloud;
  }
  