import { SolarAPIData, WindAPIData, BiomassAPIData, EnergyMix, NuclearAPIData, CompustionAPIData, WaterAPIData } from "../types/energy";
import { calculateSum } from "./helper";

const energySources = new Map<string, number>();
let totalCapacity = 0;

export const transformSolarData = (data: SolarAPIData[]): number[] => {
    //unit kw
    const solarUnitsNett = new Array<number>;
    let currentSourceCapacity = 0;
  
    data.forEach(entry => {
      solarUnitsNett.push(entry.net_nominal_capacity)
    })

    currentSourceCapacity = calculateSum(solarUnitsNett)

    data.forEach(entry => {
      energySources.get(entry.energy_source) || 0;
      energySources.set(entry.energy_source, currentSourceCapacity);
    })

   

    return solarUnitsNett
      
  };

  export const transformWindData = (data: WindAPIData[]): number[] => {
      //unit kw
    const windUnitsNett = new Array<number>;
    let currentSourceCapacity = 0;
  
    data.forEach(entry => {

      windUnitsNett.push(entry.net_nominal_capacity)
    })

    currentSourceCapacity = calculateSum(windUnitsNett)

    data.forEach(entry => {
      energySources.get(entry.energy_source) || 0;
      energySources.set(entry.energy_source, currentSourceCapacity);
    })
    


    return windUnitsNett
      
  };

  export const transformBiomassData = (data: BiomassAPIData[]): number[] => {
      //unit kw
    const biomassUnitsNett = new Array<number>;
    let currentSourceCapacity = 0;
  
    data.forEach(entry => {
      biomassUnitsNett.push(entry.net_nominal_capacity)
    })

    currentSourceCapacity = calculateSum(biomassUnitsNett)

    data.forEach(entry => {
      energySources.get(entry.energy_source) || 0;
      energySources.set(entry.energy_source, currentSourceCapacity);
    })

    return biomassUnitsNett
      
  };

  export const transformNuclearData = (data: NuclearAPIData[]): number[] => {
    const nuclearUnitsNett = new Array<number>;
    let currentSourceCapacity = 0;
  
    data.forEach(entry => {
      nuclearUnitsNett.push(entry.net_nominal_capacity)
    })

    currentSourceCapacity = calculateSum(nuclearUnitsNett)

    data.forEach(entry => {
      energySources.get(entry.energy_source) || 0;
      energySources.set(entry.energy_source, currentSourceCapacity);
    })

    return nuclearUnitsNett
      
  };

  export const transformCombustionData = (data: CompustionAPIData[]): number[] => {
      //unit kw
    const combustionUnitsNett = new Array<number>;
    let currentSourceCapacity = 0;
  
    data.forEach(entry => {
      combustionUnitsNett.push(entry.net_nominal_capacity)
    })

    currentSourceCapacity = calculateSum(combustionUnitsNett)

    data.forEach(entry => {
      energySources.get(entry.energy_source) || 0;
      energySources.set(entry.energy_source, currentSourceCapacity);
    })

    return combustionUnitsNett
      
  };


  export const transformWaterData = (data: WaterAPIData[]): number[] => {
    //unit kw
  const combustionUnitsNett = new Array<number>;
  let currentSourceCapacity = 0;

  data.forEach(entry => {
    combustionUnitsNett.push(entry.net_nominal_capacity)
  })

  currentSourceCapacity = calculateSum(combustionUnitsNett)

  data.forEach(entry => {
    energySources.get(entry.energy_source) || 0;
    energySources.set(entry.energy_source, currentSourceCapacity);
  })

  return combustionUnitsNett
    
};

  export const getEnergyMix = (): EnergyMix => {

    let overallCapacitiy = new Array<number>;

    Array.from(energySources.entries()).map(([source, capacity]) => (
      overallCapacitiy.push(capacity)
    ));

    totalCapacity = calculateSum(overallCapacitiy);


    // calculate percentage
    const energyMixData = Array.from(energySources.entries()).map(([source, capacity]) => ({
      name: source,
      value: Number(((capacity /totalCapacity) * 100).toFixed(1))
    }));



     return {
      energyMix: {
        types: energyMixData.map(item => item.name),
        percentage: energyMixData.map(item => item.value)
      },
     }

  }



