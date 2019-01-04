import { setupPolly } from 'setup-polly-jest';

const context = setupPolly({
    adapters: ['fetch']
});

context.polly.configure({ recordIfMissing: true });
