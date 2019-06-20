/**
 * Init
 *
 * @type {object}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
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
 * Alert
 *
 * @param {string} title Title message
 * @param {string} body  HTML content
 * @param {string} code  Background code (success|danger|warning|info)
 *
 * @type {function}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
 */
bsam.alert = function (title, body, code) {
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
        '                <button type="button" class="btn ' + bsam.config.alertCloseButtonClass + '" data-dismiss="modal">\n' +
        '                    ' + bsam.config.alertCloseButtonText + '\n' +
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
        backdrop: bsam.config.modalBackdrop,
        keyboard: bsam.config.modalKeyboard,
        focus   : bsam.config.modalFocus
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
 *
 * @type {function}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
 */
bsam.confirm = function (body, confirmButtonText, cancelButtonText, callbackConfirm, callbackCancel, callbackOnOpen) {
    var modal = $(
        '<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n' +
        '    <div class="modal-dialog modal-dialog-centered" role="document">\n' +
        '        <div class="modal-content">\n' +
        '            <div class="modal-header ' + bsam.config.confirmHeaderClass + '">\n' +
        '                <h5 class="modal-title">' + bsam.config.confirmTitle + '</h5>\n' +
        '            </div>\n' +
        '            <div class="modal-body">\n' +
        '                ' + body + '\n' +
        '            </div>\n' +
        '            <div class="modal-footer">\n' +
        '                <button type="button" class="btn ' + bsam.config.confirmConfirmButtonClass + ' js-button__confirm">\n' +
        '                    ' + confirmButtonText + '\n' +
        '                </button>\n' +
        '                <button type="button" class="btn ' + bsam.config.confirmCancelButtonClass + ' js-button__cancel">\n' +
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
        backdrop: bsam.config.modalBackdrop,
        keyboard: bsam.config.modalKeyboard,
        focus   : bsam.config.modalFocus
    });

    $('body').append(modal);
};
/**
 * Danger
 *
 * @param {string} title Title message
 * @param {string} body  HTML content
 *
 * @type {function}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
 */
bsam.danger = function (title, body) {
    bsam.alert(title, body, 'danger');
};
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
/**
 * Success
 *
 * @param {string} title Title message
 * @param {string} body  HTML content
 *
 * @type {function}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
 */
bsam.success = function (title, body) {
    bsam.alert(title, body, 'success');
};
/**
 * Warning
 *
 * @param {string} title Title message
 * @param {string} body  HTML content
 *
 * @type {function}
 *
 * @version 2019-06-18
 * @author  DimNS <dimns@dimns.ru>
 */
bsam.warning = function (title, body) {
    bsam.alert(title, body, 'warning');
};