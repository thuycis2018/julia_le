// Define the type for each word in the word cloud
interface WordCloudItem {
    text: string;
    value: number;
  }
  
  // Function to generate word cloud data from a given text, with the ability to exclude certain words
  export function generateWordCloudData(text: string, excludeWords: string[] = []): WordCloudItem[] {
    // Step 1: Preprocess the text
    const wordsArray: string[] = text
      .toLowerCase()                     // Convert text to lowercase
      .replace(/[^\w\s]/g, '')           // Remove punctuation
      .split(/\s+/);                     // Split into words by spaces
  
    // Step 2: Filter out the words to be excluded
    const filteredWordsArray: string[] = wordsArray.filter(word => !excludeWords.includes(word));
  
    // Step 3: Calculate word frequencies
    const wordFrequencies: Record<string, number> = filteredWordsArray.reduce(
      (acc: Record<string, number>, word: string) => {
        if (word) {
          acc[word] = (acc[word] || 0) + 1;
        }
        return acc;
      },
      {}
    );
  
    // Step 4: Generate word cloud data
    const wordCloudData: WordCloudItem[] = Object.keys(wordFrequencies).map(
      (word: string) => ({
        text: word,
        value: wordFrequencies[word],
      })
    );
  
    return wordCloudData;
  }
  