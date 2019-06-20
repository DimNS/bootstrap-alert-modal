# bootstrap-alert-modal
Bootstrap alert and confirm messages using the modal component

## Requirements
- Bootstrap v3+
- jQuery v2+

## Install
```bash
npm i bootstrap-alert-modal
```

## Quick start
```html
<!-- Style -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

<!-- Code -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="dist/bootstrap-alert-modal.min.js"></script>

<script>
    $(function () {
        bsam.alert('Example', '<p>Any <strong>html</strong>-content</p>', 'success');
    });
</script>
```

## Options
```javascript
// Default
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

// Override
bsam.config.alertCloseButtonText = 'Close now!';
```
Option|Type|Default
---|---|---
alertCloseButtonClass    |string |`'btn-primary'`
alertCloseButtonText     |string |`'Close'`
confirmHeaderClass       |string |`'text-white bg-warning'`
confirmTitle             |string |`'Action required'`
confirmConfirmButtonClass|string |`'btn-success'`
confirmCancelButtonClass |string |`'btn-danger'`
modalBackdrop            |string |`'static'`
modalKeyboard            |boolean|`false`
modalFocus               |boolean|`true` 

## Methods

## bsam.alert(title, body, code)
Alert modal window with one close button
![bsam.alert](https://github.com/dimns/bootstrap-alert-modal/raw/master/screenshots/alert.png "bsam.alert")
- `title` *{string}* **required** - Title modal window
- `body` *{string}* **required** - Any html-content
- `code` *{string}* **required** - Bootstrap background class suffix (primary, success, danger and etc)

## bsam.success(title, body)
Fast facade alert modal window with one close button and predefined background code
![bsam.success](https://github.com/dimns/bootstrap-alert-modal/raw/master/screenshots/success.png "bsam.success")
- `title` *{string}* **required** - Title modal window
- `body` *{string}* **required** - Any html-content

## bsam.danger(title, body)
Fast facade alert modal window with one close button and predefined background code
![bsam.danger](https://github.com/dimns/bootstrap-alert-modal/raw/master/screenshots/danger.png "bsam.danger")
- `title` *{string}* **required** - Title modal window
- `body` *{string}* **required** - Any html-content

## bsam.warning(title, body)
Fast facade alert modal window with one close button and predefined background code
![bsam.warning](https://github.com/dimns/bootstrap-alert-modal/raw/master/screenshots/warning.png "bsam.warning")
- `title` *{string}* **required** - Title modal window
- `body` *{string}* **required** - Any html-content

## bsam.info(title, body)
Fast facade alert modal window with one close button and predefined background code
![bsam.info](https://github.com/dimns/bootstrap-alert-modal/raw/master/screenshots/info.png "bsam.info")
- `title` *{string}* **required** - Title modal window
- `body` *{string}* **required** - Any html-content

## bsam.confirm(body, confirmButtonText, cancelButtonText, callbackConfirm, callbackCancel, callbackOnOpen)
Confirm modal window with two buttons and callbacks
![bsam.confirm](https://github.com/dimns/bootstrap-alert-modal/raw/master/screenshots/confirm.png "bsam.confirm")
- `body` *{string}* **required** - Any html-content
- `confirmButtonText` *{string}* **required** - The text of the button "OK"
- `cancelButtonText` *{string}* **required** - The text of the button "Cancel
- `callbackConfirm` *{function}* - Function run after pressing a button "OK"
- `callbackCancel` *{function}* - Function run after pressing a button "Cancel
- `callbackOnOpen` *{function}* - Function run after show modal

```javascript
var body = '<p>Any <strong>html</strong>-content</p>';
var confirmButtonText = 'OK';
var cancelButtonText = 'Cancel';

var callbackConfirm = function() {
    bsam.success('Success', 'Successed');
};

var callbackCancel = function() {
    bsam.danger('Cancel', 'Canceled');
};

var callbackOnOpen = function() {
    bsam.info('Open', 'Opened');
};

bsam.confirm(body, confirmButtonText, cancelButtonText, callbackConfirm, callbackCancel, callbackOnOpen);
```