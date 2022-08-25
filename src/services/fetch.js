/**
 * It fetches data from a server and returns it
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */

const mockedDatas = true

export const GetMainData = async (id) => {
  let url = `http://localhost:3000/user/${id}`

  if (mockedDatas) {
    url = '/mockedOnePersonData.json'
  }
  try {
    const response = await fetch(url)
    const mainData = await response.json()
    //console.log(mainData.data)
    return mainData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * It fetches data from a url and returns the data.
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserActivities = async (id) => {
  let url = `http://localhost:3000/user/${id}/activity`

  if (mockedDatas) {
    url = '/mockedActivityData.json'
  }
  try {
    const response = await fetch(url)
    const activitiesData = await response.json()
    //console.log(activitiesData.data)
    return activitiesData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * It fetches data from a url and returns the data.
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserAverageSessions = async (id) => {
  let url = `http://localhost:3000/user/${id}/average-sessions`

  if (mockedDatas) {
    url = '/mockedAverageSessionData.json'
  }

  try {
    const response = await fetch(url)
    const averageSessionsData = await response.json()
    //console.log(averageSessionsData.data)
    return averageSessionsData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * It fetches data from a url and returns the data in json format
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserPerformance = async (id) => {
  let url = `http://localhost:3000/user/${id}/performance`

  if (mockedDatas) {
    url = '/mockedPerformanceData.json'
  }
  try {
    const response = await fetch(url)
    const performanceData = await response.json()
    //console.log(performanceData.data)
    return performanceData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}
