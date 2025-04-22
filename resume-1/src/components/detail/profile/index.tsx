import * as React from 'react';
import SectionHeader from '../../section_header';
import { Text } from '@innovaccer/design-system';

interface IProfileSectionProps {}

const ProfileSection: React.FunctionComponent<IProfileSectionProps> = (props) => {
	return (
		<div className="d-flex flex-column">
			<SectionHeader headerText="P R O F I L E" withDivider={false} />
			<Text
				className="pt-5 pb-4"
				color="inverse-light"
				appearance="subtle"
				size="small"
				style={{ textAlign: 'justify' }}
			>
				Results-driven Computer Science professional with 8+ years of experience in full-cycle
				software development, application support, and project delivery. Proven ability to analyze
				complex requirements, architect scalable solutions, and execute projects within tight
				timelines. Adept at cross-functional collaboration, strategic planning, and delivering
				high-quality outcomes. Passionate about emerging technologies and continuous skill
				development. Seeking new challenges where I can leverage my expertise to drive innovation
				and create impactful solutions.
			</Text>
		</div>
	);
};

export default ProfileSection;
