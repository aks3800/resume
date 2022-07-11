import * as React from 'react';
import EducationSection from './education';
import ExperienceSection from './experience';
import ProfileSection from './profile';

interface IDetailSectionProps {}

const DetailSection: React.FunctionComponent<IDetailSectionProps> = (props) => {
	return (
		<div className="pt-8 px-8">
			<ProfileSection />
			<ExperienceSection />
			<EducationSection />
		</div>
	);
};

export default DetailSection;
