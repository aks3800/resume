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
			<SkillItem skillHeader="Communication" skillType={SkillType.Personality} score={80} />
			<SkillItem skillHeader="Data Structures" skillType={SkillType.ProgrammingLanguage} score={60} />
			<SkillItem skillHeader="C" skillType={SkillType.ProgrammingLanguage} score={80} />
			<SkillItem skillHeader="Python" skillType={SkillType.ProgrammingLanguage} score={90} />
			<SkillItem skillHeader="Core Java" skillType={SkillType.ProgrammingLanguage} score={60} />
			<SkillItem skillHeader="Machine Learning" skillType={SkillType.Conceptual} score={70} />
			<SkillItem skillHeader="Deep Learning" skillType={SkillType.Conceptual} score={50} />
			<SkillItem skillHeader="Compiler Design" skillType={SkillType.Conceptual} score={70} />
			<SkillItem skillHeader="Operating system" skillType={SkillType.Conceptual} score={70} />
			<SkillItem skillHeader="SQL" skillType={SkillType.Database} score={80} />
			<SkillItem skillHeader="Excel" skillType={SkillType.DataAnalysis} score={70} />
			<SkillItem skillHeader="Tableau" skillType={SkillType.DataAnalysis} score={60} />
		</div>
	);
};

export default SkillsComponent;
