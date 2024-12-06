# usb-vendor-ids
[![NPM version](https://img.shields.io/npm/v/usb-vendor-ids.svg)](https://www.npmjs.com/package/usb-vendor-ids)
[![NPM Downloads](https://img.shields.io/npm/dm/usb-vendor-ids.svg?style=flat)](https://www.npmjs.org/package/usb-vendor-ids)

This package contains a [list of USB vendors](https://usb.org) with an id.

## Install
`npm i --save-dev usb-vendor-ids`

## Using
```js
import { usbVendorIds, getUsbVendorById } from 'usb-vendor-ids';

const vendor = getUsbVendorById(1414);
console.log(vendor); // "ZyXEL Communications Corp"

// Output list of USB vendors with ids
console.log(usbVendorIds);
// [
//   ...
//   [
//     1414,
//     "ZyXEL Communications Corp"
//   ]
// ]

```

## [License](./LICENSE)
MIT

## Links
- https://www.usb.org/developers
- https://www.usb.org/sites/default/files/vendor_ids100824_0.pdf
- https://www.usb.org/sites/default/files/obsoletevids_10232019.pdf

Updated: 2024-12-06
