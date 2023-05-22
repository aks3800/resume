import * as React from 'react';
import { ProgressBar, Label, Caption } from '@innovaccer/design-system';
import './styles.css';

export enum SkillType {
	Frontend,
	Backend,
	Mobile,
	ProgrammingLanguage,
	Automation,
	Platform,
	Personality,
	Conceptual,
	DataAnalysis,
	Database
}

interface ISkillItemProps {
	skillHeader: string;
	score: number;
	skillType: SkillType;
}

const SkillItem: React.FunctionComponent<ISkillItemProps> = (props) => {
	const { skillHeader, score, skillType } = props;

	const getSkillTypeText = (skillType: SkillType) => {
		switch (skillType) {
			case SkillType.Frontend:
				return 'Frontend';
			case SkillType.Backend:
				return 'Backend';
			case SkillType.Mobile:
				return 'Mobile';
			case SkillType.ProgrammingLanguage:
				return 'Programming Language';
			case SkillType.Automation:
				return 'Automation';
			case SkillType.Platform:
				return 'Platform';
			case SkillType.Personality:
				return 'Personality';
			case SkillType.Conceptual:
				return 'Conceptual';
			case SkillType.DataAnalysis:
				return 'Data Analysis & Visualization';
			case SkillType.Database:
				return 'Database';
		}
	};

	return (
		<div className="px-8 custom pt-4">
			<div className="d-flex justify-content-between align-items-center">
				<Label>{skillHeader}</Label>
				<div className="pl-6">
					<Caption className='caption-text'>{getSkillTypeText(skillType)}</Caption>
				</div>
			</div>
			<div className="py-3">
				<ProgressBar value={score} />
			</div>
		</div>
	);
};

export default SkillItem;
