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
						startYear="2020"
						title="Senior Software Engineer"
						caption="Innovaccer Inc., Noida (Healthcare)"
						description="Worked for client like Roche on the product AIMS as a full stack developer. Currently performing all duties of Team Lead, and contributing to frontend, backend, mobile and DevOps.
						Leading Innovaccer's open source mobile design system team and managing the efforts of the mobile team. Having ownership of all the apps on iOS platform in the company and frontend of Roche. Have single handedly made CI/CD pipeline for mobile apps. Created custom dart-pad and dart-services for developers to try out design system. Have also worked on projects like CBO, Patient App and InNote. Tech stack currently being used is react, django and flutter."
					/>
				</div>
				<div className="pt-5">
					<DetailItem
						startYear="2018"
						endYear="2020"
						title="Software Engineer"
						caption="Myntra-Jabong, Gurgaon (E-commerce)"
						description="Worked on Jabong's native iOS mobile app for the initial year and then contributed to Myntra's mobile app which was written on top of React native. Implemented rich notifications, seamless login, and Myntra's category tab. Automated Jabong's iOS app using Jenkins and Fastlane. The tech stack used was Swift, Objective C, React Native, JS, and GoLang."
					/>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
