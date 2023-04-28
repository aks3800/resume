import * as React from 'react';
import SectionHeader from '../../section_header';
import DetailItem from '../detail_item';

interface IExperienceSectionProps {}

const ExperienceSection: React.FunctionComponent<IExperienceSectionProps> = (props) => {
	return (
		<div>
			<div className="d-flex flex-column">
				<SectionHeader headerText="E X P E R I E N C E" />
				<div className="pt-5">
					<DetailItem
						startYear="2019"
						endYear='2023'
						title="Research Associate"
						caption="Jaypee Institute of Information Technology"
						description=" Researched and worked on the Fog Computing Architecture alongwith Machine Learning and Deep Learning Algorithms under the supervision of an Associate Professor.
						Provided teaching assistantship by conducting technical laboratories for undergraduate computer science students.
						Prepared lab tests and evaluated students for projects and lab tests.

				"
					/>
				</div>
				<div className="pt-5">
					<DetailItem
						startYear="2018"
						endYear="2019"
						title="Assistant Professor"
						caption="Aravali College of Engineering and Management"
						description="Delivered lectures to undergraduate students on various computer science subjects. Conducted and graded student examinations at institute and University level. Developed curriculums and course materials. Participated in campus meetings and cordinated networking workshop for students. Participated actively in faculty development programmes.   "
					/>
				</div>
				<div className='pt-5'><SectionHeader headerText="C E R T I F I C A T I O N S" /></div>
				<div className="pt-5">
					<DetailItem
						startYear=""
						title="Machine Learning workshop"
						caption="AICTE HQ, New Delhi"
					/>
				</div>
				<div className="pt-5">
					<DetailItem
						startYear=""
						title="NPTEL Online Certification on Machine Learning"
						caption=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
