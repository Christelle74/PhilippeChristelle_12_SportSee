/**
 * @class
 * @classdesc Main user datas formater
 */
export default class MainDataFormater {
  /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} datas - main user datas
   */
  constructor(data) {
    this.id = data.id
    this.userFirstName = data.userInfos.firstName
    this.keyData = data.keyData
    this.todayScore = data.todayScore || data.score
    this.score = this.formatScore(this.todayScore)
  }

  formatScore() {
    return [{ value: this.todayScore * 100 }]
  }
}
