import copy from 'rollup-plugin-copy'

const injectMpId = (env: Record<string, string>) => (contents: Buffer, filename: string) => {
  const obj = JSON.parse(contents.toString())
  if (filename === 'project.config.json') {
    obj.appid = env.VITE_MP_APPID
    obj.pluginAppid = env.VITE_PLUGIN_ID
  }
  if (filename === 'app.json') {
    const config = Object.values<{ provider?: string }>(obj.plugins).find(cfg => cfg.provider != null)
    if (config && config.provider != null) config.provider = env.VITE_PLUGIN_ID
  }
  console.log(filename, obj)
  return JSON.stringify(obj)
}
export function pSusceptor(env: Record<string, string>) {
  const transform = injectMpId(env)
  const isProd = env.VITE_USER_NODE_ENV === 'production'
  const target = isProd ? 'build' : 'dev'
  const mpRoot = `dist/${target}/mp-weixin/`
  return copy({
    verbose: true,
    copyOnce: !isProd,
    targets: [
      { src: 'susceptor/project.config.json', dest: mpRoot, transform },
      { src: 'susceptor/project.private.config.json', dest: mpRoot },
      { src: ['susceptor/miniprogram/*', '!**/app.json'], dest: `${mpRoot}/miniprogram/` },
      { src: 'susceptor/miniprogram/app.json', dest: `${mpRoot}/miniprogram/`, transform },
    ],
  })
}
