import Sidebar from "@/components/Sidebar";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-[100vh] bg-dark">
      <Sidebar />
      <div className="min-w-[80vw]">{children}</div>
    </div>
  );
};
