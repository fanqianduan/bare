import { FC } from "react";

const { APP_NAME } = import.meta.env;

export const App: FC = () => {
    return <>{APP_NAME}</>;
};
