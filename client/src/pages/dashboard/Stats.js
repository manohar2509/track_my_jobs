import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'
import PieChartContainer from '../../components/PieChartContainer';

const Stats = () => {
  const { showStats, isLoading,jobTypeStats, monthlyApplications } = useAppContext();


  useEffect(() => {
    showStats()
    // eslint-disable-next-line

  }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
      <PieChartContainer/>
    </>
  )
}

export default Stats
