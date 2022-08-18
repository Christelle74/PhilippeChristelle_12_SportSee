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
  constructor(datas) {
    console.log(datas)
    this.id = datas.id
    this.userFirstName = datas.userInfos.firstName
    this.keyData = datas.keyData
    this.todayScore = datas.todayScore || datas.score
    this.score = this.formatScore(this.todayScore)
    console.log(this.id)
  }

  formatScore() {
    return [{ value: this.todayScore * 100 }]
  }
}
