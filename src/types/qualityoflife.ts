export interface QualityOfLifeData {
    satisfaction: {
      categories: string[];
      scores: number[];
    };
    publicSpaces: {
      type: string[];
      count: number[];
    };
    mobility: {
      types: string[];
      counts: number[];
    };
  }

export interface Mobility {   
      types: string[],
      counts: number[]
}
