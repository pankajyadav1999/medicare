import React from "react";
import Slider from "react-slick"; // ======Import Slider=====//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // ====fontawesome====//
// ==== FIXED IMAGE PATHS=====//
import slider_1 from "../assets/images/slider_1.jpg";
import slider_2 from "../assets/images/slider_2.jpg";
import slider_3 from "../assets/images/slider_3.jpg"
import slider_4 from "../assets/images/slider_4.jpg";
import slider_5 from "../assets/images/slider_5.jpg";

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>

            <div className="Home_Slider">
                <Slider {...settings}>
                    <div>
                        <img
                            src={slider_1}
                            alt="Slide 1"
                        />
                    </div>
                    <div>
                        <img
                            src={slider_2}
                            alt="Slide 2"
                        />
                    </div>
                    <div>
                        <img
                            src={slider_3}
                            alt="Slide 3"
                        />
                    </div>
                    <div>
                        <img
                            src={slider_4}
                            alt="Slide 4"
                        />
                    </div>
                    <div>
                        <img
                            src={slider_5}
                            alt="Slide 5"
                        />
                    </div>
                </Slider>


            </div>
            {/* ======end==== */}


            {/* sticker used--- */}
            <div className="stricker_add">
                <div className="row">

                </div>
            </div>

            {/* ----end--- */}

            {/* ===about-section== */}
            <div className="container">
                <div className="About-section my-5">
                    <div className="row g-5">
                        <div className="col-7">
                            <div className="About_side">
                                <h3>About <span className="text-danger fw-bolder">||</span> Us..</h3>
                                <h3 className="border-bottom border-5 border-danger mt-2">Life, Giving, Breakthroughs...</h3>
                                <p className="mt-5 fw-bold text-secondary">We are inspired by <span className="text-danger"> our patients’ </span> courage, our caregivers’ compassion, and our scientists’ curiosity—all fueled by our donors’ generosity.</p>

                                <p className="mt-5 fw-bold text-secondary border-bottom border-2 border-secondry">We are inspired by <span className="text-danger"> With a deep passion for patient well-being,</span> Dr. [John Deo] specializes in [mention key specialties, e.g., internal medicine, pediatrics, cardiology] and is dedicated to offering personalized treatments using the latest advancements in medical science.</p>
                                <p className="mt-5 fw-bold text-secondary">Our goal is to ensure every patient receives comprehensive, compassionate, and effective care, tailored to their unique health needs. </p>
                                <p className="mt-5 fw-bold text-secondary border-bottom border-2 border-secondry">We are inspired by <span className="text-danger"> our patients’ </span> courage, our caregivers’ compassion, and our scientists’ curiosity—all fueled by our donors’ generosity.</p><p className="mt-5 fw-bold text-secondary border-bottom border-2 border-secondry">We are inspired by <span className="text-danger"> Beyond medical expertise, Dr. [Mohan Tiwari] </span>is known for a compassionate approach, taking the time to listen,</p>
                            </div>
                            <a href="#" className="button mt-5">Give Now</a>
                        </div>
                        <div className="col-5">
                            <div className="Image_side">
                            <img src={require("../assets/images/row_alla.png")} alt="ladydoctor" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ====end=== */}
            {/* gap-images */}
            <div className="services">
                <div className="row">
                    <div className="Heading text-center mt-5">
                        <h1 className="text-white fw-bold">Service<span className="text-danger"> + </span>Health</h1>
                    </div>
                    <div className="col-3">
                        <div className="icon_set">
                            <i class="fa-solid fa-notes-medical"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">Note Medical</p>
                    </div>
                    <div className="col-3">
                        <div className="icon_set">
                            <i class="fa-solid fa-house-medical"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3" >House Medical</p>
                    </div>
                    <div className="col-3">
                        <div className="icon_set">
                            <i class="fa-solid fa-house-medical-flag"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">Flag Medical</p>
                    </div>

                    <div className="col-3">
                        <div className="icon_set">
                            <i class="fa-solid fa-house-medical-circle-xmark"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">medical circle Mark</p>
                    </div>
                    <div className="col-3">
                        <div className="icon_set">
                            <i class="fa-solid fa-house-medical-circle-exclamation"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">medical circle exclamation</p>
                    </div>
                    <div className="col-3">
                        <div className="icon_set">
                            <i class="fa-solid fa-house-medical-circle-check"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">medical Circle Check</p>
                    </div>

                    <div className="col-3">
                        <div className="icon_set">

                            <i class="fa-solid fa-truck-medical"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">medical truck</p>
                    </div>

                    <div className="col-3">
                        <div className="icon_set">

                            <i class="fa-solid fa-laptop-medical"></i>
                        </div>

                        <p className="text-center text-warning mt-2 fw-bold fs-3">Medical laptop</p>
                    </div>

                </div>
            </div>


            {/* ----end */}








            {/* ----gride-column---denima- */}
            <div className="Medicare_images">
                <div className="grid-side">
                    <img src={require("../assets/images/doc1.webp")} alt="green.jpeg" />


                </div>
                <div className="grid-side">
                    <img src={require("../assets/images/doc2.webp")} alt="row-bottle.webp" />
                </div>
                <div className="grid-side">
                    <img src={require("../assets/images/row-h22.webp")} alt="row-h22.webp" />
                </div>
                <div className="grid-side">
                    <img src={require("../assets/images/row-injection.webp")} alt="row-injection.webp" />
                </div>

                <div className="grid-side">
                    <img src={require("../assets/images/row-neem.webp")} alt="row-neem.webp" />
                </div>

                <div className="grid-side">
                    <img src={require("../assets/images/doc3.webp")} alt="row-mask.webpreen.jpeg" />
                </div>

                <div className="grid-side">
                    <img src={require("../assets/images/doc4.jpeg")} alt="rowXray.webp" />
                </div>

                <div className="grid-side">
                    <img src={require("../assets/images/doc6.webp")} alt="rowhandmedicine.webp" />
                </div>
                <div className="grid-side">
                    <img src={require("../assets/images/row-pink.webp")} alt="rowhandmedicine.webp" />
                </div>
            </div>
            {/* -----end---- */}
            {/* =======Brigham Health ======== */}
            <div className="medicarehealth text-center my-5">
                <strong className="text-primary mt-3 border-bottom border-success border-2 fs-3 ">Brigham<span className="text-danger">-</span>Health</strong>
                <h1 className="text-dark"><strong>Helping <span className="text-decoration-underline text-danger">our</span> patients</strong></h1>

            </div>

            <div className="Medicare_card my-5">
                <div className="grid-card">
                    <div className="card border-0 shadow">
                        <img src={require("../assets/images/patien_1.avif")} class="border-5 border-secondary" alt="patient" />
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Organic <strong className="text-danger">||</strong> Medicine</h5>
                            <p class="card-text text-start fw-normal p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="button  mt-3">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="card border-0 shadow">
                        <img src={require("../assets/images/patient-4.avif")} class="border-5 border-secondary" alt="patient-4" />
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Nutural <strong className="text-danger">||</strong> Medicine</h5>
                            <p class="card-text text-start fw-normal p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="button  mt-3">Know More</a>
                        </div>
                    </div>
                </div>
                <div className="grid-card">
                    <div className="card border-0 shadow">
                        <img src={require("../assets/images/patient_2.avif")} class="border-5 border-secondary" alt="patien_2" />
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Medi<strong className="text-danger">c</strong>ine</h5>
                            <p class="card-text text-start fw-normal p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="button  mt-3">Know More</a>
                        </div>
                    </div>
                </div>

                <div className="grid-card">
                    <div className="card border-0 shadow">
                        <img src={require("../assets/images/patinet_5.avif")} class="border-5 border-secondary" alt="patinet_5" />
                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Nutural <strong className="text-danger">||</strong> Medicine</h5>
                            <p class="card-text text-start fw-normal p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="button  mt-3">Know More</a>
                        </div>
                    </div>
                </div>
            </div >

            {/* ====end==== */}
        </>
    );
}

export default Home;