import { useState } from "react";
import Footer from "./Footer";
import TopBar from "./NavTop";
import { Link } from "react-router-dom";

function Zero() {
    return (
        <>
            <TopBar></TopBar>
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
                        <h2 style={{ color: "black" }}>Zero-Waste Lifestyles</h2>
                        <div className="portfolio-description">
                            <div className="d-flex flex-column align-items-start">
                                <h2 style={{ color: "black" }}>
                                    Defining Zero-Waste Lifestyles:{" "}
                                </h2>
                                <p style={{ color: "black" }}>
                                    At its core, zero-waste living is a philosophy that encourages
                                    individuals to minimize their production of waste, with the
                                    ultimate goal of sending nothing to landfills or incinerators.
                                    This goes beyond recycling; it involves rethinking our entire
                                    relationship with resources, from production to consumption
                                    and disposal. It advocates for a circular economy where
                                    materials are continually reused, reducing the demand for new
                                    resources.
                                </p>
                                <h2 style={{ color: "black" }}>
                                    Importance of Adopting Zero-Waste Practices:
                                </h2>
                                <p style={{ color: "black" }}>
                                    The urgency of adopting zero-waste practices is underscored by
                                    the alarming environmental challenges we face today.
                                    Overflowing landfills, pollution of oceans, and the depletion
                                    of natural resources demand a radical shift in our lifestyle
                                    choices. Zero-waste living aligns with the principles of
                                    sustainability, promoting a more responsible and mindful
                                    approach to resource use.
                                </p>

                                <h2 style={{ color: "black" }}>
                                    Key Components of Zero-Waste Lifestyles:
                                </h2>
                                <p style={{ color: "black" }}>
                                    Zero-waste living encompasses various elements, each
                                    contributing to the overall reduction of waste. Sustainable
                                    consumer practices involve making informed choices about the
                                    products we buy, opting for items with minimal packaging or
                                    those made from recycled materials. Circular economy models
                                    emphasize the importance of reusing and recycling materials in
                                    a closed loop. Additionally, waste reduction and recycling
                                    technologies play a crucial role in minimizing the
                                    environmental impact of our daily activities.
                                </p>
                            </div>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-12 mt-4">
                                <img src="https://cdn.shopify.com/s/files/1/0266/7370/9153/files/Ways_to_live_trash_free_1024x1024.jpg?v=1681273670"></img>
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h3 className="text-dark">Zero-Waste Tips:</h3>
                            <ul className="d-flex gap-2">
                                <li>
                                    <strong>Use Shopping Bags</strong>: Bring your own reusable
                                    shopping bags to minimize the consumption of single-use
                                    plastic bags and reduce your environmental footprint.
                                </li>
                                <li>
                                    <strong>Reusable Cups</strong>: Opt for reusable cups and
                                    containers for your beverages, helping to cut down on
                                    disposable cup waste and encouraging a more sustainable,
                                    waste-free lifestyle.
                                </li>
                                <li>
                                    <strong>Separate Garbage</strong>: Implement a waste
                                    separation system at home to efficiently recycle and compost,
                                    ensuring that less waste ends up in landfills and contributing
                                    to a healthier environment.
                                </li>
                                <li>
                                    <strong>Use Green Energy</strong>: Make the switch to
                                    renewable energy sources like solar or wind power to reduce
                                    your carbon footprint and support a cleaner, more sustainable
                                    energy future.
                                </li>
                                <li>
                                    <strong>Cook At Home</strong>: Embrace cooking at home as a
                                    zero-waste practice by using fresh, local ingredients with
                                    minimal packaging, ultimately reducing the reliance on
                                    processed and packaged foods that contribute to excess waste.
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

export default Zero;