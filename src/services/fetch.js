/**
 * It fetches data from a server and returns it
 * @param {Object} mockedDatas - Mocked main datas
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetMainData = async (mockedDatas, id) => {
  let url = `http://localhost:3000/user/${id}`

  if (mockedDatas) {
    url = '/mockedOnePersonData.json'
  }
  try {
    const response = await fetch(url)
    const mainData = await response.json()
    console.log(mainData.data)
    return mainData.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * It fetches data from a url and returns the data.
 * @param {Object} mockedDatas - Mocked activity datas
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserActivities = async (mockedDatas, id) => {
  let url = `http://localhost:3000/user/${id}/activity`

  if (mockedDatas) {
    url = '/mockedOnePersonData.json'
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
 * @param {Object} mockedDatas - Mocked average sessions datas
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserAverageSessions = async (mockedDatas, id) => {
  let url = `http://localhost:3000/user/${id}/average-sessions`

  if (mockedDatas) {
    url = '/mockedOnePersonData.json'
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
 * @param {Object} mockedDatas - Mocked performances datas
 * @param {Number} id - The id of the user
 * @returns {Promise}
 */
export const GetUserPerformance = async (mockedDatas, id) => {
  let url = `http://localhost:3000/user/${id}/performance`

  if (mockedDatas) {
    url = '/mockedOnePersonData.json'
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
