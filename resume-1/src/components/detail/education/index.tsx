import * as React from 'react';
import SectionHeader from '../../section_header';
import { Text } from '@innovaccer/design-system';
import DetailItem from '../detail_item';

interface IEducationSectionProps {}

const EducationSection: React.FunctionComponent<IEducationSectionProps> = (props) => {
	return (
		<div>
			<div className="d-flex flex-column">
				<SectionHeader headerText="E D U C A T I O N" />
			</div>
			<div className="pt-1">
				<DetailItem
					startYear="2013"
					endYear="2018"
					title="BTech + MTech with 7.8 CGPA"
					caption="Jaypee Institute of Information Technology, Noida-62"
				/>
			</div>
			<div className="pt-4">
				<DetailItem
					startYear="2011"
					endYear="2013"
					title="High school (88.8%) & Intermediate (90.4%)"
					caption="Doon Blossoms School, Dehradun"
				/>
			</div>
		</div>
	);
};

export default EducationSection;
