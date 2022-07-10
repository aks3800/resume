import * as React from 'react';
import './styles.css';

interface ISeperatorProps {}

const Seperator: React.FunctionComponent<ISeperatorProps> = (props) => {
	return (
		<div className="d-flex justify-content-center align-items-center px-4">
			<div className="seperator"></div>
		</div>
	);
};

export default Seperator;
