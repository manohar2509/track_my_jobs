import React, { useState } from 'react'

import BarChart from './BarChart'
import AreaChart from './AreaChart'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'
import PieChartComponent from './PieChart'

const PieChartContainer = () => {
  const { jobTypeStats: data } = useAppContext()
  return (
    <Wrapper>
      <h4>Job Type Stats</h4>

      <PieChartComponent data={data} /> 
    </Wrapper>
  )
}

export default PieChartContainer