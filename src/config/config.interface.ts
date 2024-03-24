import { MongooseModuleAsyncOptions } from "@nestjs/mongoose";


export enum EnvEnum{
    DEV,
    PROD,
    TEST,
    STAG,
}

export interface EnvConfig {
    //设置默认监听端口
    port: number,

    //设置数据库连接
    //这里是mongose的，而且采用全局同步链接
    mongoseUri:string,

    options: MongooseModuleAsyncOptions,

    env:EnvEnum,

}