import * as React from 'react';
import ProfileSection from './profile';

interface IDetailSectionProps {}

const DetailSection: React.FunctionComponent<IDetailSectionProps> = (props) => {
	return (
		<div className="pt-8 px-8">
			<ProfileSection />
		</div>
	);
};

export default DetailSection;
