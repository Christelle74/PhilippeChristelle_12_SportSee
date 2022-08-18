/**
 * @class
 * @classdesc User activity datas formater
 */
export default class UserActivitiesFormater {
  /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} sessions - user sessions datas
   * @param {Number} id - user id
   */
  constructor({ sessions, id }) {
    this.id = id
    this.sessions = sessions.map((session, index) => ({
      ...session,
      kilogram: session.kilogram,
      calories: session.calories,
      day: (index + 1).toString(),
    }))
    //console.log(this.sessions)
    //console.log(this.id)
  }
}
