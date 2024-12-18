import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import DashboardTile from './DashboardTile';
import EChartsReact from 'echarts-for-react';
import { fetchAirQualityData } from '../services/environmentService';
import { transformAirQualityData } from '../utils/transformData';


interface EnvironmentData {
  trash: {
    categories: string[],
    values: number[],
  }
  airquality: {
    categories: string[],
    values: [number[]]
  }
}


const EnvironmentSection: React.FC = () => {
  const [data, setData] = useState<EnvironmentData | null>(null);
  const [airQualityData, setAirQualityData] = useState<EnvironmentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);


//curl -X GET "https://www.umweltbundesamt.de/api/air_data/v3/stations/json?use=airquality&lang=de&date_from=2024-01-01&date_to=2019-01-01&time_from=9&time_to=9" \

 

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        //const airQualityAPIData = await fetchAirQualityData('2024-01-01', '2024-01-30' , '9', '9', '1549');
        const airQualityDataFile = await fetchAirQualityData('src/assets/fakedata/airqualitydata.json')
        //const transformedAirQualityData = transformAirQualityData(airQualityDataFile);
       // setAirQualityData(transformedAirQualityData);
        console.log("AIR QUALITY")
        console.log(airQualityDataFile)


      } catch (error) {
        console.error('Error loading environment data:', error);

      } finally {
        setIsLoading(false);
      }

    };
    loadData()
  }, [])

  



  const mixOptions = {
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'pie',
        radius: '70%',
        data: data?.trash.categories.map((type, index) => ({
          name: type,
          value: data.trash.values[index],
        })),
      },
    ],
  };

  const lineOptions = {
    tooltip: {
      trigger: 'axis'
    },
    label: data?.airquality.categories,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober']
    },
    yAxis: {
      type: 'value'
    },
    series:  data?.airquality.categories.map((type, index) => ({
        name: type,
        type: 'line',
        stack: 'Total',
        data: data.airquality.values[index]
    })),
  };

  const co2lineOptions = {
    tooltip: {
      trigger: 'axis'
    },
    label: data?.airquality.categories,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober']
    },
    yAxis: {
      type: 'value'
    },
    series:  data?.airquality.categories.map((type, index) => ({
        name: type,
        type: 'line',
        stack: 'Total',
        data: data.airquality.values[index]
    })),
  };

  const airQualityLineOption = {
    tooltip: {
      trigger: 'axis'
    },
    label: data?.airquality.categories,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober']
    },
    yAxis: {
      type: 'value'
    },
    series:  data?.airquality.categories.map((type, index) => ({
        name: type,
        type: 'line',
        stack: 'Total',
        data: data.airquality.values[index]
    })),
  };

  
  
  



  return (
    <>
      <DashboardTile title='Müll' description='Ganz viel zu Umwelt' bgColor='bg-green' fontColor='green-dark' themeIconUrl='public/icons/Environment/environment-icon.webp'>
        <EChartsReact option={mixOptions} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>

      <DashboardTile title='Luftqualität' description='Ganz viel zur Luftqualität' bgColor='bg-green' fontColor='green-dark' themeIconUrl='public/icons/Environment/environment-icon.webp'>
        <EChartsReact option={airQualityLineOption} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>

      <DashboardTile title='Co2 Austoß' description='Ganz viel zur Co2 Ausstoß' bgColor='bg-green' fontColor='green-dark' themeIconUrl='public/icons/Environment/environment-icon.webp'>
        <EChartsReact option={co2lineOptions} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>

      <DashboardTile title='Wasserqualität' description='Ganz viel zu Wasserqualität' bgColor='bg-green' fontColor='green-dark' themeIconUrl='public/icons/Environment/environment-icon.webp'>
        <EChartsReact option={co2lineOptions} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>

    </>
  )

}
export default EnvironmentSection;