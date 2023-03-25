import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import {  FaCalendarCheck } from 'react-icons/fa'
import { MdPendingActions } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: 'PENDING APPLICATIONS',
      count: stats.pending || 0,
      icon: <MdPendingActions />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'INTERVIEWS SCHEDULED',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'JOBS DECLINED',
      count: stats.declined || 0,
      icon: <ImCross />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
