# Week 15 — Biped Locomotion: Walking, Gait Cycles & Stability 🦿🤖✨

Walking on two legs is one of the **hardest challenges in robotics**.  
Unlike wheeled robots, bipeds are **dynamically unstable** — one small mistake and the robot falls.

This week covers:

- gait cycles  
- walking phases  
- balance control  
- ZMP & CoM trajectory planning  
- footstep planning  
- humanoid stabilization  
- advanced locomotion algorithms  

Let’s dive into humanoid walking — the art of controlled falling. 😄🦿✨

---

## 1. What Is Biped Locomotion? 🚶‍♂️🤖

Biped locomotion = walking using **two legs**.

A biped robot must:

- balance  
- step  
- recover  
- shift weight  
- follow trajectories  
- react to disturbances  

---

## 2. Why Biped Walking Is Hard 😅

Walking is difficult because:

- the robot is top-heavy  
- the support area is tiny  
- balance must be maintained continuously  
- dynamics are nonlinear  
- terrain is unpredictable  

---

## 3. Human-Inspired Walking 🤯🧠

Humans walk by:

- shifting weight  
- swinging one leg  
- catching themselves  
- using momentum  

Robots try to copy this.

---

## 4. Gait Cycle Overview 🔄🦿

A gait cycle includes:

Heel strike → Support phase → Toe-off → Swing phase → Heel strike

yaml
Copy code

---

## 5. Walking Phases 👣

### 1. **Double Support Phase**
Both feet touch the ground.  
Stable — easy to balance.

### 2. **Single Support Phase**
Only one foot touches the ground.  
Unstable — hardest part of walking.

### 3. **Swing Phase**
Leg moves freely in air.

---

## 6. Center of Mass (CoM) Dynamics ⚖️

CoM must move smoothly:

- forward progression  
- height control  
- lateral shift  

A sudden shift → falling.

---

## 7. Zero Moment Point (ZMP) 🌀

ZMP is the point where total ground reaction forces act.

**Condition for stability:**

ZMP must lie within the support polygon.

yaml
Copy code

If ZMP goes outside → robot falls.

---

## 8. Support Polygon 🔷👣

Defined by foot contact points.

Standing:

Two feet → large polygon

scss
Copy code

Walking (single support):

One foot → tiny polygon → unstable

yaml
Copy code

---

## 9. Inverted Pendulum Model 🪄

Robots approximate human walking using:

Linear Inverted Pendulum Model (LIPM)

yaml
Copy code

It simplifies locomotion control.

---

## 10. LIPM Dynamics ⚡📈

Key idea:

Body behaves like a pendulum pivoting around the foot.

yaml
Copy code

Used for:

- CoM trajectory planning  
- stable stepping  

---

## 11. Footstep Planning 👣🗺️

Foot placement planner chooses:

- step length  
- lateral position  
- step timing  
- turning angle  

---

## 12. Step Timing ⏱️

Faster walking:

shorter stance time

yaml
Copy code

Slower walking:

longer stance time

yaml
Copy code

---

## 13. Gait Parameters 🎛️

Main parameters:

- step length  
- cadence  
- step height  
- swing time  
- torso angle  

---

## 14. Swing Leg Trajectory 🦿✨

Swing trajectory must be:

- smooth  
- collision-free  
- dynamically stable  

Using splines like:

- cubic  
- quintic  
- Bezier curves  

---

## 15. Foot Clearance 🌙👣

Robot lifts foot:

- high enough to avoid collision  
- low enough to save energy  

---

## 16. Torso Control 🧍‍♂️🤖

A stable torso is critical for:

- forward momentum  
- natural walking  
- maintaining balance  

---

## 17. Balance During Pushes 💥🤖

Robots must handle:

- shoves  
- wind  
- slips  
- unexpected impacts  

Using:

- ankle strategy  
- hip strategy  
- stepping strategy  

---

## 18. Ankle Strategy 🦶⚖️

Small disturbances → adjust ankle torques.

---

## 19. Hip Strategy 🪢

Larger disturbances → swing torso & hips.

---

## 20. Stepping Strategy 🏃‍♂️💥

If balance is lost → robot MUST take an emergency step.

---

## 21. Whole-Body Control (WBC) 🔗✨

Coordinates:

- arms  
- legs  
- torso  
- head  

All joints work together to maintain stability.

---

## 22. Compliance in Walking 🌈🦿

Soft joints give:

- natural gait  
- shock absorption  
- energy efficiency  

---

## 23. Walking on Uneven Terrain 🌄🤖

Requires:

- foot sensors  
- IMU  
- online trajectory adaptation  
- compliance  

---

## 24. Slope Walking ⛰️

Robot must:

- lean forward uphill  
- lean backward downhill  

---

## 25. Stair Climbing 🪜⚡

One of the hardest tasks:

- high swing clearance  
- precise foot placement  
- strong knee torques  

---

## 26. Turning & Rotation 🔄

Robots turn by:

- pivot stepping  
- differential hip motion  
- torso rotation  

---

## 27. Dynamic Gaits 🏃‍♂️⚡

Advanced humanoids use:

- running  
- hopping  
- skipping  
- jumping  

These require high-performance control.

---

## 28. Energy Efficiency 🔋🧠

Good walking controllers:

- recycle momentum  
- minimize joint torques  
- optimize footstep timing  

---

## 29. Common Walking Failures 🚨🦿

Failures include:

- foot scuffing  
- slipping  
- knee overextension  
- CoM misalignment  
- unstable torso  

---

## 30. Recovery Mechanisms 🔁

Robots recover by:

- adjusting ZMP  
- bending knees  
- widening stance  
- taking extra steps  

---

## 31. Week Summary 🌟🦿💜

This week covered:

- gait cycles  
- support phases  
- ZMP & CoM stability  
- footstep planning  
- inverted pendulum model  
- swing trajectories  
- balance strategies  
- complex locomotion tasks  

Next → **WEEK 16: Manipulation & Whole-Body Control** 🤖🦾✨