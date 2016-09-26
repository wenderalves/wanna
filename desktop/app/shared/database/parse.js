/**
 * Parse task and return task info if
 * the task is valid, otherwise throw
 * error.
 * @param  {string} query  Enetered task
 * @return {object}        Task info containing
 *                         task text, start time
 *                         and dealine
 */
function parse(query) {
  /**
   * Day, week or month coefficient
   * @type {Object}
   */
  const dwm = {
    d: 1,
    '': 1,
    w: 7,
    m: 30,
  };
  const regex = /@(\d+)([dwmDWM]?)(\+(\d+)([dwmDWM]?))?\s?(!{0,2})$/;
  const regexResult = regex.exec(query);
  const text = query.slice(0, regexResult.index);
  let start = Date.now();
  if (regexResult[3]) {
    start += 86400000 * regexResult[4] * dwm[regexResult[5]];
  }
  const end = start + (86400000 * regexResult[1] * dwm[regexResult[2]]);
  const importance = regexResult[6].length + 1;
  const status = 0;
  return {
    text,
    start,
    end,
    importance,
    status,
  };
}

module.exports = parse;