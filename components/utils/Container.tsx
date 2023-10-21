import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="w-full max-w-[1500px]  min-w-[300px] mx-auto">{children}</div>
);

export default Container;
