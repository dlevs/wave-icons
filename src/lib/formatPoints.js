/**
 * Take an array of [x, y] values and convert them
 * into a string for passing to SVG elements.
 *
 * ```js
 * formatPoints([
 *   [0, 10],
 *   [1, 5]
 * ])
 * // '0,10 1,5'
 * ```
 *
 * @param {[number, number][]} points
 * @returns {string}
 */
const formatPoints = points =>
  points.map(point => point.join(',')).join(' ')

export default formatPoints
