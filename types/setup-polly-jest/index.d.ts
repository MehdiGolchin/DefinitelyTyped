// Type definitions for setup-polly-jest v0.5.2
// Project: https://github.com/gribnoysup/setup-polly-jest
// Definitions by: Mehdi Golchin <https://github.com/MehdiGolchin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { PollyConfig, Polly } from '@pollyjs/core';

/**
 * Shared context to keep polly instance and
 * options for a specific run
 */
export interface PollyContext {
    readonly polly: Polly;
    readonly options: PollyConfig;
}

/**
 * Attach test fn proxies to jasmine environment if needed and
 * add beforeAll/afterAll hooks that will activate/deactivate
 * Polly when running test suite
 *
 * @param {PollyConfig} defaults Polly default options
 *
 * @returns {PollyContext} Context with `polly` property
 */
export function setupPolly(config: PollyConfig): PollyContext;
