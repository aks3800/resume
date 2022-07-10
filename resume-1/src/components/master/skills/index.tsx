import * as React from 'react';
import {} from '@innovaccer/design-system';
import SectionHeader from '../../section_header';
import SkillItem, { SkillType } from './skill_item';

interface ISkillsComponentProps {}

const SkillsComponent: React.FunctionComponent<ISkillsComponentProps> = (props) => {
	return (
		<div className="custom-bg">
			<SectionHeader headerText="S K I L L S" />
			<SkillItem skillHeader="React" skillType={SkillType.Frontend} score={80} />
			<SkillItem skillHeader="iOS" skillType={SkillType.Mobile} score={90} />
			<SkillItem skillHeader="Flutter" skillType={SkillType.Mobile} score={90} />
			<SkillItem skillHeader="Django" skillType={SkillType.Backend} score={60} />
			<SkillItem skillHeader="SpringBoot" skillType={SkillType.Backend} score={50} />
			<SkillItem skillHeader="JavaScript" skillType={SkillType.ProgrammingLanguage} score={80} />
			<SkillItem skillHeader="Swift" skillType={SkillType.ProgrammingLanguage} score={90} />
			<SkillItem skillHeader="Python" skillType={SkillType.ProgrammingLanguage} score={80} />
			<SkillItem skillHeader="Java" skillType={SkillType.ProgrammingLanguage} score={70} />
			<SkillItem skillHeader="Dart" skillType={SkillType.ProgrammingLanguage} score={80} />
			<SkillItem skillHeader="CI/CD" skillType={SkillType.Automation} score={80} />
			<SkillItem skillHeader="MacOS" skillType={SkillType.Platform} score={90} />
			<SkillItem skillHeader="Docker" skillType={SkillType.Platform} score={80} />
		</div>
	);
};

export default SkillsComponent;