import * as React from 'react';
import EducationSection from './education';
import ExperienceSection from './experience';
import ProfileSection from './profile';

interface IDetailSectionProps {}

const DetailSection: React.FunctionComponent<IDetailSectionProps> = (props) => {
	return (
		<div className="pt-6 px-8">
			<ProfileSection />
			<div>
				<ExperienceSection />
			</div>
			<div className="pt-4">
				<EducationSection />
			</div>
		</div>
	);
};

export default DetailSection;
