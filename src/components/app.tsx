/**
 * 应用骨架
 */

import { FC, StrictMode } from "react";

/**
 * 应用上下文
 */
export const Provider: FC = (props) => {
    const { children } = props;

    return <StrictMode>{children}</StrictMode>;
};

/**
 * 应用布局
 */
export const Layout: FC = (props) => {
    const { children } = props;

    return <>{children}</>;
};

/**
 * 应用内容
 */
export const Content: FC = () => {
    const { APP_NAME } = import.meta.env;

    return <div className="p-6">{APP_NAME}</div>;
};
