import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import TopBar from "./NavTop";

function Eco() {
    return (
        <>
            <TopBar/>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2></h2>
                        <ol>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>Portfolio Details</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="col-lg-12">
                        <h2 style={{ color: "black" }}>
                            Eco-Friendly Transportation Solutions
                        </h2>
                        <div className="portfolio-description">
                            <div className="d-flex flex-column align-items-start">
                                <h2 style={{ color: "black" }}>
                                    Defining Eco-Friendly Transportation Solutions:{" "}
                                </h2>
                                <p style={{ color: "black" }}>
                                    Eco-friendly transportation solutions represent a shift
                                    towards sustainable mobility, aiming to minimize the
                                    environmental impact of commuting and travel. These solutions
                                    prioritize energy efficiency, reduced emissions, and
                                    alternative modes of transportation that contribute to a
                                    greener, healthier planet.
                                </p>
                                <h2 style={{ color: "black" }}>
                                    Importance of Adopting Eco-Friendly Transportation Practices:
                                </h2>
                                <p style={{ color: "black" }}>
                                    The critical need for adopting eco-friendly transportation
                                    practices stems from the escalating challenges of air
                                    pollution, climate change, and the depletion of fossil fuels.
                                    As traditional transportation methods contribute significantly
                                    to these issues, embracing eco-friendly alternatives becomes
                                    imperative for a sustainable future.
                                </p>

                                <h2 style={{ color: "black" }}>
                                    Key Components of Eco-Friendly Transportation Solutions:
                                </h2>
                                <p style={{ color: "black" }}>
                                    Eco-friendly transportation is multifaceted, encompassing
                                    diverse components aimed at mitigating the environmental
                                    impact. Public transportation systems with low emissions, the
                                    widespread adoption of electric vehicles, cycling
                                    infrastructure, and pedestrian-friendly urban planning all
                                    contribute to reducing the carbon footprint associated with
                                    transportation.
                                </p>
                            </div>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-12 mt-4">
                                <img src="https://tracextech.com/wp-content/uploads/2023/08/sustainable-transportation.png"></img>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h3 className="text-dark">Eco-Friendly Transportation Tips:</h3>
                            <ul className="d-flex gap-2">
                                <li>
                                    <strong>Choose Electric Vehicles</strong>: Opt for electric or
                                    hybrid vehicles to reduce reliance on fossil fuels and
                                    decrease harmful emissions, promoting a cleaner and more
                                    sustainable mode of transportation.
                                </li>
                                <li>
                                    <strong>Carpooling and Ride-Sharing</strong>: Share rides with
                                    others or use ride-sharing services to reduce the number of
                                    vehicles on the road, optimizing transportation efficiency and
                                    lowering environmental impact.
                                </li>
                                <li>
                                    <strong>Invest in Cycling Infrastructure</strong>: Support and
                                    use cycling infrastructure, promoting a healthier and
                                    environmentally friendly means of commuting that reduces both
                                    traffic congestion and pollution.
                                </li>
                                <li>
                                    <strong>Utilize Public Transportation</strong>: Embrace buses,
                                    trains, and other public transportation options to minimize
                                    the number of individual vehicles on the road, thus decreasing
                                    overall carbon emissions.
                                </li>
                                <li>
                                    <strong>Walkable Urban Planning</strong>: Advocate for and
                                    support urban planning that prioritizes walkability, creating
                                    pedestrian-friendly environments that encourage people to
                                    choose walking as a sustainable transportation mode.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="inner-page">
                <div class="container">
                    <p style={{ color: "black" }}>
                        Embracing zero-waste lifestyles is not just a personal choice; it is
                        a collective responsibility that transcends individual actions. In
                        the face of global environmental challenges, zero-waste living
                        offers a tangible and impactful solution. By reevaluating our
                        consumption patterns, adopting sustainable practices, and advocating
                        for systemic changes, we can pave the way for a more sustainable and
                        resilient future. Zero-waste living is not merely a lifestyle; it is
                        a commitment to the well-being of our planet and future generations.
                    </p>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default Eco;