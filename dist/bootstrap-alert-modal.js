/**
 * Init
 *
 * @type {object}
 *
 * @author  DimNS <dimns@dimns.ru>
 * @version 2019-09-25
 */
var bsam = {};

bsam.config = {
    alertCloseButtonClass    : 'btn-primary',
    alertCloseButtonText     : 'Close',
    confirmHeaderClass       : 'text-white bg-warning',
    confirmTitle             : 'Action required',
    confirmConfirmButtonClass: 'btn-success',
    confirmCancelButtonClass : 'btn-danger',
    modalBackdrop            : 'static',
    modalKeyboard            : false,
    modalFocus               : true
};
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
/**
 * Alert
 *
 * @param {string} title   Title message
 * @param {string} body    HTML content
 * @param {string} code    Background code (success|danger|warning|info)
 * @param {object} options Override configuration
 *
 * @type {function}
 *
 * @author  DimNS <dimns@dimns.ru>
 * @version 2019-09-25
 */
bsam.alert = function (title, body, code, options) {
    var config = bsam._getConfig('alert', options);

    var modal = $(
        '<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n' +
        '    <div class="modal-dialog modal-dialog-centered" role="document">\n' +
        '        <div class="modal-content">\n' +
        '            <div class="modal-header text-white bg-' + code + '">\n' +
        '                <h5 class="modal-title">' + title + '</h5>\n' +
        '            </div>\n' +
        '            <div class="modal-body">\n' +
        '                ' + body + '\n' +
        '            </div>\n' +
        '            <div class="modal-footer">\n' +
        '                <button type="button" class="btn ' + config.alertCloseButtonClass + '" data-dismiss="modal">\n' +
        '                    ' + config.alertCloseButtonText + '\n' +
        '                </button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>'
    ).on('hidden.bs.modal', function (e) {
        modal.remove();
    });

    $('body').append(modal);

    modal.modal({
        backdrop: config.modalBackdrop,
        keyboard: config.modalKeyboard,
        focus   : config.modalFocus
    });
};
/**
 * Show the action confirmation window
 *
 * @param {string}   body              HTML content
 * @param {string}   confirmButtonText The text of the button "OK"
 * @param {string}   cancelButtonText  The text of the button "Cancel
 * @param {function} callbackConfirm   After pressing a button "OK"
 * @param {function} callbackCancel    After pressing a button "Cancel
 * @param {function} callbackOnOpen    After show modal
 * @param {object}   options           Override configuration
 *
 * @type {function}
 *
 * @author  DimNS <dimns@dimns.ru>
 * @version 2019-09-25
 */
bsam.confirm = function (body, confirmButtonText, cancelButtonText, callbackConfirm, callbackCancel, callbackOnOpen, options) {
    var config = bsam._getConfig('confirm', options);

    var modal = $(
        '<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n' +
        '    <div class="modal-dialog modal-dialog-centered" role="document">\n' +
        '        <div class="modal-content">\n' +
        '            <div class="modal-header ' + config.confirmHeaderClass + '">\n' +
        '                <h5 class="modal-title">' + config.confirmTitle + '</h5>\n' +
        '            </div>\n' +
        '            <div class="modal-body">\n' +
        '                ' + body + '\n' +
        '            </div>\n' +
        '            <div class="modal-footer">\n' +
        '                <button type="button" class="btn ' + config.confirmConfirmButtonClass + ' js-button__confirm">\n' +
        '                    ' + confirmButtonText + '\n' +
        '                </button>\n' +
        '                <button type="button" class="btn ' + config.confirmCancelButtonClass + ' js-button__cancel">\n' +
        '                    ' + cancelButtonText + '\n' +
        '                </button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>'
    ).on('shown.bs.modal', function (e) {
        if (typeof callbackOnOpen === 'function') {
            callbackOnOpen();
        }
    }).on('hidden.bs.modal', function (e) {
        modal.remove();
    });

    modal.find('.js-button__confirm').bind('click', function () {
        modal.modal('hide');

        if (typeof callbackConfirm === 'function') {
            callbackConfirm();
        }
    });

    modal.find('.js-button__cancel').bind('click', function () {
        modal.modal('hide');

        if (typeof callbackCancel === 'function') {
            callbackCancel();
        }
    });

    modal.modal({
        backdrop: config.modalBackdrop,
        keyboard: config.modalKeyboard,
        focus   : config.modalFocus
    });

    $('body').append(modal);
};
/**
 * Danger
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
bsam.danger = function (title, body, options) {
    bsam.alert(title, body, 'danger', options);
};
/**
 * Info
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
bsam.info = function (title, body, options) {
    bsam.alert(title, body, 'info', options);
};
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
/**
 * Warning
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
bsam.warning = function (title, body, options) {
    bsam.alert(title, body, 'warning', options);
};