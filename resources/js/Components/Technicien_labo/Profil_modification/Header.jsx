import React from "react";
const Header=(props)=>{
    return(
        <header>
            <section id="header">
                <article className="header_article" id="title">
                    <img id="logo" src="Images/Home/Logo.png" alt="" />
                    <h1>VITAL</h1>
                </article>
                <article className="header_rticle" id="title">
                    <h2>{props.title}</h2>
                </article>
            </section>
        </header>
    )
}
export default Header;