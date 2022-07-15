import React from 'react';
import DetailSection from './components/detail';
import MasterSection from './components/master';
import './styles.css';
import { Button } from '@innovaccer/design-system';

const App = () => {
	return (
		<div className="container overflow-auto d-flex justify-content-center">
			<div className="resume-container d-flex">
				<div className="master-section custom-bg">
					<MasterSection />
				</div>
				<div className="detail-section">
					<DetailSection />
				</div>
			</div>
			<div className="export-button-container p-6">
				<Button>Export</Button>
			</div>
		</div>
	);
};

export default App;
