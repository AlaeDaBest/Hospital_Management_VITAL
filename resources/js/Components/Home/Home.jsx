import React from "react";
import Header from "./Header";
import DoctorCarousel from "./DoctorCarousel";
import Footer from "./Footer";
const Home=()=>{
    const doctors = [
        {
            id:0,
          name: "Beatrice Surman",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc1.jpg",
        },
        {
            id:1,
          name: "Beatrice Surman",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc1.jpg",
        },
        {
            id:2,
          name: "Beatrice Surman",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc1.jpg",
        },
        {
            id:3,
          name: "Penelope Eckhart",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc2.jpg",
        },
        {
            id:4,
          name: "Beatrice Surman",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc3.jpg",
        },
        {
            id:5,
          name: "Penelope Eckhart",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc2.jpg",
        },
        {
            id:6,
          name: "Beatrice Surman",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc3.jpg",
        },
        {
            id:6,
          name: "Beatrice Surman",
          specialty: "Cardiologist",
          image: "Images/Home/Doctors/doc3.jpg",
        },
      ];
    return(
        <div>
            <Header/>
            <main>
                <section id="background">
                    <img src="Images/Home/background.jpg" alt="" />
                </section>
                <section id="background_text">
                    <div>
                        <img src="Images/Home/logo.png" alt="" />
                    </div>
                    <div>
                        <h1>VITAL</h1>
                        <p>DES SOINS ESSENTIELS UN AVENIR VITAL</p>
                    </div>
                </section>
                <section id="services-container">
                    <article className="services">
                        <h3>Chirurgie</h3>
                        <div>
                            <img src="Images/Icons/chirurgie.png" alt="" />
                        </div>
                    </article>
                    <article className="services">
                        <h3>Laboratoire</h3>
                        <div>
                            <img src="Images/Icons/laboratory.png" alt="" />
                        </div>
                    </article>
                    <article className="services">
                        <h3>Urgence</h3>
                        <div>
                            <img src="Images/Icons/emergency.png" alt="" />
                        </div>
                    </article>
                </section>
                <section>
                    <DoctorCarousel doctors={doctors} />
                </section>
            </main>
            <Footer/>
        </div>
    )
}
export default Home;