import * as React from 'react';
import './styles.css';

interface IDividerProps {
	isVertical?: boolean;
}

const Divider: React.FunctionComponent<IDividerProps> = (props) => {
	return (
		<div className="d-flex h-100 w-100">
			{props.isVertical ? (
				<div className="divider-vertical"></div>
			) : (
				<div className="divider-horizontal"></div>
			)}
		</div>
	);
};

Divider.defaultProps = {
	isVertical: false,
};

export default Divider;
