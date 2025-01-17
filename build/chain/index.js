"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimals = exports.disconnect = exports.isConnected = exports.initialize = exports.chainEndpoint = exports.api = void 0;
const api_1 = require("@polkadot/api");
const util_crypto_1 = require("@polkadot/util-crypto");
const spec_1 = require("../spec");
const types_up_to_1_7_2_1 = require("../spec/legacy/types-up-to-1.7.2");
const KATE_ENDPOINT = "wss://kate.avail.tools/ws";
exports.chainEndpoint = KATE_ENDPOINT; // TODO Change with new constant for incentivized / devnet
/**
 * This function initializes a connection to a blockchain endpoint, using the Polkadot JS API.
 *
 * @param {string} [endpoint] The URL of the blockchain endpoint to connect to. If provided, it will override any previously set endpoint.
 * @param {ApiOptions} [options] Options for the Polkadot JS API. These will be merged with default options.
 *
 * @returns {Promise<ApiPromise>} A promise that resolves to an instance of `ApiPromise`, representing the established API connection.
 */
const initialize = (endpoint, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (endpoint)
        exports.chainEndpoint = endpoint;
    yield (0, util_crypto_1.cryptoWaitReady)();
    yield (0, exports.disconnect)();
    const wsProvider = new api_1.WsProvider(exports.chainEndpoint);
    const opt = Object.assign({ provider: wsProvider, noInitWarn: true, types: exports.chainEndpoint === KATE_ENDPOINT ? types_up_to_1_7_2_1.types : spec_1.types, rpc: spec_1.rpc,
        signedExtensions: spec_1.signedExtensions }, options);
    exports.api = yield api_1.ApiPromise.create(opt);
    return exports.api;
});
exports.initialize = initialize;
/**
 * Checks if a connection to the blockchain endpoint is currently established.
 *
 * @returns {boolean} Returns `true` if a connection is currently established, `false` otherwise.
 */
const isConnected = () => {
    return Boolean(exports.api && exports.api.isConnected);
};
exports.isConnected = isConnected;
/**
 * This function disconnects from a currently connected blockchain endpoint.
 * It first checks if a connection is currently established, and if so, it disconnects from it.
 *
 * @returns {Promise<void>} A promise that resolves when the disconnection is complete.
 */
const disconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    if ((0, exports.isConnected)()) {
        yield exports.api.disconnect();
    }
});
exports.disconnect = disconnect;
/**
 * This function get the number of decimals from the chain registry.
 *
 * @param {ApiPromise} api the api promise of the chain.
 *
 * @returns {number} The number of decimals of the chain from the api promise.
 */
const getDecimals = (api) => {
    return api.registry.chainDecimals[0];
};
exports.getDecimals = getDecimals;
