import * as React from 'react';
import { Text, Divider } from '@innovaccer/design-system';
import Seperator from '../../seperator';

interface IDetailItemProps {
	startYear: string;
	endYear?: string;
	title: string;
	caption: string;
	description?: string;
}

const DetailItem: React.FunctionComponent<IDetailItemProps> = (props) => {
	const { startYear, endYear, title, caption, description } = props;
	return (
		<div className="d-flex">
			<div className="d-flex flex-column">
				<Text appearance="subtle">{startYear}</Text>
				{endYear && (
					<Text appearance="subtle" className="pt-3">
						{endYear}
					</Text>
				)}
			</div>
			<div className="d-flex h-100 flex-column">
				<div className="px-4 pt-3">
					<Seperator />
				</div>
			</div>
			<div className="d-flex flex-column flex-grow-1">
				<Text weight="medium" size="regular">
					{title}
				</Text>
				<Text className=" italic" appearance="subtle">
					{caption}
				</Text>
			</div>
		</div>
	);
};

DetailItem.defaultProps = {
	endYear: '',
};

export default DetailItem;
