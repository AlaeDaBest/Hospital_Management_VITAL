import React from "react";
import Header from "./Header";
const Home=()=>{
    const doctors=[];
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
                    {doctors.map((doctor,i)=>(
                        <div key={i}>
                            h
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}
export default Home;