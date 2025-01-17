import { ApiPromise } from "@polkadot/api";
import { ApiOptions } from "@polkadot/api/types";
export declare let api: ApiPromise;
export declare let chainEndpoint: string;
/**
 * This function initializes a connection to a blockchain endpoint, using the Polkadot JS API.
 *
 * @param {string} [endpoint] The URL of the blockchain endpoint to connect to. If provided, it will override any previously set endpoint.
 * @param {ApiOptions} [options] Options for the Polkadot JS API. These will be merged with default options.
 *
 * @returns {Promise<ApiPromise>} A promise that resolves to an instance of `ApiPromise`, representing the established API connection.
 */
export declare const initialize: (endpoint?: string, options?: ApiOptions) => Promise<ApiPromise>;
/**
 * Checks if a connection to the blockchain endpoint is currently established.
 *
 * @returns {boolean} Returns `true` if a connection is currently established, `false` otherwise.
 */
export declare const isConnected: () => boolean;
/**
 * This function disconnects from a currently connected blockchain endpoint.
 * It first checks if a connection is currently established, and if so, it disconnects from it.
 *
 * @returns {Promise<void>} A promise that resolves when the disconnection is complete.
 */
export declare const disconnect: () => Promise<void>;
/**
 * This function get the number of decimals from the chain registry.
 *
 * @param {ApiPromise} api the api promise of the chain.
 *
 * @returns {number} The number of decimals of the chain from the api promise.
 */
export declare const getDecimals: (api: ApiPromise) => number;
