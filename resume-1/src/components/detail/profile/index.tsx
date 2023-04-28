import * as React from 'react';
import SectionHeader from '../../section_header';
import { Text } from '@innovaccer/design-system';

interface IProfileSectionProps {}

const ProfileSection: React.FunctionComponent<IProfileSectionProps> = (props) => {
	return (
		<div className="d-flex flex-column">
			<SectionHeader headerText="P R O F I L E" withDivider={false} />
			<Text className="py-6" appearance="subtle" size="small">
				I am a versatile and high energy computer science enthusiast. I seek to work in an environment that will challenge me while allowing me to contribute to the growth and success of  the organization and gives a chance to show my enthusiasm, willingness and determination to learn new  technologies. 
			</Text>
		</div>
	);
};

export default ProfileSection;
