import * as React from 'react';
import SectionHeader from '../../section_header';

interface IExperienceSectionProps {}

const ExperienceSection: React.FunctionComponent<IExperienceSectionProps> = (props) => {
	return (
		<div>
			<div className="d-flex flex-column">
				<SectionHeader headerText="E X P E R I E N C E" />
			</div>
		</div>
	);
};

export default ExperienceSection;
