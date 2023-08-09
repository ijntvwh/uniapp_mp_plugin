# uniapp开发小程序插件脚手架
## vite, vue3, ts

| 类别     | 库                                   |
| -------- | ------------------------------------ |
| 包管理器 | pnpm                                 |
| 网络请求 | uni-ajax                             |
| 原子样式 | unocss, unocss-preset-weapp          |
| 代码校验 | husky, lint-staged, eslint, prettier |
| 状态管理 | pinia, pinia-plugin-persist-uni      |
| 类型导入 | types-sync, unplugin-auto-import     |
| 时间处理 | dayjs                                |

# 安装
```
npx degit ijntvwh/uniapp_mp_plugin my-plugin
```
## app id
配置环境变量 VITE_MP_APPID
## plugin id
配置环境变量 VITE_PLUGIN_ID
# 使用
```
pnpm build
```
用微信开发工具打开dist/build/mp-weixin目录

# 更新 uniapp 版本
```
npx @dcloudio/uvm
```

# 删除多余uni
```
pnpm remove @dcloudio/uni-automator @dcloudio/uni-mp-alipay @dcloudio/uni-mp-baidu @dcloudio/uni-mp-kuaishou @dcloudio/uni-mp-lark @dcloudio/uni-mp-qq @dcloudio/uni-mp-toutiao @dcloudio/uni-mp-jd @dcloudio/uni-quickapp-webview vue-i18n
```
