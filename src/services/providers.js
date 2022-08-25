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
 * @param id - the id of the user
 * @returns An array of objects with user main datas
 */
export async function userHeaderData(id) {
  let mainDatas = {}

  mainDatas = await GetMainData(id)
  //console.log(mainDatas)
  const userData = new MainDataFormater(mainDatas)
  console.log(userData)
  return userData
}

/**
 * @param id - the id of the user
 * @returns An array of objects with user sessions datas
 */
export async function userSessionsData(id) {
  let sessionsDatas = {}

  sessionsDatas = await GetUserAverageSessions(id)
  console.log(sessionsDatas)
  const getAverageSessions = new UserSessionsFormater(sessionsDatas)
  console.log(getAverageSessions)
  return getAverageSessions
}

/**
 * @param id - the id of the user
 * @returns An array of objects with user activity datas
 */
export async function userActivitiesData(id) {
  let activitiesDatas = {}

  activitiesDatas = await GetUserActivities(id)
  //console.log(activitiesDatas)
  const getActivities = new UserActivitiesFormater(activitiesDatas)
  console.log(getActivities)
  return getActivities
}

/**
 * @param id - the id of the user
 * @returns An array of objects with user performances datas
 */
export async function userPerformancesData(id) {
  let performancesDatas = {}

  performancesDatas = await GetUserPerformance(id)
  //console.log(performancesDatas)
  const getPerformances = new UserPerformancesFormater(performancesDatas)
  console.log(getPerformances)
  return getPerformances
}
