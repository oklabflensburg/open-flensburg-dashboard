import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import DashboardTile from './DashboardTile';
import EChartsReact from 'echarts-for-react';
import { fetchEnergyData, fetchDataPower } from '../services/energyService';
import { transformSolarData, transformWindData, getEnergyMix, transformCombustionData, transformBiomassData, transformNuclearData } from '../utils/transformData';
import { calculateAverage, calculateSum } from '../utils/helper'
import { EnergyMix, PowerAPIData, PowerData } from '../types/energy';
import { fetchEventData, fetchData } from '../services/lifeService';


interface EnergyData {
  monthlyConsumption: {
    labels: string[];
    data: number[];
  };
  energyMix: {
    types: string[];
    percentage: number[];
  };
}


const AVERAGE_HOUSEHOLD_CONSUMPTION = 3500; // kWh per year
const WIND_TURBINE_CAPACITY_FACTOR = 0.35; // Average capacity factor for wind turbines
const SOLAR_CAPACITY_FACTOR = 0.15; // Average capacity factor for solar panels
const HOURS_PER_YEAR = 8760;


const calculateHouseholdSupply = (capacityValues: number[], capacityFactor: number): number => {
   //calculate total windcapacity
   const totalCapacity = calculateSum(capacityValues);

  // Convert MW to kW (1 MW = 1000 kW)
  const capacityInKW = totalCapacity * 1000;
  
  // Calculate annual energy production in kWh
  // Energy = Power * Time * Capacity Factor
  const annualEnergyProduction = capacityInKW * HOURS_PER_YEAR * capacityFactor;
  
  // Calculate number of households that can be supplied
  return Math.floor(annualEnergyProduction / AVERAGE_HOUSEHOLD_CONSUMPTION);
};


const EnergySection: React.FC = () => {
  const [data, setData] = useState<EnergyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [energyMixData, setEnergyMixData] = useState<EnergyMix | null>(null);
  const [windHouseholdSupply, setwindHouseholdSupply] = useState<number | null>(null);
  const [solarHouseholdSupply, setSolarHouseholdSupply] = useState<number | null>(null);
  const [powerData, setPowerData] = useState<PowerData[] | null>(null);






  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const powerResponse =  await fetchDataPower('src/assets/fakedata/power.json');
        const preparedPowerData = preparePowerData(powerResponse);
        const solarApiData = await fetchEnergyData('solar', '01001000');
        const transformedSolarData = transformSolarData(solarApiData);
        const windApiData = await fetchEnergyData('wind', '01001000');
        const transformedWindData = transformWindData(windApiData);
        const biomassApiData = await fetchEnergyData('biomass', '01001000');
        const transformedBiomassData = transformBiomassData(biomassApiData);
        const combustionApiData = await fetchEnergyData('combustion', '01001000');
        const transformedCombustionData = transformCombustionData(combustionApiData);
        const energyMix = getEnergyMix();
        const windHouseHoldSupply = calculateHouseholdSupply(transformedWindData, WIND_TURBINE_CAPACITY_FACTOR)
        const solarHouseHoldSupply = calculateHouseholdSupply(transformedSolarData, SOLAR_CAPACITY_FACTOR)
        setwindHouseholdSupply(windHouseHoldSupply);
        setSolarHouseholdSupply(solarHouseHoldSupply);
        setPowerData(preparedPowerData);
        setEnergyMixData(energyMix);

        

      } catch (error) {
        console.error('Error loading energy data:', error);

      } finally {
        setIsLoading(false);
      }

    };
    loadData()
  }, [])


  const preparePowerData = (data) => {
    return data.production_types.map((power) => ({
        name: power.name,
        data: power.data
    }));
};


const consumptionOptions = {
  tooltip: {
    trigger: 'axis'
  },
  label: "",
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: powerData?.map((name, index) => ({ 
      name
    }))
  },
  yAxis: {
    type: 'value'
  },
  series:  powerData?.map((power, index) => ({
      name: power.name,
      type: 'line',
      stack: 'Total',
      data: power.data
  })),
};


  const mixOptions = {
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'treemap',
        breadcrumb: {
          show: false
        },
        itemStyle: { gapWidth: 4 },
        roam: false,
        nodeClick: undefined,
        levels: [
          {
            itemStyle: {
              color: '#f28443'
            },
          },
        ],
        data: energyMixData?.energyMix.types.map((type, index) => ({
          name: type,
          value: energyMixData.energyMix.percentage[index],
        })),
        label: {
          position: ['0%', '100%'],
          offset: [0 + 8, -70 - 8],
          distance: 10,
          formatter(params) {
            return params.name + ' \n' + Math.round(params.value).toFixed(0) + '%'
          }
        }
      },

    ],
  };

 
  return (
    <>
      <DashboardTile title='Stromerzeugung' description='Ganz viel zu Energie' bgColor='bg-orange' fontColor='orange-dark' themeIconUrl='public/icons/Energy/energy-icon.webp'>
        <EChartsReact option={mixOptions} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>

      <DashboardTile title={`Insgesamt können ${windHouseholdSupply?.toLocaleString()} Haushalte mit Windenergie versorgt werden`} description='Ganz viel zu Energie' bgColor='bg-orange' fontColor='orange-dark' themeIconUrl='public/icons/Energy/energy-icon.webp' />
      <DashboardTile title={`Insgesamt können ${solarHouseholdSupply?.toLocaleString()} Haushalte mit Solarenergie versorgt werden`} description='Ganz viel zu Energie' bgColor='bg-orange' fontColor='orange-dark' themeIconUrl='public/icons/Energy/energy-icon.webp' />
  
      <DashboardTile title='Gesamte Stromerzeugung nach Art in gesamt Deutschland' description='Ganz viel zu Energie' bgColor='bg-orange' fontColor='orange-dark' themeIconUrl='public/icons/Energy/energy-icon.webp'>
        <EChartsReact option={consumptionOptions} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>
    
    </>
  )

}
export default EnergySection;


 /*const solarApiData = await fetchSolarData();
       
        //const average = calculateAverage(transformedSolarData)
       // const windApiData = await fetchWindData();
       // const transformedWindData = transformWindData(windApiData);
        const biomassApiData = await fetchBiomassData();
        const transformedBiomassData = transformBiomassData(biomassApiData);
        const nuclearApiData = await fetchNuclearData();
        const transformedNuclearData = transformNuclearData(nuclearApiData);
        const combustionApiData = await fetchCombustionData();
        const transformedCombustionData = transformCombustionData(combustionApiData);*/