/**
 * localStorage 封装
 */
import globalConfig from "@/config/global";
import {StorageData} from "@/utils/storage/type";

class StorageUtil {
    /**
     * 获取项目下配置的命名空间中的localStorage的内容
     *
     * @returns 项目下配置的命名空间中的localStorage的内容
     */
    static getStorage() {
        const storage = localStorage.getItem(globalConfig.storeNamespace)
        return JSON.parse(storage || '{}') as StorageData
    }

    /**
     * 设置键值到对应的命名空间下存储到localStorage中
     * @param key
     * @param value
     */
    static setItem<K extends keyof StorageData>(key: K, value: StorageData[K]) {
        const storage = this.getStorage()
        const newStorage = {...storage, [key]: value}
        localStorage.setItem(globalConfig.storeNamespace, JSON.stringify(newStorage))
    }

    /**
     * 通过传入key 获取对应的值
     * @param key
     * @returns 获取对应的值
     */
    static getItem<key extends keyof StorageData>(key: key):StorageData[key] {
        const storage = this.getStorage()
        return storage[key]
    }

    /**
     * 清除localStorage下所有内容
     */
    static clearAll() {
        localStorage.clear()
    }
}

export default StorageUtil