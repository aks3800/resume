import * as React from 'react';
import { Text } from '@innovaccer/design-system';
import Divider from '../divider';

interface ISectionHeaderProps {
	headerText: string;
	withDivider?: boolean;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = (props) => {
	const { headerText, withDivider } = props;
	if (withDivider) {
		return (
			<div className="py-5">
				<Divider />
				<div className="py-4 d-flex pl-4">
					<Text size="large" weight="strong">
						{headerText}
					</Text>
				</div>
				<Divider />
			</div>
		);
	}
	return (
		<div className="px-4 custom-bg-lighter">
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
