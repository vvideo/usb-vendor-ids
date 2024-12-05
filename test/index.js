const { getUsbVendorById, getUsbObsoleteVendorById } = require('../dist/index.js');

if (!getUsbVendorById(1414).includes('ZyXEL')) {
    throw Error('USB vendor not found');
}

if (!getUsbObsoleteVendorById(1116).includes('Motorola')) {
    throw Error('Obsolete USB vendor not found');
}

console.log('Tests for commonjs passed');
