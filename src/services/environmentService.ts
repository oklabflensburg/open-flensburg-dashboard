import { AirQualityDataAPI} from "../types/environment.ts";

const API_URL = "https://www.umweltbundesamt.de/api/air_data/v3/measures/json?"

export const fetchAirQualityData = async (date_from?, date_to?, time_to?, time_from?, station_id?, filepath?): Promise<AirQualityDataAPI[]> => {

    if (process.env.NODE_ENV === "dev") {
            try {
              const response = await fetch(filepath);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return await response.json();
              
            } catch (error) {
              console.error('Failed to fetch airquality file data:', error);
              throw error;
              
            }
    }
    else if (process.env.NODE_ENV === "prod")
        try {
            const response = await fetch(`${API_URL}date_from=${date_from}&time_from=${time_from}&date_to=${date_to}&time_to=${time_to}&station=${station_id}&component=5&scope=2`);
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch airQuality data:', error);
            throw error;
        }
    else {
        return []
    }
  };

