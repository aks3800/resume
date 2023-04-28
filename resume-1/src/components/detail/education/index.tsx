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
			<div className="pt-3">
			<DetailItem
					startYear="2019"
					endYear="-"
					title="PHD"
					caption="Jaypee Institute of Information Technology, Noida Sec-62"
				/>
				</div>

			<div className="pt-3">
			<DetailItem
					startYear="2016"
					endYear="2018"
					title="M.Tech"
					caption="Jaypee Institute of Information Technology, Noida Sec-62"
				/>

			</div>
			<div className="pt-3">
			<DetailItem
					startYear="2011"
					endYear="2015"
					title="BTech"
					caption="Echelon Institute of Technology, Faridabad"
				/>
				
			</div>
			<div className="pt-3cw">
				<DetailItem
					startYear="2010"
					endYear="2011"
					title="Senior Secondary"
					caption="Tagore Academy Public School(CBSE)"
				/>
			</div>
		</div>
	);
};

export default EducationSection;
