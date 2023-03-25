import {
    PieChart,
    ResponsiveContainer,
    Pie,
    Tooltip
  } from 'recharts'
  
  const PieChartComponent = ({ data }) => {
        const newData = [{name:"full-time",value:data['full-time']},{name:"part-time",value:data['part-time']},{name:"internship",value:data['internship']},{name:"remote",value:data['remote']}];

        const renderCustomizedLabel = ({
            x, y, name,value
          }) => {
            return (
              <text x={x} y={y} fill="black" textAnchor="end" dominantBaseline="central">
                {name} - {value}
              </text>
            );
          };

    return (

    //create a pie chart with the data from the api
        <ResponsiveContainer width='100%' height={300}>
            <PieChart>
                <Pie data={newData} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80} fill='#2cb1bc' label={renderCustomizedLabel} >
                <Tooltip />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        

    )
  }
  
  export default PieChartComponent
  