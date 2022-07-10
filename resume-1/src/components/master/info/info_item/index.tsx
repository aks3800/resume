import * as React from 'react';

import { Icon, Text } from '@innovaccer/design-system';
import heading from '@innovaccer/design-system/dist/core/components/atoms/heading';
interface IInfoItemProps {
	icon: string;
	heading: string;
	caption: string;
}

const InfoItem: React.FunctionComponent<IInfoItemProps> = (props) => {
	const { heading, caption, icon } = props;
	return (
		<div className="px-7 d-flex align-items-start py-3">
			<div className="pt-2">
				<Icon size={30} name={icon} />
			</div>
			<div className="d-flex flex-column pl-4">
				<Text weight="medium" size="regular">
					{heading}
				</Text>
				<Text size="regular" appearance="subtle" className="pt-1">
					{caption}
				</Text>
			</div>
		</div>
	);
};

export default InfoItem;
