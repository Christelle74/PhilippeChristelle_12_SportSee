import {
  GetMainData,
  GetUserAverageSessions,
  GetUserActivities,
  GetUserPerformance,
} from './fetch.js'
import MainDataFormater from './DataFormaters/MainDataFormater.js'
import UserSessionsFormater from './DataFormaters/UserSessionsFormater.js'
import UserActivitiesFormater from './DataFormaters/UserActivitiesFormater.js'
import UserPerformancesFormater from './DataFormaters/UserPerformancesFormater.js'

/**
 * It takes a userId, gets some data from an API, formats it, and returns it.
 * @param mockedDatas - boolean
 * @param id - the id of the user
 * @returns An array of objects with user main datas
 */
export async function userHeaderData(mockedDatas, id) {
  let mainDatas = {}

  mockedDatas
    ? (mainDatas = await GetMainData(true, id))
    : (mainDatas = await GetMainData(false, id))

  //console.log(mainDatas)
  const userData = new MainDataFormater(mainDatas)
  //console.log(userData)
  return userData
}

/**
 * @param mockedDatas - boolean
 * @param id - the id of the user
 * @returns An array of objects with user sessions datas
 */
export async function userSessionsData(mockedDatas, id) {
  let sessionsDatas = {}

  mockedDatas
    ? (sessionsDatas = await GetUserAverageSessions(true, id))
    : (sessionsDatas = await GetUserAverageSessions(false, id))

  //console.log(sessionsDatas)
  const getSessions = new UserSessionsFormater(sessionsDatas)
  //console.log(getSessions)
  return getSessions
}

/**
 * @param mockedDatas - boolean
 * @param id - the id of the user
 * @returns An array of objects with user activity datas
 */
export async function userActivitiesData(mockedDatas, id) {
  let activitiesDatas = {}

  mockedDatas
    ? (activitiesDatas = await GetUserActivities(true, id))
    : (activitiesDatas = await GetUserActivities(false, id))

  //console.log(activitiesDatas)
  const getActivities = new UserActivitiesFormater(activitiesDatas)
  //console.log(getActivities)
  return getActivities
}

/**
 * @param mockedDatas - boolean
 * @param id - the id of the user
 * @returns An array of objects with user performances datas
 */
export async function userPerformancesData(mockedDatas, id) {
  let performancesDatas = {}

  mockedDatas
    ? (performancesDatas = await GetUserPerformance(true, id))
    : (performancesDatas = await GetUserPerformance(false, id))

  //console.log(performancesDatas)
  const getPerformances = new UserPerformancesFormater(performancesDatas)
  //console.log(getPerformances)
  return getPerformances
}
