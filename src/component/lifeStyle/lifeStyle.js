import './lifeStyle.css';
import Logo from './img/logo.png';
import togglerImg from './img/toggler.png'
import jordanImg from './img/jordan.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const gallery = {
    img1: require('./img/img_1.png').default,
    img2: require('./img/img_2.png').default,
    img3: require('./img/img_3.png').default,
    img4: require('./img/img_4.png').default,
    img5: require('./img/img_5.png').default,

}

export default LifeStyle;
function LifeStyle() {
    return (
        <div className="lifeStyle_wrapper">
            <header>
                <div className="container-fluid">
                    <div className="row row-cols-2 align-items-center">
                        <div className="col company_col">
                            naTarajan <img className="logo" src={Logo} alt="" />
                        </div>
                        <div className="col toggler_col">
                            <button className="btn-toggler">
                                <img src={togglerImg} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section_1">
                <div className="container-fluid">
                    <div className="row row-cols-1">
                        <div className="col">
                            <h1>
                                Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit
                            </h1>
                        </div>
                        <div className="col">
                            <img src={jordanImg} alt="" />
                        </div>
                        <div className="col">
                            <p>
                                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_2 pb-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <img src={gallery.img1} alt="" />
                        </div>
                        <div className="col col_bg d-flex justify-content-center align-items-center">
                            <div className="context_wrapper">
                                <h3>
                                    tempus convallis quis ac lectus.
                            </h3>
                                <h6>
                                    vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. nulla quis lorem ut libero malesuada feugiat. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla porttitor accumsan tincidunt. vivamus suscipit tortor eget felis porttitor volutpat. proin eget tortor risus. vivamus suscipit tortor eget felis porttitor volutpat. mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            </h6>
                            </div>
                        </div>
                        <div className="col col_bg2 d-flex justify-content-center align-items-end">
                            <div className="context_wrapper">

                                <h6>
                                    vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. nulla quis lorem ut libero malesuada feugiat. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla porttitor accumsan tincidunt. vivamus suscipit tortor eget felis porttitor volutpat. proin eget tortor risus. vivamus suscipit tortor eget felis porttitor volutpat. mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            </h6>
                            </div>
                        </div>
                        <div className="col">
                            <img src={gallery.img2} alt="" />
                        </div>

                    </div>
                    <div className="row row-cols-1 pt-5 row-cols-md-2 row-cols-lg-3">
                        <div className="col"> <img src={gallery.img3} alt="" /></div>
                        <div className="col"> <img src={gallery.img4} alt="" /></div>
                        <div className="col"> <img src={gallery.img5} alt="" /></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-5">
                            <h6>
                                vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. nulla quis lorem ut libero malesuada feugiat. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla porttitor accumsan tincidunt. vivamus suscipit tortor eget felis porttitor volutpat. proin eget tortor risus. vivamus suscipit tortor eget felis porttitor volutpat. mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            </h6>
                        </div>
                        <div className="col-sm-5">
                            <h6>
                                vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. nulla quis lorem ut libero malesuada feugiat. vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla porttitor accumsan tincidunt. vivamus suscipit tortor eget felis porttitor volutpat. proin eget tortor risus. vivamus suscipit tortor eget felis porttitor volutpat. mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                            </h6>
                        </div>
                        <div className="col-12 end_col">
                            <h1 classNamed="d-flex">
                                naTarajan
                            <img src={Logo} alt="" />
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer_section py-5">
                <div className="container-fluid">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                        <div className="col">
                            <ul>
                                <li>SHOP</li>
                                <li><a href="#"> Women </a></li>
                                <li><a href="#"> Divided </a></li>
                                <li><a href="#"> Men </a></li>
                                <li><a href="#"> Kids </a></li>
                                <li><a href="#"> naTarajan HOME </a></li>
                                <li><a href="#"> Student Discount </a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Corporate info</li>
                                <li><a href="#">Career at naTarajan </a></li>
                                <li><a href="#"> About Natarajan </a></li>
                                <li><a href="#">Sustainability </a></li>
                                <li><a href="#"> Press </a></li>
                                <li><a href="#"> Investor Relations </a></li>
                                <li><a href="#"> Corporate Governance </a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Help</li>
                                <li><a href="#">Customer Service </a></li>
                                <li><a href="#"> My Account </a></li>
                                <li><a href="#"> Legal & Privacy </a></li>
                                <li><a href="#">Contact </a></li>
                                <li><a href="#"> Gift Card </a></li>
                                <li><a href="#">CA Supply Chains Act </a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Become a Member</li>
                                <li><a href="#"> Join now and get 10% off your next purchase!</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5">
                        The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB. H&M is committed to accessibility. That commitment means H&M embraces WCAG
                        <a href="#">
                        READ MORE
                        </a>

                    </p>
                    <ul className="social_icon_list d-flex justify-content-center">
                        <li className="pr-3"><a href="#"> <i class="fab fa-2x fa-facebook    "></i> </a></li>
                        <li className="pr-3"><a href="#"> <i class="fab fa-2x fa-youtube    "></i> </a></li>
                        <li className="pr-3"><a href="#"> <i class="fab fa-2x fa-instagram    "></i> </a></li>
                        <li className="pr-3"><a href="#"> <i class="fab fa-2x fa-twitter    "></i> </a></li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}