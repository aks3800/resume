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
						description="At Innovaccer, I worked as a Full-Stack Developer and Team Lead, contributing to the development and maintenance of their SaaS products. Collaborating with clients like Roche, I led a cross-functional team, overseeing frontend, backend, mobile, and DevOps responsibilities. As part of my role, I managed Innovaccer's open-source mobile design system team, ensuring its smooth functioning. I owned all iOS platform apps within the company and front-end development for Roche. Notably, I established a CI/CD pipeline and created custom DartPad and Dart Services. I actively contributed to various projects, including CBO, Patient App, and InNote. The tech stack I utilized comprised NextJS, React, Django, and Flutter."
					/>
				</div>
				<div className="pt-5">
					<DetailItem
						startYear="2018"
						endYear="2020"
						title="Software Engineer"
						caption="Myntra-Jabong, Gurgaon (E-commerce)"
						description="At Jabong, I worked on the native iOS mobile app, and later transitioned to contribute to Myntra's mobile app built on React Native. I played a key role in implementing features such as rich notifications, seamless login, and Myntra's category tab, enhancing the user experience. Additionally, I automated Jabong's iOS app using Jenkins and Fastlane to streamline the build and deployment process. Throughout these projects, I utilized a tech stack that included Swift, Objective C, React Native, JS, and GoLang."
					/>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
