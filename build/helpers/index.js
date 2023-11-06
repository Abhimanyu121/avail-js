"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyringFromSeed = exports.generateKeyring = exports.formatNumberToBalance = exports.isValidAddress = void 0;
const keyring_1 = require("@polkadot/keyring");
const util_1 = require("@polkadot/util");
/**
 *
 * This function checks if a given address is valid.
 *
 * @param {string} address The address to validate.
 *
 * @returns {boolean} A boolean value indicating whether the address is valid or not.
 */
const isValidAddress = (address) => {
    try {
        (0, keyring_1.encodeAddress)((0, util_1.isHex)(address) ? (0, util_1.hexToU8a)(address) : (0, keyring_1.decodeAddress)(address));
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAddress = isValidAddress;
/**
 * Formats a number to balance.
 *
 * @param {number} value The number value to format.
 * @param {number} [decimals] The number of decimal places to include in the formatted balance. Defaults to 18.
 *
 * @returns {BN} The converted BN value.
 */
const formatNumberToBalance = (value, decimals) => {
    const multiplier = new util_1.BN(10).pow(new util_1.BN(decimals || 18));
    return new util_1.BN(value).mul(multiplier);
};
exports.formatNumberToBalance = formatNumberToBalance;
/**
 * Generates a new keyring.
 *
 * @returns {Keyring} The newly generated Keyring instance.
 */
const generateKeyring = () => {
    return new keyring_1.Keyring({ type: "sr25519" });
};
exports.generateKeyring = generateKeyring;
/**
 * Retrieves a keyring pair from a given seed.
 *
 * @param {string} seed The seed value used to generate the keypair.
 * @returns {KeyringPair} The KeyringPair generated from the seed.
 */
const getKeyringFromSeed = (seed) => {
    const keyring = (0, exports.generateKeyring)();
    return keyring.addFromUri(seed);
};
exports.getKeyringFromSeed = getKeyringFromSeed;
