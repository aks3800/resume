import React from 'react';
import DetailSection from './components/detail';
import MasterSection from './components/master';
import './styles.css';
import { Button } from '@innovaccer/design-system';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const App = () => {
	const exportResume = () => {
		const input = document.getElementById('resume');
		input &&
			html2canvas(input).then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				const pdf = new jsPDF();
				pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
				pdf.save('resume.pdf');
			});
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
