import React from "react";
import styles from "./styles.module.css";


const FeatureList = [
  {
    title: "ROS 2 Fundamentals",
    img: "/img/ros2-bot.png",
    description: (
      <>
        Master the Robotic Operating System that powers modern robots. Learn
        nodes, topics, services, and advanced patterns for building intelligent
        robotic systems.
      </>
    ),
  },
  {
    title: "Robot Simulation",
    img: "/img/star-sim.png",
    description: (
      <>
        Build and test robots in Gazebo before deploying to real hardware.
        Create URDF models, simulate physics, and integrate sensors in a safe
        virtual environment.
      </>
    ),
  },
  {
    title: "AI-Powered Intelligence",
    img: "/img/ai-cloud.png",
    description: (
      <>
        Leverage NVIDIA Isaac and Vision-Language-Action models for perception,
        navigation, and manipulation. Deploy AI to Jetson edge devices for
        autonomous operation.
      </>
    ),
  },
];

function Feature({ title, img, description }) {
  return (
    <div className={styles.featureBox}>
      <img src={img} alt={title} className={styles.featureIcon} />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        {FeatureList.map((item, index) => (
          <Feature key={index} {...item} />
        ))}
      </div>
    </section>
  );
}


