import Link from 'next/link';
import Image from "next/image";
import stylesFromFeatured from "../Featured/page.module.css";
import stylesForProject from "./page.module.css";

export const metadata = {
    title: 'featured',
    description: 'shows all featured projects',
  }
  
  export default function TwoArmRobotProject() {
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
                          USING A TWO-ARM ROBOT SYSTEM TO WRITE INITIALS
                      </div>

                      <div className = {stylesForProject.mainPhoto}>
                          <div className = {stylesForProject.twoArmRobotVideo}>
                              <video controls muted autoPlay>
                                  <source src = "/twoArmRobot/Two-Arm-Robot-Video.mp4" type = "video/mp4" />
                                      Your browser does not support the video tag.
                              </video>
                          </div>
                          
                          {/*<img src = {mainProjectPhoto} className = "singularPhoto" alt = "an image of two arm robot project"/>*/}
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
                                  </div>
                              </div>

                              <div className = {stylesForProject.supervisor}>
                                  <div className = {stylesForProject.infoTitle}>
                                      Supervisor
                                  </div>

                                  <div className = {stylesForProject.infoFullText}>
                                      <div className = {stylesForProject.infoSubText}>
                                          Prof. Dr. Murat Sözer
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className = {stylesForProject.projectParagraphAndLinks}>
                              <div className = {stylesForProject.projectParagraph}>
                                  Controlled the input arm&apos;s angular position and speed with time, and solved the angular positions
                                  and speeds of the driven arms.
                              </div>

                              <div className = {stylesForProject.projectLink}>
                                  <a href = "https://www.google.com" className = {stylesFromFeatured.nextLink}>PowerPoint Presentation</a>
                                  <a href = "https://www.google.com" className = {stylesFromFeatured.nextLink}>MatLab Project Code</a>
                              </div>
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