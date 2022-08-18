/**
 * @class
 * @classdesc User performances datas formater
 */
export default class UserPerformancesFormater {
  /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} performances - user performances datas
   */
  constructor(performances) {
    this.id = performances.userId
    this.kindOfPerform = this.KindOfPerformance(performances.kind)
    //console.log(this.kindOfPerform)
    this.formatPerformData = performances.data.map((performance, kind) => ({
      ...performance,
      kind: this.kindOfPerform[kind],
      value: performance.value,
    }))
    this.performData = this.formatPerformData.reverse()
    //console.log('datas', this.performData)
    //console.log(this.id)
  }

  KindOfPerformance() {
    const formatPerform = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ]
    //console.log(formatPerform)
    return formatPerform
  }
}
