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