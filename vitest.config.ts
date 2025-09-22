import {defineConfig} from 'vitest/config';
import {loadEnv} from 'vite';

const cwd = process.cwd();

// У нас долгие тесты, а дефолтное время всего 5s
const MAX_TEST_DURATION = (60 * 1_000) * 2;

const config = defineConfig({
    resolve: {
        conditions: ['development']
    },
    test: {
        environment: 'node',
        silent: false,
        testTimeout: MAX_TEST_DURATION,
        disableConsoleIntercept: true,
        // ui: true,
        // reporters: ['html'],

        include: [
            'tests/**/*.test.{ts,mts}',
        ],

        env: loadEnv('', cwd, '')
    }
});

export default config
