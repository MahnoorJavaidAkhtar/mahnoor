module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome to the Physical AI & Humanoid Robotics Textbook',
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2',
      items: [
        'module-1-ros2/week1-introduction',
        'module-1-ros2/week2-physical-ai-landscape',
        'module-1-ros2/week3-ros2-architecture-nodes',
        'module-1-ros2/week4-ros2-topics-services',
        'module-1-ros2/week5-ros2-advanced-patterns',
      ],
    },
    {
  type: 'category',
  label: 'Module 2: Gazebo Simulation',
  items: [
    'module-2-gazebo/week6-simulation-concepts',
    'module-2-gazebo/week7-robot-modeling-urdf',
    'module-2-gazebo/week8-gazebo-sensors',
    'module-2-gazebo/week9-gazebo-controllers',
  ],
},
{
  type: 'category',
  label: 'Module 3: NVIDIA Isaac & Robotics AI',
  items: [
    'module-3-nvidia-isaac/week10-intro-isaac-sim',
    'module-3-nvidia-isaac/week11-isaac-pipeline-usd',
    'module-3-nvidia-isaac/week12-isaac-perception-sensors',
    'module-3-nvidia-isaac/week13-isaac-robotics-ai',
  ],
},
{
  type: 'category',
  label: 'Module 4: Humanoid Robotics',
  items: [
    'module-4-humanoids/week14-humanoid-foundations',
    'module-4-humanoids/week15-biped-locomotion',
    'module-4-humanoids/week16-humanoid-manipulation',
    'module-4-humanoids/week17-humanoid-vision-learning',
  ],
},
{
  type: 'category',
  label: 'Module 5-Physical AI',
  items: [
    'Module 5-Physical AI/week18-physical-ai-foundations',
    'Module 5-Physical AI/week19-perception-action-loops',
    'Module 5-Physical AI/week20-real-environment-intelligence',
  ],
},


  ],
};

