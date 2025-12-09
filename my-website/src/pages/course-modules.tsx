import React, { JSX } from 'react';
import './course-modules.css';

export default function CourseModules(): JSX.Element {
	return (
		<div className="courseModulesWrapper">
			<h1>Course Modules</h1>

			<div className="courseCard">Module 1: ROS 2</div>
			<div className="courseCard">Module 2: Gazebo Simulation</div>
			<div className="courseCard">Module 3: NVIDIA Isaac & Robotics AI</div>
			<div className="courseCard">Module 4: Humanoid Robotics</div>
			<div className="courseCard">Module 5: Physical AI</div>
		</div>
	);
}
