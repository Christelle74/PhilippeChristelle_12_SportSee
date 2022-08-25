import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import { userHeaderData } from '../services/providers.js';
import { userActivitiesData } from '../services/providers.js';
import { userPerformancesData } from "../services/providers.js"
import {userSessionsData} from '../services/providers.js'

import Cards from '../components/Cards.jsx';
import SessionsGraph from '../components/SessionsGraph.jsx';
import DailyActivityGraph from '../components/DailyActivityGraph.jsx';
import PerformanceGraph from '../components/PerformanceGraph.jsx';
import ScoreGraph from '../components/ScoreGraph.jsx';

import caloriesIcon from '../assets/icones/caloriesIcon.png';
import carbsIcon from '../assets/icones/carbsIcon.png';
import fatIcon from '../assets/icones/fatIcon.png';
import proteinIcon from '../assets/icones/proteinIcon.png';

import VerticalNavigation from '../components/VerticalNavigation.jsx';


/**
 * Creation of the page with all the charts
 * @returns {JSX.Element} Dashboard component
 */
function Dashboard() {
    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate()

    const [datas, setDatas]=useState({})
    const [activity, setActivity] = useState({})
    const [performance, setPerformance] = useState({})
    const [session, setSession]=useState({})
   const [isLoading, setIsLoading]=useState(true)


    useEffect(()=>{
        (async()=>{
            try{
                const userDatas =  await userHeaderData(id);
                const userActivity = await userActivitiesData(id);
                const userPerformance = await userPerformancesData(id);
                const userSessions = await userSessionsData(id);
                        
                setDatas(userDatas)
                console.log(userDatas)
                setActivity(userActivity)
                console.log(userActivity)
                setPerformance(userPerformance)
                console.log(userPerformance)
                setSession(userSessions)
                console.log(userSessions)
                setIsLoading(false)

            }catch(error) {
                console.log('=====error=====', error)
                navigate ("/Error");
            }
        })
        ()
    }, [navigate, id]);


    return (
        <>
        <VerticalNavigation/>
        <div className='dashboard'>
            {isLoading ? "Loading..." :
            ( 
            <>
            <div className='dashboardHeader'>
                <h1>Bonjour{' '}
                    <span className='userName'>{datas.userFirstName}</span> 
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='dashboardContent'>
                <div className='graphContent'>
                    <div className='dailyActivityGraph'>
                        <DailyActivityGraph activity={activity.sessions}/>
                    </div>
                    <div className='otherGraph'>
                        <SessionsGraph sessions={session.sessionsData}/>
                        <PerformanceGraph performance={performance.performData}/>
                        <ScoreGraph score={datas.score[0].value}/>
                    </div>
                </div>
                <div className='cards'>
                    <Cards image={caloriesIcon} data={datas.keyData.calorieCount} unit="Kcal" text="Calories"/>
                    <Cards image={proteinIcon} data={datas.keyData.proteinCount} unit="g" text="Protéines"/>
                    <Cards image={carbsIcon} data={datas.keyData.lipidCount} unit="g" text="Glucides"/>
                    <Cards image={fatIcon} data={datas.keyData.carbohydrateCount} unit="g" text="Lipides"/>
                </div>
            </div>
            </>    
            )}  
        </div>
        </>
    );
};

export default Dashboard;