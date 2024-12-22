'use client';

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import styles from "./page.module.css";

export default function FeaturedClient() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
      const toggleMobileNav = () => {
          setMobileNavOpen(!mobileNavOpen);
      };
  
      const NavigationContent = () => (
          <>
              <div className = {styles.name}>
                  Mert Ayhan Tandoğdu
              </div>
  
              <div className = {styles.navigationTab}>
                  <div className = "nodes">
                      NODES
                  </div>
  
                  <div className = {styles.menu}>
                      <Link href = "/">
                          <div className = {styles.menuItem}>
                              index
                          </div>
                      </Link>
                      
                      <div className = {styles.menuItem}>
                          <div className = {styles.dropdownProjects}>
                              <div className = {styles.dropdownTitle}>
                                  projects +
                              </div>
  
                              <div className = {styles.dropdownContent}>
                                  <Link href = "/FloraPod" className = {styles.dropdownItem}>Climate Controlled Portable Greenhouse System</Link>
                                  <Link href = "/TwoArmRobotProject" className = {styles.dropdownItem}>Using a Two-Arm Robot System to Write Initials</Link>
                                  <Link href = "/InvertedPendulum" className = {styles.dropdownItem}>Inverted Pendulum System Modelling</Link>
                                  <Link href = "/BallBalancer" className = {styles.dropdownItem}>Ball Balancer System Control Modelling</Link>
                                  <Link href = "/BridgeCable" className = {styles.dropdownItem}>Structural Analysis of a Bridge Cable</Link>
                                  <Link href = "/FluidFlowSimulation" className = {styles.dropdownItem}>Fluid Flow Simulation Through an Expanding Pipe</Link>
                                  <Link href = "/AirCompressorModelling" className = {styles.dropdownItem}>3D Modelling of an Air Compressor</Link>
                              </div>
                          </div>
                      </div>
                      
                      <div className = {styles.menuItem}>
                          <div className = {styles.dropdownProjects}>
                              <div className = {styles.dropdownTitle}>
                                  about me
                              </div>
  
                              <div className = {styles.dropdownContent}>
                                  <a href = "https://www.linkedin.com/in/mert-ayhan-tando%C4%9Fdu-583266237/?locale=es_ES&trk=people-guest_people_search-card" className = {styles.dropdownItemForAbout} target = "_blank">LinkedIn</a>
                              </div>
                          </div>
                      </div>
  
                      <a href = "https://www.google.com" className = {styles.link} target = "_blank">
                          <div className = {styles.menuItem}>
                              resume
                          </div>
                      </a>
                  </div> 
              </div>
          </>
      );
  
      return (
          <>
              <div className = {styles.featuredPage}>
                  <div className = {styles.navAndProjects}>
                      <div className = {styles.navigationAndName}>
                          <NavigationContent />
                      </div>
  
                      <div className = {styles.projectCollection}>
                          <div className = {styles.mainTitle}>
                              COLLECTION OF MY PROJECTS
                          </div>
  
                          <div className = {styles.projectsFull}>
                              <div className = {styles.projectsRow}>
                                  <Link href = "/FloraPod">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                              className={styles.subImage}
                                              src="/projectImage.jpg"
                                              alt="placeholder image"
                                              layout="responsive"
                                              width={100}
                                              height={100}
                                            />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              Climate Controlled Portable Greenhouse System
                                          </div>
                                      </div>
                                  </Link>
  
                                  <Link href = "/TwoArmRobotProject">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                                className={styles.subImage}
                                                src="/twoArmRobot/ArmPositionGraph.jpg"
                                                alt="an image from the two arm robot project"
                                                layout="responsive"
                                                width={100}
                                                height={100}
                                              />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              Using a Two-Arm Robot System to Write Initials
                                          </div>
                                      </div>
                                  </Link>
                                  
                                  <Link href = "/InvertedPendulum">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                                className={styles.subImage}
                                                src="/projectImage.jpg"
                                                alt="placeholder image"
                                                layout="responsive"
                                                width={100}
                                                height={100}
                                              />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              Inverted Pendulum System Modelling
                                          </div>
                                      </div>
                                  </Link>
                              </div>
  
                              <div className = {styles.projectsRow}>
                                  <Link href = "/BallBalancer">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                                className={styles.subImage}
                                                src="/ballBalancer/ballBalancerMainPhoto.jpg"
                                                alt="an image from the ball balancer project"
                                                layout="responsive"
                                                width={100}
                                                height={100}
                                              />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              Ball Balancer System Control Modelling
                                          </div>
                                      </div>
                                  </Link>
  
                                  <Link href = "/BridgeCable">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                              className={styles.subImage}
                                              src="/bridgeCable/bridgeCableMainPhoto.jpg"
                                              alt="an image from the bridge cable project"
                                              layout="responsive"
                                              width={100}
                                              height={100}
                                            />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              Structural Analysis of a Bridge Cable
                                          </div>
                                      </div>
                                  </Link>
  
  
                                  <Link href = "/FluidFlowSimulation">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                                className={styles.subImage}
                                                src="/projectImage.jpg"
                                                alt="placeholder image"
                                                layout="responsive"
                                                width={100}
                                                height={100}
                                              />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              Fluid Flow Simulation Through an Expanding Pipe
                                          </div>
                                      </div>
                                  </Link>
                              </div>
  
                              <div className = {styles.projectsRow}>
                                  <Link href = "/AirCompressorModelling">
                                      <div className = {styles.projectContainer}>
                                          <div className = {styles.projectImage}>
                                            <Image
                                              className={styles.subImage}
                                              src="/airCompressor/airCompressorMainPhoto.jpg"
                                              alt="an image from the air compressor project"
                                              layout="responsive"
                                              width={100}
                                              height={100}
                                            />
                                          </div>
  
                                          <div className = {styles.projectTitle}>
                                              3D Modelling of an Air Compressor
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
  
                  <div className = {styles.linkContainer}>
                      <Link href = "/">
                          <div className = {styles.indexLink}>index</div>
                      </Link>
                      <Link href = "/TwoArmRobotProject">
                          <div className = {styles.nextLink}>next</div>
                      </Link>
                  </div>
  
                  <button className={styles.mobileNavButton} onClick={toggleMobileNav}>
                    <Image
                      src="/circleMenu.png"
                      alt="a circle menu image"
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </button>
  
                  <div className={`${styles.mobileNav} ${mobileNavOpen ? styles.active : ''}`}>
                      <NavigationContent />
                  </div>
  
              </div>
          </>
      )
  }