export interface Events {   
    monthyear: {
        name: string,
        email: string,
        role: string,
        imageUrl: string,
        lastSeen: string,
        lastSeenDateTime?: string
  }
}
export interface Event {
    date: string;
    name: string;
    description: number;
    location: string;
    timeStart: string;
    timeEnd: string;
    imageUrl: string;
  }
  
 export  interface EventListProps {
    events: Event[];
  }