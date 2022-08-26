/**
 * It fetches data from a server and returns it
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */

const mockedDatas = false

export const GetMainData = async (id) => {
  let url = `http://localhost:3000/user/${id}`

  try {
    if (mockedDatas) {
      url = '/mockedOnePersonData.json'
    }
    const response = await fetch(url)
    const mainData = await response.json()
    console.log(mainData.data)
    return mainData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}
/**
 * It fetches data from a url and returns the activity datas
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserActivities = async (id) => {
  let url = `http://localhost:3000/user/${id}/activity`

  try {
    if (mockedDatas) {
      url = '/mockedActivityData.json'
    }
    const response = await fetch(url)
    const activitiesData = await response.json()
    console.log(activitiesData.data)
    return activitiesData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * It fetches data from a url and returns the average session datas.
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserAverageSessions = async (id) => {
  let url = `http://localhost:3000/user/${id}/average-sessions`

  try {
    if (mockedDatas) {
      url = '/mockedAverageSessionData.json'
    }
    const response = await fetch(url)
    const averageSessionsData = await response.json()
    console.log(averageSessionsData.data)
    return averageSessionsData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * It fetches data from a url and returns the performances datas.
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserPerformance = async (id) => {
  let url = `http://localhost:3000/user/${id}/performance`

  try {
    if (mockedDatas) {
      url = '/mockedPerformanceData.json'
    }
    const response = await fetch(url)
    const performanceData = await response.json()
    console.log(performanceData.data)
    return performanceData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}
