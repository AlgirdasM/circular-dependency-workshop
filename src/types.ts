import {AppConfig} from "./App";

export type ExtendedConfig = AppConfig & {
    userState?: Record<string, string>
}
