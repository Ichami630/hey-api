import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
    input: ['./openapi/users.swagger.json', './openapi/notifications.swagger.json'],
    output: {
        path:'./frontend/src/client', // folder where generated code lives
        format: 'prettier', //format the output generated code
        lint: 'eslint', //lint the output generated code
    },
    plugins: [
        ...defaultPlugins, // baseline: prettier, eslint, zod
        '@hey-api/client-axios', // http client
        '@tanstack/react-query', // state management and caching
        'zod' // runtime validation schema
    ],
});