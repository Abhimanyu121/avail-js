import { Keyring } from "@polkadot/keyring";
import { KeyringPair } from "@polkadot/keyring/types";
import { BN } from "@polkadot/util";
/**
 *
 * This function checks if a given address is valid.
 *
 * @param {string} address The address to validate.
 *
 * @returns {boolean} A boolean value indicating whether the address is valid or not.
 */
export declare const isValidAddress: (address: string) => boolean;
/**
 * Formats a number to balance.
 *
 * @param {number} value The number value to format.
 * @param {number} [decimals] The number of decimal places to include in the formatted balance. Defaults to 18.
 *
 * @returns {BN} The converted BN value.
 */
export declare const formatNumberToBalance: (value: number, decimals?: number) => BN;
/**
 * Generates a new keyring.
 *
 * @returns {Keyring} The newly generated Keyring instance.
 */
export declare const generateKeyring: () => Keyring;
/**
 * Retrieves a keyring pair from a given seed.
 *
 * @param {string} seed The seed value used to generate the keypair.
 * @returns {KeyringPair} The KeyringPair generated from the seed.
 */
export declare const getKeyringFromSeed: (seed: string) => KeyringPair;
