import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className = {styles.page}>
        <div className = {styles.openingMessage}>
          Hi! I&apos;m Mert.
        </div>
        
        <div className = {styles.paragraphAndImage}>
          <div className = {styles.fullParagraph}>
            <div className = {styles.paragraph}>
            I have a Bachelor of Science degree in Mechanical Engineering from Koç University.
            </div>
            <div className = {styles.paragraph}>
            Inside you can find all the documentation of my projects I have collaborated on throughout the years.
            </div>
            <div className = {styles.paragraph}>
            Here is my Portfolio.
            </div>
          </div>

          <div className = {styles.imageAndResume}>
            <div className = {styles.imageContainer}>
              <Image
                src="/mertImage.jpg"
                alt="Profile picture"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>

            <div className = {styles.resume}>
              link to my Resume - 
              <a href = "https://www.google.com" target = "_blank" className = "link"> &#128196;</a>
            </div>

            <div className = {styles.goButtonContainer}>
              <Link href = "/Featured">
                <button className = {styles.goButton}>Go!</button>
              </Link>             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}