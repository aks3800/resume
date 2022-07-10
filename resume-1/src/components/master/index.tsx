import * as React from 'react';
import InfoComponent from './info';
import NameComponent from './name';
import SkillsComponent from './skills';

interface IMasterSectionProps {}

const MasterSection: React.FunctionComponent<IMasterSectionProps> = (props) => {
	return (
		<div className="">
			<NameComponent />
			<div className="pt-6">
				<InfoComponent />
			</div>
			<div className="pt-4 d-flex flex-column h-100">
				<SkillsComponent />
			</div>
		</div>
	);
};

export default MasterSection;
