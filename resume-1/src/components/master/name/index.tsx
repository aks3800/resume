import * as React from 'react';
import { Heading, Text } from '@innovaccer/design-system';

interface INameComponentProps {}

const NameComponent: React.FunctionComponent<INameComponentProps> = (props) => {
	return (
		<div className="">
			<div className="bg-light" style={{ height: 'var(--spacing-2)' }}></div>
			<div className="d-flex flex-column align-items-center">
				<div className="bg-light w-100 d-flex justify-content-center">
					<Heading size="xl" className="bolder">
						A K S H A T
					</Heading>
				</div>
				<div className="d-flex flex-column align-items-center w-100 custom-bg">
					<Heading size="xl" className="pt-5 pl-4 bold">
						S H A R M A
					</Heading>
					<Text className="pt-4 italic" appearance="subtle">
						Senior Software Engineer
					</Text>
				</div>
			</div>
		</div>
	);
};

export default NameComponent;
