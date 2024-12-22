import Link from 'next/link';
import Image from "next/image";
import stylesFromFeatured from "../Featured/page.module.css";
import stylesForProject from "../TwoArmRobotProject/page.module.css";

export const metadata = {
  title: 'featured',
  description: 'shows all featured projects',
}
  
export default function InvertedPendulum() {
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
                      INVERTED PENDULUM SYSTEM MODELLING
                    </div>

                    <div className = {stylesForProject.mainPhoto}>
                      <Image
                        className = {stylesForProject.singularPhoto}
                        src="/placeholderProjectImage.jpg"
                        alt="placeholder project image"
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
                                          
                                      </div>

                                  </div>
                              </div>

                              <div className = {stylesForProject.collaborator}>
                                  <div className = {stylesForProject.infoTitle}>
                                      Collaborator
                                  </div>

                                  <div className = {stylesForProject.infoFullText}>
                                      <div className = {stylesForProject.infoSubText}>
                                          
                                      </div>

                                      <div className = {stylesForProject.infoSubText}>
                                          
                                      </div>

                                      <div className = {stylesForProject.infoSubText}>
                                          
                                      </div>

                                      <div className = {stylesForProject.infoSubText}>
                                          
                                      </div>
                                  </div>
                              </div>

                              <div className = {stylesForProject.supervisor}>
                                  <div className = {stylesForProject.infoTitle}>
                                      Supervisor
                                  </div>

                                  <div className = {stylesForProject.infoFullText}>
                                      <div className = {stylesForProject.infoSubText}>
                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                            
                          <div className = {stylesForProject.projectParagraph}>
                              Obtained the tranfer function between the input current and the output orientation of the link. 
                              Developed a Simulink/MATLAB code to find the controller parameters that stabilize the pendulum around 0 degrees by trial and error, 
                              showed that the system is unstable when the proportional gain equal 0.01. Found the proportional gain that makes the system marginally stable.
                              Plotted the graphs showing the change in the angular postion of the ball with respect to time.
                              Investigated the effect of controller gains on the system performance. Selected gains that make the system under-damped, critically damped, and over-damped.
                          </div>  
                        </div>

                        <div className = {stylesForProject.moreImages}>
                          <div className = {stylesForProject.projectText}>

                          </div>

                          <div className = {stylesForProject.projectImageInside}>

                          </div>

                          <div className = {stylesForProject.projectImageInside}>

                          </div>

                          <div className = {stylesForProject.projectText}>
                              
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