import Link from 'next/link';
import Image from "next/image";
import stylesFromFeatured from "../Featured/page.module.css";
import stylesForProject from "../TwoArmRobotProject/page.module.css";

export const metadata = {
  title: 'featured',
  description: 'shows all featured projects',
}

export default function BridgeCable() {
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
                      STRUCTURAL ANALYSIS OF A BRIDGE CABLE
                    </div>

                    <div className = {stylesForProject.mainPhotoBridgeCable}>
                        <div className={stylesForProject.gifRows}>
                            <Image 
                              src = "/bridgeCable/D_video.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/E_video.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>

                        <div className={stylesForProject.gifRows}>
                            <Image 
                              src = "/bridgeCable/F_video.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/G_video.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
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
                                        Modeling of Brigde Cable on Siemens NX
                                    </div>

                                    <div className = {stylesForProject.infoSubText}>
                                        ANSYS Static Structural Analysis
                                    </div>
                                </div>
                            </div>

                            <div className = {stylesForProject.supervisor}>
                                <div className = {stylesForProject.infoTitle}>
                                    Supervisor(s)
                                </div>

                                <div className = {stylesForProject.infoFullText}>
                                    <div className = {stylesForProject.infoSubText}>
                                        Prof. Dr. Erdem Alaca
                                    </div>

                                    <div className = {stylesForProject.infoSubText}>
                                        T.A. Levent Demirkazık
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className = {stylesForProject.projectParagraph}>
                            Designed a non-conventional bridge cable that will be connected to the bracket from both sides through a fork terminal. 
                            Observed the effect of bolt pre-adjustment without any external forces applied to the bracket. Removed the bolt pretension 
                            from the bolts and applied the external force of 10 kN to the bracket. Contact status of the plates and brackets was observed 
                            when there is an external force applied to the pin and computed the working loads for the bolts. The proposed design for the 
                            bridge cable support system utilizes the traditional nut and bolt arrangement. This design aims to increase the load-bearing 
                            capability of the system, making it more suitable for structures that will be subjected to heavy loads. To evaluate the safety 
                            and reliability of the proposed design it will be necessary to conduct load testing under different load conditions. 
                        </div>  
                    </div>

                    <div className = {stylesForProject.moreImages}>
                        <div className = {stylesForProject.moreImagesRowFor3}>
                            <Image 
                              src = "/bridgeCable/A_Mesh.png" 
                              className = {stylesForProject.projectImageBridgeCable} 
                              alt = "drawing"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/B_Contacts.png" 
                              className = {stylesForProject.projectImageBridgeCable} 
                              alt = "drawing"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/C.png" 
                              className = {stylesForProject.projectImageBridgeCable} 
                              alt = "drawing"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>
                    </div>

                    <div className = {stylesForProject.moreText}>
                        First the parts were modeled in Siemens NX and then assembled together with constraints. Bolts and nuts are bonded 
                        while all the other connections have frictional contact with friction coefficient of 0.2 between them. Under plate is 
                        fixed from all four sides as fixed support.
                    </div>

                    <div className = {stylesForProject.mainPhotoBridgeCable}>
                        <div className={stylesForProject.gifRows}>
                            <Image 
                              src = "/bridgeCable/I.png" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/J.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>

                        <div className={stylesForProject.gifRows}>
                            <Image 
                              src = "/bridgeCable/K.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/L.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>
                    </div>

                    <div className = {stylesForProject.moreImagesWithText}>
                        <div className = {stylesForProject.singularImageAndText}>
                            <Image 
                              src = "/bridgeCable/M.png" 
                              className = {stylesForProject.singularPhotoWithText} 
                              alt = "a photo" 
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>

                        <div className = {stylesForProject.textSection}>
                            Four different bolt pretensions with adjustment of 0.1mm are assigned to the bolts.
                        </div>
                    </div>

                    <div className = {stylesForProject.mainPhotoBridgeCable}>
                        <div className={stylesForProject.gifRows}>
                            <Image 
                              src = "/bridgeCable/N.gif" 
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/O.gif"
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>

                        <div className={stylesForProject.gifRows}>
                            <Image 
                              src = "/bridgeCable/P_Gap.png"
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />

                            <Image 
                              src = "/bridgeCable/Q.gif"
                              className = {stylesForProject.singularPhotoBridgeCable} 
                              alt = "a gif"
                              layout="responsive"
                              width={100}
                              height={100}
                            />
                        </div>
                    </div>

                    <div className = {stylesForProject.moreText}>
                        In this part we both have bolt pre-adjustments of 0.05mm to all bolts and increased external force 
                        applied to the bracket. We calculate working loads on the bolts and gap status and the gap created between the plates.
                    </div>

                    <div className={stylesForProject.tableSection}>
                        <div className={stylesForProject.tableTitle}>Table 1. Working Load Maximum and Minimums on Bolts with varying Force Magnitudes</div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Force Z Component [kN]</th>
                                    <th>Working Load Minimum [kN]</th>
                                    <th>Working Load Maximum [kN]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>100</td>
                                    <td>29.56</td>
                                    <td>29.82</td>
                                </tr>
                                <tr>
                                    <td>0.1</td>
                                    <td>11.36</td>
                                    <td>11.95</td>
                                </tr>
                                <tr>
                                    <td>200</td>
                                    <td>56.63</td>
                                    <td>56.92</td>
                                </tr>
                                <tr>
                                    <td>50</td>
                                    <td>16.75</td>
                                    <td>17.26</td>
                                </tr>
                                <tr>
                                    <td>150</td>
                                    <td>43</td>
                                    <td>43.26</td>
                                </tr>
                            </tbody>
                        </table>
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