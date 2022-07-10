import * as React from 'react';
import { Divider, Text } from '@innovaccer/design-system';

interface ISectionHeaderProps {
	headerText: string;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = (props) => {
	const { headerText } = props;
	return (
		<div className="px-8 py-5">
			<Divider appearance="header" className="custom-divider" />
			<div className="py-4 d-flex pl-4">
				<Text size="large" weight="strong">
					{headerText}
				</Text>
			</div>
			<Divider appearance="header" className="custom-divider" />
		</div>
	);
};

export default SectionHeader;
