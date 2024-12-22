import Link from 'next/link';
import Image from "next/image";
import stylesFromFeatured from "../Featured/page.module.css";
import stylesForProject from "../TwoArmRobotProject/page.module.css";

export const metadata = {
  title: 'featured',
  description: 'shows all featured projects',
}

export default function BallBalancer() {
  return (
    <>
        <div className = {stylesForProject.page}>
            <div className = {stylesFromFeatured.navAndProjects}>
                <div className = {stylesFromFeatured.navigationAndName}>
                    <div className = {stylesFromFeatured.name}>
                        Mert Ayhan Tandoğdu
                    </div>

                    <div className = {stylesFromFeatured.navigationTab}>
                        <div className = {stylesFromFeatured.nodes}>
                            NODES
                        </div>

                        <div className = {stylesFromFeatured.menu}>
                            <Link href = "/Featured">
                                <div className = {stylesFromFeatured.menuItem}>
                                    index
                                </div>
                            </Link>
                            
                            <div className = {stylesFromFeatured.menuItem}>
                                <div className = {stylesFromFeatured.dropdownProjects}>
                                    <div className = {stylesFromFeatured.dropdownTitle}>
                                        projects +
                                    </div>

                                    <div className = {stylesFromFeatured.dropdownContent}>
                                        <Link href = "/FloraPod" className = {stylesFromFeatured.dropdownItem}>Climate Controlled Portable Greenhouse System</Link>
                                        <Link href = "/TwoArmRobotProject" className = {stylesFromFeatured.dropdownItem}>Using a Two-Arm Robot System to Write Initials</Link>
                                        <Link href = "/InvertedPendulum" className = {stylesFromFeatured.dropdownItem}>Inverted Pendulum System Modelling</Link>
                                        <Link href = "/BallBalancer" className = {stylesFromFeatured.dropdownItem}>Ball Balancer System Control Modelling</Link>
                                        <Link href = "/BridgeCable" className = {stylesFromFeatured.dropdownItem}>Structural Analysis of a Bridge Cable</Link>
                                        <Link href = "/FluidFlowSimulation" className = {stylesFromFeatured.dropdownItem}>Fluid Flow Simulation Through an Expanding Pipe</Link>
                                        <Link href = "/AirCompressorModelling" className = {stylesFromFeatured.dropdownItem}>3D Modelling of an Air Compressor</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = {stylesFromFeatured.menuItem}>
                                <div className = {stylesFromFeatured.dropdownProjects}>
                                    <div className = {stylesFromFeatured.dropdownTitle}>
                                        about me
                                    </div>

                                    <div className = {stylesFromFeatured.dropdownContent}>
                                        <a href = "https://www.linkedin.com/in/mert-ayhan-tando%C4%9Fdu-583266237/?locale=es_ES&trk=people-guest_people_search-card" className = {stylesFromFeatured.dropdownItemForAbout} target = "_blank">LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            <a href = "https://www.google.com" className = {stylesFromFeatured.link} target = "_blank">
                                <div className = {stylesFromFeatured.menuItem}>
                                    resume
                                </div>
                            </a>
                        </div> 
                    </div>
                </div>

                <div className = {stylesForProject.projectCollectionInside}>
                  <div className = {stylesFromFeatured.mainTitle}>
                    BALL BALANCER CONTROL MODELLING
                  </div>
                
                  <div className = {stylesForProject.mainPhoto}>
                    <Image
                      className = {stylesForProject.singularPhoto}
                      src="/ballBalancer/marginallyStable.gif"
                      alt="a gif of the ball balancer in a marginally stable system"
                      layout="responsive"
                      width={100}
                      height={100}
                    />

                    <Image
                      className = {stylesForProject.singularPhoto}
                      src="/ballBalancer/overdamped.gif"
                      alt="a gif of the ball balancer in an overdamped stable system"
                      layout="responsive"
                      width={100}
                      height={100}
                    />

                    <Image
                      className = {stylesForProject.singularPhoto}
                      src="/ballBalancer/underdamped.gif"
                      alt="a gif of the ball balancer in an underdamped system"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className = {stylesForProject.infoAndParagraph}>
                    <div className = {stylesForProject.info}>
                        <div className = {stylesForProject.contribution}>
                            <div className = {stylesForProject.infoTitle}>
                                Contribution
                            </div>

                            <div className = {stylesForProject.infoFullText}>
                                <div className = {stylesForProject.infoSubText}>
                                    MATLAB code
                                </div>

                                <div className = {stylesForProject.infoSubText}>
                                    project report
                                </div>
                            </div>
                        </div>

                        <div className = {stylesForProject.collaborator}>
                            <div className = {stylesForProject.infoTitle}>
                                Collaborator
                            </div>

                            <div className = {stylesForProject.infoFullText}>
                                <div className = {stylesForProject.infoSubText}>
                                    Burak Barış
                                </div>

                                <div className = {stylesForProject.infoSubText}>
                                    Utku Berkay Gençaslan
                                </div>
                            </div>
                        </div>

                        <div className = {stylesForProject.supervisor}>
                            <div className = {stylesForProject.infoTitle}>
                                Supervisor
                            </div>

                            <div className = {stylesForProject.infoFullText}>
                                <div className = {stylesForProject.infoSubText}>
                                    Prof. Dr. Çağatay Başdoğan
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    <div className = {stylesForProject.projectParagraph}>
                        {/*Obtained the transfer function between the input current and the output position of the ball.
                        The position of the ball is measured using an ultrasonic sensor and fed back to the system via a unity feedback loop
                        to control the ball position using a PD controller. Using the root-locus approach, find the range of gain values that
                        makes the system stable. Developed a Simulink model to simulate the system’s response to a disturbance signal, which 
                        disturbs the angle of the beam. Designed a PD controller that satisfies the constraint of settling time being bigger 
                        than 4 seconds.*/}
                        The purpose of this project is to present the analysis and design of a control
                        system for a beam and ball system. The system&apos;s response to a disturbance signal,
                        which affects the angle of the beam (θ), is simulated using a Simulink model. A PD
                        controller is designed to meet the specified constraint of a settling time of fewer than 4
                        seconds with the root-locus approach that is utilized with the &quot;Control System
                        Designer&quot; toolbox. In addition to simulating the system&apos;s response, the report focuses
                        on visualizing the movements of the ball on the beam. The outputs of the Simulink
                        model, namely the beam&apos;s angular position (θ(t)) and the ball&apos;s position (x(t)), are
                        stored and animated in MatLab. The length of the beam (L) is assumed to be 60 cm,
                        and the radius of the ball (r) is assumed to be 5 cm. The &quot;drawBallnBeam.m&quot; function
                        is provided to draw the circle representing the ball and the beam in MatLab.
                        Furthermore, the effect of controller gains (K p , K d ) on the system&apos;s performance is
                        investigated. Different sets of gains are selected to analyse three distinct conditions:
                        marginally stable, underdamped, and overdamped. The corresponding graphs are
                        plotted to illustrate the angular position of the beam and the position of the ball.
                        Additionally, the closed-loop pole-zero maps are plotted, and their effects on the
                        system&apos;s response are analysed. It is ensured that the controllers for these conditions
                        successfully reject the disturbance.
                    </div>  
                </div>

                <div className = {stylesForProject.projectVideos}>
                    <div className = {stylesForProject.videosMainTitle}>
                        PROJECT VIDEOS
                    </div>

                    <div className = {stylesForProject.videoRow}>
                        <div className = {stylesForProject.singleVideo}>
                            <video controls>
                                <source src = "/ballBalancer/video2.mp4" type = "video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className = {stylesForProject.videoTitle}>
                                CODE VIDEO PART 1
                            </div>
                        </div>

                        <div className = {stylesForProject.ingleVideo}>
                            <video controls>
                                <source src = "/ballBalancer/video3.mp4" type = "video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className = {stylesForProject.videoTitle}>
                                CODE VIDEO PART 2
                            </div>
                        </div>
                    </div>
                            
                    <div className = {stylesForProject.videoRow}>
                        <div className = {stylesForProject.singleVideo}>
                            <video controls>
                                <source src = "/ballBalancer/video1.mp4" type = "video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className = {stylesForProject.videoTitle}>
                                CODE VIDEO PART 3
                            </div>
                        </div>

                        <div className = {stylesForProject.singleVideo}>
                            <video controls>
                                <source src = "/ballBalancer/video6.mp4" type = "video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className = {stylesForProject.videoTitle}>
                                CODE VIDEO PART 4
                            </div>
                        </div>
                    </div>                         
                </div>

                <div className = {stylesForProject.projectReportSection}>
                    <div className = {stylesForProject.projectReportTitle}>
                        PROJECT REPORT
                    </div>

                    <div className = {stylesForProject.projectReport}>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className = {stylesFromFeatured.linkContainer}>
            <Link href = "/Featured">
                <div className = {stylesFromFeatured.indexLink}>index</div>
            </Link>
            <a href = "https://www.google.com" className = {stylesFromFeatured.nextLink}>next</a>
        </div>
      </div>
    </>
  )
}