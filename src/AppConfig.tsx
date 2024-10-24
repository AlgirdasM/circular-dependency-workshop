import React from 'react';
import { getConfig } from "./util";
import { AppConfig } from "./App";
import {Paragraph} from "./Paragraph";

export const AppConfigs = () => {
    const config: AppConfig = getConfig();
    return (
        <div>
            <Paragraph>
                App config
            </Paragraph>
            {Object.entries(config.data).map(([key, value]) => {
                return <Paragraph key={key}>{key} - {value}</Paragraph>
            })}
        </div>

    );
}
