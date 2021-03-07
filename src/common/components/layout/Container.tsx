import { ReactNode } from 'react';

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
	return <div className="container">{children}</div>;
};

interface LayoutContainerProps {
	children: ReactNode;
}

export default LayoutContainer;
