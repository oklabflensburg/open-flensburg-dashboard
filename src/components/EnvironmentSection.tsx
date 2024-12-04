import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import DashboardTile from './DashboardTile';
import EChartsReact from 'echarts-for-react';


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


  useEffect(() => {
   fetch('/src/assets/fakedata/environment.json')
      .then((response) => response.json())
      .then((data) => setData(data));
 
  }, []);



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
  
  



  return (
    <>
      <DashboardTile title='Müll' description='Ganz viel zu Umwelt' bgColor='bg-green' fontColor='green-dark' themeIconUrl='public/icons/Environment/environment-icon.webp'>
        <EChartsReact option={mixOptions} style={{ height: '100%' }}></EChartsReact>
      </DashboardTile>

      <DashboardTile title='Luftqualität' description='Ganz viel zur Luftqualität' bgColor='bg-green' fontColor='green-dark' themeIconUrl='public/icons/Environment/environment-icon.webp'>
        <EChartsReact option={lineOptions} style={{ height: '100%' }}></EChartsReact>
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