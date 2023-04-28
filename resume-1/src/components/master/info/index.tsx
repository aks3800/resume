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
			<InfoItem heading="Name" caption="Mansi Sharma" icon="person" />
			<InfoItem heading="Address" caption="Arc C, Al'Oud St,Al Reem Island,Abu Dhabi" icon="location_city" />
			<InfoItem heading="Phone" caption="+971-551053376, +91-8375021245" icon="phone_iphone" />
			<InfoItem heading="Email" caption="mansi.sharma596@gmail.com" icon="email" />
		</div>
	);
};

export default InfoComponent;
