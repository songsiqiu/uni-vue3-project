import { ProxyOptions } from 'vite'

const proxy: Record<string, string | ProxyOptions> = {
    /** 请求的后端地址  */
    '/api': {
        target: 'https://apifoxmock.com/m1/4859341-4514943-default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
    }
}

export default proxy