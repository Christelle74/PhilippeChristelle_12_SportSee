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
    //console.log(id)
    const navigate = useNavigate()
    
    const [datas, setDatas]=useState({})
    const [isLoading, setIsLoading]=useState(true)
    
    useEffect(()=>{
        (async()=>{
            try{
                const userDatas =  await userHeaderData(id);
                const userActivity = await userActivitiesData(id);
                const userPerformance = await userPerformancesData(id);
                const userSessions = await userSessionsData(id);
               
                setDatas({userDatas, userActivity, userPerformance, userSessions})
                setIsLoading(false)
                // if((!userDatas.id)===id){return navigate ("/Error")}
                // console.log(userDatas.id)
                // console.log(id)

            }catch(error) {
                console.log('=====error=====', error)
                navigate ("/Error")
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
                    <span className='userName'>{datas.userDatas.userFirstName}</span> 
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='dashboardContent'>
                <div className='graphContent'>
                    <div className='dailyActivityGraph'>
                        <DailyActivityGraph activity={datas.userActivity.sessions}/>
                    </div>
                    <div className='otherGraph'>
                        <SessionsGraph sessions={datas.userSessions.sessionsData}/>
                        <PerformanceGraph performance={datas.userPerformance.performData}/>
                        <ScoreGraph score={datas.userDatas.score[0].value}/>
                    </div>
                </div>
                <div className='cards'>
                    <Cards image={caloriesIcon} data={datas.userDatas.keyData.calorieCount} unit="Kcal" text="Calories"/>
                    <Cards image={proteinIcon} data={datas.userDatas.keyData.proteinCount} unit="g" text="Protéines"/>
                    <Cards image={carbsIcon} data={datas.userDatas.keyData.lipidCount} unit="g" text="Glucides"/>
                    <Cards image={fatIcon} data={datas.userDatas.keyData.carbohydrateCount} unit="g" text="Lipides"/>
                </div>
            </div>
            </>    
            )}  
        </div>
        </>
    );
};

export default Dashboard;