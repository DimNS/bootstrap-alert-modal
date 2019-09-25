/**
 * Success
 *
 * @param {string} title   Title message
 * @param {string} body    HTML content
 * @param {object} options Override configuration
 *
 * @type {function}
 *
 * @author  DimNS <dimns@dimns.ru>
 * @version 2019-09-25
 */
bsam.success = function (title, body, options) {
    bsam.alert(title, body, 'success', options);
};