import { Mobility } from '../types/qualityoflife'
import { Event } from  '../types/event'

export const fetchData = async (filepath): Promise<Mobility> => {
    try {
        const response = await fetch(filepath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Failed to fetch Mobility data:', error);
        throw error;
      }
  };

  export const fetchEventData = async (filepath): Promise<Event[]> => {
    try {
        const response = await fetch(filepath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Failed to fetch Mobility data:', error);
        throw error;
      }
  };