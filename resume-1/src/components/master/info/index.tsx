import * as React from 'react';
import { Divider, Text, Link } from '@innovaccer/design-system';
import InfoItem from './info_item';
import Seperator from '../../seperator';
import SectionHeader from '../../section_header';

interface IInfoComponentProps {}

const InfoComponent: React.FunctionComponent<IInfoComponentProps> = (props) => {
	return (
		<div className="custom-bg">
			<div className="px-8">
				<SectionHeader headerText="I N F O" />
			</div>
			<InfoItem heading="Name" caption="Akshat Sharma" icon="person" />
			<InfoItem heading="Role" caption="Senior Software Engineer" icon="badge" />
			<InfoItem heading="Address" caption="Noida, UP" icon="location_city" />
			<InfoItem heading="Phone" caption="+91-9953005833" icon="phone_iphone" />
			<InfoItem heading="Email" caption="akshatsharma3800@gmail.com" icon="email" />
			<div className="d-flex pt-6 pl-10 ">
				<Link appearance="subtle" href="https://github.com/aks3800">
					GitHub
				</Link>
				<Seperator />
				<Link appearance="subtle" href="https://www.linkedin.com/in/aks3800/">
					LinkedIn
				</Link>
			</div>
		</div>
	);
};

export default InfoComponent;
