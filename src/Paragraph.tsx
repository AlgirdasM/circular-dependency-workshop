import React, {PropsWithChildren} from 'react';
import {getStyle} from "./util";

export const Paragraph: React.FC<PropsWithChildren> = ({children}) => {
    return <p style={getStyle()}>{children}</p>
}
