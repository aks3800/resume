import * as React from 'react';
import SectionHeader from '../../section_header';
import { Text } from '@innovaccer/design-system';

interface IProfileSectionProps {}

const ProfileSection: React.FunctionComponent<IProfileSectionProps> = (props) => {
	return (
		<div className="d-flex flex-column">
			<SectionHeader headerText="P R O F I L E" withDivider={false} />
			<Text className="py-6" appearance="subtle" size="small">
				I am a versatile and high energy computer science enthusiast, with the distinction of
				executing projects with best possible quality within strict time constraint. I have been
				into software development, application maintenance / support and project execution for
				nearly 5 years. I am skilled in analysing and gathering requirements, evaluating end-to-end
				use cases and proper planning before execution.
			</Text>
		</div>
	);
};

export default ProfileSection;
