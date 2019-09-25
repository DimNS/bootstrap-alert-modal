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