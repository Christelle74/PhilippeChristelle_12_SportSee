import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';



/**
 * Display user's performances chart 
 * @component
 * @param {Array} performance - array of performances datas
 * @returns {JSX.Element} PerformanceGraph component
 */
const PerformanceGraph = ({performance}) => {
   //console.log(performance)
    return (
        <div className="squareGraph performGraph">
        <ResponsiveContainer   width="100%" aspect={1} >
            <RadarChart margin={{ top: 30, right: 30, bottom: 30, left: 30 }} style={{backgroundColor: "#282D30"}}  data={performance} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:12}}/>
                <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
                <Radar  dataKey="value"  fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
       </div>
    );
};

export default PerformanceGraph;