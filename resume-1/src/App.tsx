import React from 'react';
import DetailSection from './components/detail';
import MasterSection from './components/master';
import './styles.css';

const App = () => {
	return (
		<div className="container overflow-auto d-flex justify-content-center">
			<div className="resume-container d-flex">
				<div className="master-section custom-bg">
					<MasterSection />
				</div>
				<div className="detail-section bg-primary">
					<DetailSection />
				</div>
			</div>
		</div>
	);
};

export default App;
