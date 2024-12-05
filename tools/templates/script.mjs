let usbVendorById;

export function getUsbVendorById(id) {
    usbVendorById = usbVendorById || Object.fromEntries(usbVendorIds);

    return usbVendorById[id];
}

let usbObsoleteVendorById;

export function getUsbObsoleteVendorById(id) {
    usbObsoleteVendorById = usbObsoleteVendorById || Object.fromEntries(usbObsoleteVendorIds);

    return usbObsoleteVendorById[id];
}
