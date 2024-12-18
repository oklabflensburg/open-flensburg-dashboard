//import { EnergyData } from '../types/energy';

import { NuclearAPIData, Solar, SolarAPIData, WindAPIData, CompustionAPIData, PowerAPIData} from "../types/energy";
import { transformSolarData } from "../utils/transformData";

const API_URL = 'https://api.oklabflensburg.de'; //import.meta.env.VITE_API_URL ||

//flensburg municipal key = 01001000

  export const fetchEnergyData = async (energy_unit, municipality_key): Promise<CompustionAPIData[]> => {

    try {
        const response = await fetch(`${API_URL}/energy/v1/unit/${energy_unit}/key?municipality_key=${municipality_key}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Failed to fetch ${energy_unit} data:`, error);
        throw error;
      }
  };

  export const fetchDataPower = async (filepath): Promise<PowerAPIData> => {
    //'https://api.energy-charts.info/public_power?country=de'
    try {
      const response = await fetch(filepath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
      
    } catch (error) {
      console.error('Failed to fetch energy power data:', error);
      throw error;
      
    }
  }