/**
 * Info
 *
 * @param {string} title Title message
 * @param {string} body  HTML content
 *
 * @type {function}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
 */
bsam.info = function (title, body) {
    bsam.alert(title, body, 'info');
};