import { createContext, ReactNode } from "react";

export interface ProgressContextProviderProps {
  children: ReactNode;
}
interface ProgressContextDefault {
  lastTime: string;
  status: string;
}
const progressDefault = {
  lastTime: "24/09/2022",
  status: "In progress",
};

export const ProgressContext =
  createContext<ProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};
export default ProgressContextProvider;
