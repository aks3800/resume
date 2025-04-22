import React from 'react';
import DetailSection from './components/detail';
import MasterSection from './components/master';
import './styles.css';
import { Button } from '@innovaccer/design-system';
const App = () => {
	const exportResume = () => {
		if ((window as any).exportToPDF) {
			(window as any).exportToPDF();
		} else {
			console.error('exportToPDF function is not defined');
		}
	};

	const resumeContainer = () => {
		return (
			<div className="resume-container d-flex" id="resume">
				<div className="master-section custom-bg">
					<MasterSection />
				</div>
				<div className="detail-section">
					<DetailSection />
				</div>
			</div>
		);
	};

	return (
		<div className="container overflow-auto d-flex justify-content-center">
			{resumeContainer()}
			<div className="export-button-container p-6" onClick={exportResume}>
				<Button>Export</Button>
			</div>
		</div>
	);
};

export default App;
