import { Express } from 'express';
import { ConfigModule } from "../types/global";
declare type Options = {
    app: Express;
    configModule: ConfigModule;
};
declare const _default: ({ app, configModule }: Options) => Promise<Express>;
export default _default;
