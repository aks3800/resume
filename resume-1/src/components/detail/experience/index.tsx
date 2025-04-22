import * as React from 'react';
import SectionHeader from '../../section_header';
import DetailItem from '../detail_item';

interface IExperienceSectionProps {}

const ExperienceSection: React.FunctionComponent<IExperienceSectionProps> = (props) => {
	return (
		<div>
			<div className="d-flex flex-column">
				<SectionHeader headerText="E X P E R I E N C E" />
				<div className="pt-1">
					<DetailItem
						startYear="2020"
						title="Senior Software Engineer"
						caption="Innovaccer Health Limited, Abu Dhabi"
						description="At Innovaccer, I currently lead the development of AI-powered features for the Contact Center product, which enables hospital agents to manage patient calls efficiently. I played a key role in building CTI (Computer Telephony Integration) and the agent work queue, which tracks assignments and real-time task statuses. One of my most impactful contributions has been the Ambient Ticket Documentation system—a voice-to-text AI solution that transcribes patient-agent conversations, generates concise summaries, and auto-fills ticket details. This innovation reduced ticket documentation time from 30 seconds to just 7 seconds, greatly enhancing productivity. Prior to this, I worked on Innovaccer’s core SaaS products and led client-facing initiatives for Roche, where I owned all iOS apps, managed the open-source mobile design system, and oversaw frontend and mobile development. My work spans a wide-ranging tech stack including React, Next.js, Django, Flutter, and CI/CD tooling."
					/>
				</div>
				<div className="pt-4">
					<DetailItem
						startYear="2018"
						endYear="2020"
						title="Software Engineer"
						caption="Myntra-Jabong, Gurgaon (E-commerce)"
						description="At Jabong, I worked on the native iOS app using Swift and Objective-C, and later contributed to Myntra’s React Native mobile app. I implemented key features like rich notifications, seamless login, and the category tab to enhance user experience. I also automated Jabong’s iOS build and deployment process using Jenkins and Fastlane, improving release efficiency. My work spanned across Swift, Objective-C, React Native, JavaScript, and GoLang."
					/>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
