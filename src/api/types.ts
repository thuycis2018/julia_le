export interface Location {
    address1: string;
    city: string;
    state: string;
    zip_code: string;
}

export interface Hour {
    start: string;
    end: string;
    day: number;
}

export interface Category {
    title: string;
}

export interface Business {
    name: string;
    rating: number;
    location: Location;
    phone: string;
    website: string;
    review_count: number;
    hours: {
        open: Hour[];
    };
    categories: Category[];
}

export interface YelpResponse {
    search: {
        business: Business[];
    };
}

// REPO
export interface Repository {
    name: string;
    owner: {
      login: string;
    };
    url: string;
    description: string;
    stargazerCount: number;
    forkCount: number;
  }
  
  export interface SearchResponse {
    search: {
      edges: {
        node: Repository;
      }[];
    };
  }
  
  export interface SearchProps {
    query: string;
    first: number;
  }

// OTHERS
export interface Place {
    id: number;
    name: string;
    longitude: number;
    latitude: number;
}

export type StockSymbol = 'AAPL' | 'MSFT' | 'GOOG' | 'AMZN';

export interface StockData {
    x: string[];
    y: number[];
}

export interface Word {
    text: string;
    value: number;
}
  