import * as React from 'react';
import { Divider, Text } from '@innovaccer/design-system';

interface ISectionHeaderProps {
	headerText: string;
	withDivider?: boolean;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = (props) => {
	const { headerText, withDivider } = props;
	if (withDivider) {
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
	}
	return (
		<div className="px-4 custom-bg">
			<div className="py-4 d-flex pl-4">
				<Text size="regular" weight="strong">
					{headerText}
				</Text>
			</div>
		</div>
	);
};

SectionHeader.defaultProps = {
	withDivider: true,
};

export default SectionHeader;
