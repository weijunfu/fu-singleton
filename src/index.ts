/**
 * 单例
 * @param className 被代理对象
 * @returns 代理
 */
export default function singleton(className: any) {
    let instance: object
    
    const proxy = new Proxy(className, {
        construct(target, args) {
            if(!instance) {
                instance = Reflect.construct(target, args)
            }
            return instance
        },
    })

    proxy.prototype.constructor = proxy

    return proxy;
}