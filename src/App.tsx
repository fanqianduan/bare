import { FC } from "react";

const { APP_NAME } = import.meta.env;

export const App: FC = () => {
    return <div className="p-6">{APP_NAME}</div>;
};
