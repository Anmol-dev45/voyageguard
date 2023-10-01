import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container mx-auto px:2 md:px-4">{children}</div>
);

export default Container;
