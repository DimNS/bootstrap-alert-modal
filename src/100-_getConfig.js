/**
 * Returns a list of options for a specific type
 *
 * @param {string} type
 * @param {object} options
 *
 * @return {object}
 *
 * @type {function}
 *
 * @author  DimNS <dimns@dimns.ru>
 * @version 2019-09-25
 */
bsam._getConfig = function (type, options) {
    var config = Object.assign({}, bsam.config);

    if (typeof options === 'object') {
        Object.assign(config, options);
    }

    return config;
};