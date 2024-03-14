
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TopBar from "../components/NavTop";
import { FaAddressBook, FaEnvelope, FaPhone } from "react-icons/fa";

const Dashboard = () => {

    return (
        <>
            <TopBar />
            <div className="app-container">

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://miro.medium.com/v2/resize:fit:750/1*-PCwcSZBQKJpHg3uumHEmQ.jpeg" className="d-block w-100" alt="First Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 >Welcome to <span>Green</span></h2>
                            <p >Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <Link to="/zero" className="btn-get-started animate_animated animate_fadeInUp scrollto">Read More</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.licdn.com/dms/image/D5612AQG165WkQ2h95Q/article-cover_image-shrink_600_2000/0/1705389677752?e=2147483647&v=beta&t=InYGjjmj4ARlD7htYTt_RCpgSHYVuFsfFWqdXlgkkPw" className="d-block w-100" alt="Second Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 >Welcome to <span>Green</span></h2>
                            <p >Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <Link to="/eco" className="btn-get-started animate_animated animate_fadeInUp scrollto">Read More</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://stateofgreen.com/en/wp-content/uploads/2018/05/news_largepicture_12191_1200x320_5971be357af94.jpg" className="d-block w-100" alt="Third Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 >Welcome to <span>Green</span></h2>
                            <p >Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <button class="btn-get-started animate__animated animate__fadeInUp scrollto" >Read More</button>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section id="cta" className="cta mt-5">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Join Our Newsletter</h3>
                            <p>    Stay informed and be part of our community! Subscribe to our newsletter to receive updates on the latest news, exclusive offers, and eco-friendly tips directly to your inbox.</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <a className="cta-btn align-middle" href="#">Subscribe</a>
                        </div>
                    </div>

                </div>
            </section>

            <section id="contact" className="contact mt-3">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <FaAddressBook className='icon mt-2' />
                                    <h4>Location:</h4>
                                    <p>Tirane , Albania</p>
                                </div>

                                <div className="email">
                                    <h4>Email:</h4>
                                    <FaEnvelope className='icon' />
                                    <p>berberiarbri@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <FaPhone className='icon mt-2' />
                                    <h4>Call:</h4>
                                    <p>+355 69 65 10 090</p>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47934.0659648627!2d19.776537970314195!3d41.33324177336964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1707511389520!5m2!1sen!2s" frameBorder="0"
                                    style={{ border: '0', width: '100%', height: '290px' }} allowFullScreen></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
                <Footer></Footer>
            </section>
        </>
    )
}

export default Dashboard;