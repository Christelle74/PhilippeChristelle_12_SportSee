/**
 * @class
 * @classdesc User average sessions datas formater
 */
export default class UserSessionsFormater {
  /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} sessions - user sessions datas
   */

  constructor({ sessions }) {
    console.log('ça marche')
    this.sessions = this.SessionDay(sessions.day)
    this.sessionsData = sessions.map((session, index) => ({
      ...session,
      sessionLength: session.sessionLength,
      day: this.sessions[index],
    }))
    console.log(this.sessions)
    console.log('sessions:', this.sessionsData)
  }

  SessionDay() {
    const formatDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    //console.log(formatPerform)
    return formatDay
  }
}
