import {AppConfig} from "./App";
import {ExtendedConfig} from "./types";
import {CSSProperties} from "react";

export const getConfig = () => {
    const config: AppConfig = {
    data: {
        superSecret: 'secret123',
        shellAgent: 'bash'
    }
    }

    return config
}

export const getUserConfig = () => {
    const config: ExtendedConfig = {
        ...getConfig(),
        userState: {
            id: 'a566fb14-5648-4c4f-8687-c5f0113f65c0',
        }
    }

    return config.userState
}

export const getStyle = (): CSSProperties => {
    return {
        fontSize: '12px'
    }
}
