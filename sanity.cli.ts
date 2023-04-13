import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '1533j992',
    dataset: 'production'
  },
  graphql: [
    {
      playground: true,
      tag: 'experiment',
      id: 'schema-experiment',
    },
  ]
})
