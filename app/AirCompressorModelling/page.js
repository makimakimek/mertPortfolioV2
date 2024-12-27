import Link from 'next/link';
import Image from "next/image";
import stylesFromFeatured from "../Featured/page.module.css";
import stylesForProject from "../TwoArmRobotProject/page.module.css";

export const metadata = {
  title: 'featured',
  description: 'shows all featured projects',
}

export default function AirCompressorModelling() {
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
                      3D MODELLING OF AN AIR COMPRESSOR
                    </div>

                    <div className = {stylesForProject.mainPhoto}>
                        <div className = {stylesForProject.singleVideo}>
                            <video controls muted autoPlay>
                                <source src = "/airCompressor/FinalAssemblySequence.mp4" type = "video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className = {stylesForProject.infoAndParagraph}>
                          <div className = {stylesForProject.info}>
                              <div className = {stylesForProject.contribution}>
                                  <div className = {stylesForProject.infoTitle}>
                                      Contribution
                                  </div>

                                  <div className = {stylesForProject.infoFullText}>
                                        <div className = {stylesForProject.infoSubText}>
                                            Drawing and modeling of the ball bearing, head, cylinder.
                                        </div>

                                        <div className = {stylesForProject.infoSubText}>
                                            Creating the assembly and the assembly sequence animation, exploded view and draft, drafts of the sketches.
                                        </div>
                                    </div>
                                </div>

                                <div className = {stylesForProject.collaborator}>
                                  <div className = {stylesForProject.infoTitle}>
                                      Collaborator
                                  </div>

                                  <div className = {stylesForProject.infoFullText}>
                                        <div className = {stylesForProject.infoSubText}>
                                            Hikmet Batuhan Balkı
                                        </div>

                                        <div className = {stylesForProject.infoSubText}>
                                            Erkin Püren
                                        </div>

                                        <div className = {stylesForProject.infoSubText}>
                                            Ahmet Mete Coşkun
                                        </div>
                                    </div>
                                </div>

                                <div className = {stylesForProject.supervisor}>
                                  <div className = {stylesForProject.infoTitle}>
                                      Supervisor
                                  </div>

                                  <div className = {stylesForProject.infoFullText}>
                                        <div className = {stylesForProject.infoSubText}>
                                            Prof. Dr. Ismail Lazoğlu
                                        </div>

                                        <div className = {stylesForProject.infoSubText}>
                                            T.A. Berkay Demiryülek
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className = {stylesForProject.projectParagraph}>
                                By using Siemens NX I re-created the components of an air compressor to later assemble and then to simulate the
                                motion.
                            </div>  
                        </div>

                        <div className = {stylesForProject.moreImages}>
                            <div className = {stylesForProject.moreImagesRowFor4}>
                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/A.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/A2.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/AB.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/AB2.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />
                            </div>

                            <div className = {stylesForProject.moreImagesRowFor4}>
                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/D.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/D.jpeg"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/E.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/E.jpeg"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />
                            </div>

                            <div className = {stylesForProject.moreImagesRowFor4}>
                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/B.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/B.jpeg"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/C.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/C.jpeg"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />
                            </div>

                            <div className = {stylesForProject.moreImagesRowFor2}>
                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/F.png"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />

                              <Image
                                className = {stylesForProject.projectImageInside}
                                src="/airCompressor/F.jpeg"
                                alt="drawing"
                                width={1000}
                                height={1000}
                              />
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