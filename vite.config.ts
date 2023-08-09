import uni from '@dcloudio/vite-plugin-uni'
import { visualizer } from 'rollup-plugin-visualizer'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { pSusceptor } from './build/copySusceptor'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env', mode, env)
  const isProd = env.VITE_USER_NODE_ENV === 'production'
  const pUni = uni()
  const pImport = autoImport({ imports: ['vue', 'pinia'], dts: 'types/autoImport.d.ts' })
  const pUno = unocss()
  const pVisualizer = visualizer()
  const pInspect = Inspect({ build: isProd, outputDir: 'dist/.vite-inspect' })
  return {
    plugins: [pUni, pImport, pUno, pVisualizer, pInspect, pSusceptor(env)],
    resolve: {
      alias: { '@': '/src/' },
      extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  }
})
