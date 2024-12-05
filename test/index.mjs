import { getUsbVendorById, getUsbObsoleteVendorById } from '../dist/index.mjs';

if (!getUsbVendorById(1414).includes('ZyXEL')) {
    throw Error('USB vendor not found');
}

if (!getUsbObsoleteVendorById(1116).includes('Motorola')) {
    throw Error('Obsolete USB vendor not found');
}

console.log('Tests for ES6 passed');
