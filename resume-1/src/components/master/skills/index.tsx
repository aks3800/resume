import * as React from 'react';
import {} from '@innovaccer/design-system';
import SectionHeader from '../../section_header';
import SkillItem, { SkillType } from './skill_item';

interface ISkillsComponentProps {}

const SkillsComponent: React.FunctionComponent<ISkillsComponentProps> = (props) => {
	return (
		<div className="custom-bg">
			<div className="px-8">
				<SectionHeader headerText="S K I L L S" />
			</div>
			<SkillItem skillHeader="React" skillType={SkillType.Frontend} score={80} />
			<SkillItem skillHeader="JavaScript" skillType={SkillType.ProgrammingLanguage} score={80} />
			<SkillItem skillHeader="NodeJS" skillType={SkillType.Backend} score={80} />
			<SkillItem skillHeader="NextJS" skillType={SkillType.Frontend} score={80} />
			<SkillItem skillHeader="Django" skillType={SkillType.Backend} score={60} />
			<SkillItem skillHeader="Python" skillType={SkillType.ProgrammingLanguage} score={80} />
			<SkillItem skillHeader="Machine Learning & AI" skillType={SkillType.DataScience} score={70} />
			<SkillItem skillHeader="iOS" skillType={SkillType.Mobile} score={90} />
			<SkillItem skillHeader="Flutter" skillType={SkillType.Mobile} score={90} />
			<SkillItem skillHeader="Swift" skillType={SkillType.ProgrammingLanguage} score={90} />
			<SkillItem skillHeader="CI/CD" skillType={SkillType.Automation} score={80} />
			<SkillItem skillHeader="Kubernetes" skillType={SkillType.Infra} score={60} />
			<SkillItem skillHeader="Docker" skillType={SkillType.Platform} score={80} />
		</div>
	);
};

export default SkillsComponent;
