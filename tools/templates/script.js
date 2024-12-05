let usbVendorById;

function getUsbVendorById(id) {
    usbVendorById = usbVendorById || Object.fromEntries(usbVendorIds);

    return usbVendorById[id];
}

let usbObsoleteVendorById;

function getUsbObsoleteVendorById(id) {
    usbObsoleteVendorById = usbObsoleteVendorById || Object.fromEntries(usbObsoleteVendorIds);

    return usbObsoleteVendorById[id];
}

module.exports = {
    usbVendorIds,
    usbObsoleteVendorIds,
    getUsbVendorById,
    getUsbObsoleteVendorById
};
