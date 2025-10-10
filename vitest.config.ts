import {defineConfig} from 'vitest/config';
import {loadEnv} from 'vite';

const cwd = process.cwd();

// У нас долгие тесты, а дефолтное время всего 5s
const MAX_TEST_DURATION = (60 * 1_000) * 2;

const config = defineConfig({
    ssr: {
        resolve: {
            conditions: ['@dozora/url-normalizer']
        },
    },
    test: {
        environment: 'node',
        silent: false,
        testTimeout: MAX_TEST_DURATION,
        disableConsoleIntercept: true,
        include: [
            '**/*.test.{js,ts,mts}',
        ],
        poolOptions: {
            forks: {
                execArgv: [
                    '--harmony-temporal',
                    '--experimental-transform-types'
                ]
            }
        },
        env: loadEnv('', cwd, '')
    }
});

export default config;
