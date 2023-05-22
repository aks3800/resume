import * as React from 'react';
import SectionHeader from '../../section_header';
import { Text } from '@innovaccer/design-system';

interface IProfileSectionProps {}

const ProfileSection: React.FunctionComponent<IProfileSectionProps> = (props) => {
	return (
		<div className="d-flex flex-column">
			<SectionHeader headerText="P R O F I L E" withDivider={false} />
			<Text className="pt-6 pb-4" appearance="subtle" size="small">
				Versatile and high-energy computer science professional with 6 years of experience in software development, application maintenance/support, and project execution. Committed to delivering projects of exceptional quality within strict time constraints. Skilled in analyzing and gathering requirements, evaluating end-to-end use cases, and implementing effective planning strategies for successful execution. I am passionate about staying up-to-date with the latest advancements in technology and continuously expanding my skill set. Seeking new challenges and opportunities to contribute my expertise in driving innovative solutions.
			</Text>
		</div>
	);
};

export default ProfileSection;
