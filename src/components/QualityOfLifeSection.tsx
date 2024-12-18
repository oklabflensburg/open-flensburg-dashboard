import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import DashboardTile from './DashboardTile';
import { calculateAverage } from '../utils/helper'
import { QualityOfLifeData, Mobility } from '../types/qualityoflife'
import { fetchData } from '../services/lifeService';
import { format, parse, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';




const QualityOfLifeSection: React.FC = () => {
  const [data, setData] = useState<QualityOfLifeData | null>(null);
  const [mobilityData, setMobilityData] = useState<Mobility | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());



  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const response =  await fetchData('src/assets/fakedata/qualityOfLife.json').then((data) => setMobilityData(data))
        
    } catch (error) {
      console.error('Error loading life data:', error);

    } finally {
      setIsLoading(false);
    }


  };
  loadData()
}, [])


  const satisfactionOptions = {
    xAxis: { type: 'category', data: data?.satisfaction.categories },
    yAxis: { type: 'value', max: 10 },
    series: [{
      type: 'bar',
      data: data?.satisfaction.scores,
      itemStyle: {
        color: '#6366f1'
      }
    }],
    tooltip: { trigger: 'axis' }
  };

  const publicSpacesOptions = {
    tooltip: { trigger: 'item' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: data?.publicSpaces.type.map((type, index) => ({
        name: type,
        value: data.publicSpaces.count[index]
      }))
    }]
  };

  const averageSatisfaction = data ? calculateAverage(data.satisfaction.scores) : 0;

  const trafficOption = {
    title: { 
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      /*formatter: function(params: any) {
        const dataIndex = params[0].dataIndex;
        const mode = 
        return 
      }*/
    },
    xAxis: {
      type: 'value',
      max: 100
    },
    yAxis: {
      type: 'category',
      data: mobilityData?.types,
      axisLabel: {
        interval: 0
      }
    },
    series: [
      {
        type: 'bar',
        data: mobilityData?.counts.map((type, index) => ({
          value: mobilityData.counts[index]
        })),
        itemStyle: {
          color: function(params: any) {
            const colors = ['#FD605F', '#FD605F', '#FD605F', '#FD605F', '#FD605F', '#FD605F'];
            return colors[params.dataIndex % colors.length];
          }
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}'
        }
      }
    ]
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      <DashboardTile title="Mobilität in Flensburg" description="Darstellung der verschiedenen genutzten Mobilitätsmöglichkeiten in Flensburg aus den Jahr 2021" bgColor='bg-red' fontColor='red-dark' themeIconUrl='public/icons/Life/life-quality.webp'>
        <ReactECharts option={trafficOption} style={{ height: '100%' }} />
      </DashboardTile>
    </div>
  );
};

export default QualityOfLifeSection;