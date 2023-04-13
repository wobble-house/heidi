
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://1533j992.api.sanity.io/v1/graphql/production/experiment",
  generates: {
    "lib/gql/": {
      preset: "client",
      plugins: []
    },
    "lib/gql/graphql.schema.json": {
      plugins: ["introspection"]
    },
    'lib/gql/types.ts': {
      plugins: ['typescript'],
      config: {
        avoidOptionals: true
      }
    }
  }
};

export default config;
