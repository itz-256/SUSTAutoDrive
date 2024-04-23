import React from 'react'
import "./Campus.css";

import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
    return (
        <div className='campus' id='articles'>
            <div className="gallery">
                <p>
                    Shahjalal University of Science and Technology's (SUST) AutoDrive team is making significant strides towards the future of transportation with the development of an autonomous car. To propel our research and development efforts, we have created a virtual training ground using Blender, a powerful 3D creation software.

                    The real-world SUST kiloroad, known for its diverse traffic patterns and controlled environment, will be the inspiration for the virtual training ground. This digital replica will allow the SUST AutoDrive team to:

                    Safely Test Autonomous Systems:
                    The virtual test track eliminates the risks associated with real-world testing, enabling the team to experiment with various driving scenarios and algorithms without jeopardizing safety.

                    Simulate Complex Traffic Conditions:
                    The virtual environment can be meticulously crafted to include elements like traffic lights, pedestrians, cyclists, and different weather conditions. This allows for comprehensive testing of the autonomous car's ability to handle diverse situations.

                    Efficiently Gather Data:
                    The virtual test track provides a controlled platform to collect valuable data on the performance of the autonomous car's systems. This data can then be used to refine algorithms and improve overall functionality.

                    The creation of the virtual SUST kiloroad represents the initial phase of SUST AutoDrive's project. We can expect to see the team leverage the data and insights gained from the virtual environment to refine their autonomous car's capabilities. The ultimate goal is likely the transition to real-world testing on the physical SUST kiloroad, paving the way for a future of intelligent vehicles in Bangladesh.
                </p> <br />
                <p>
                    Our roads could be on the verge of a revolution with the rise of autonomous vehicles (AVs). These self-driving cars hold the promise of a dramatic decrease in accidents, thanks to their ability to follow traffic laws flawlessly and react faster than humans. Traffic congestion could become a distant memory as AVs communicate with each other and infrastructure, leading to smoother traffic flow.

                    Imagine a world where everyone has access to transportation, regardless of age or ability. AVs could offer a lifeline of independence for those who can't drive themselves. The environment could also benefit with the potential for cleaner-burning, more efficient AVs and a reduction in traffic-related emissions.

                    Of course, challenges remain. We need clear regulations and robust cybersecurity measures to ensure safe and ethical development of AV technology. The potential impact on jobs in the traditional transportation sector also requires attention.

                    Despite these hurdles, the potential of AVs to create a safer, more accessible, and environmentally friendly transportation system is undeniable.
                </p> <br />
                <p>
                    The Stanley control (Front wheel feedback) algorithm is a pioneering approach used in self-driving cars to navigate off-road terrains and follow predefined paths. Here's an overview of how it works:

                    1. Global Path Planning: The algorithm begins with a global path planned using GPS waypoints or other navigation systems. This path defines the desired trajectory for the vehicle.

                    2. Localization: The vehicle's position is determined using sensors such as GPS, IMU (Inertial Measurement Unit), and wheel encoders. This information is crucial for the vehicle to know where it is relative to the planned path.

                    3. Error Calculation: The Stanley algorithm calculates two main errors: lateral error and heading error. Lateral error measures the distance between the vehicle's actual position and the nearest point on the planned path. Heading error represents the difference between the vehicle's orientation and the tangent of the planned path at the nearest point.

                    4. Control Strategy: Using the calculated errors, the algorithm generates steering commands to keep the vehicle on the desired path. The steering commands are typically proportional to the lateral error and inversely proportional to the vehicle's speed, aiming to minimize both lateral and heading errors.

                    5. Feedback Control: The Stanley controller continuously adjusts steering commands based on real-time sensor feedback, allowing the vehicle to dynamically respond to changes in the environment and maintain stable navigation.

                    6. Integration with Perception Systems: The Stanley algorithm can be integrated with perception systems such as LIDAR, cameras, and radar to detect obstacles and adjust the planned path accordingly, ensuring safe navigation in complex environments.

                    Overall, the Stanley control algorithm has been influential in the development of self-driving cars, providing a robust framework for path following and navigation in challenging off-road conditions.
                </p>
            </div>
            <button className='btn dark-btn'>
                See More Here
                <img src={white_arrow} alt="" />
            </button>

        </div>
    )
}

export default Campus
