import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {media} from 'sanity-plugin-media'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'wheat-dunlin',
  projectId: '1533j992',
  dataset: 'production',

  plugins: [deskTool(), media(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

