// Load stylesheet
import './App.css';

// Load media assets
import play from './assets/icons/play_btn.svg';
import heroImage from './assets/images/hero_image.svg';
import heroImageVector from './assets/images/hero_image_vector.svg';
import search from './assets/icons/search.svg';
import addressMark from './assets/images/address_mark.png';
import secureImg from './assets/images/secure_data_protection_with_fingerprint_and_lock.png';
import smartHouse from './assets/images/smart_house.png';
import whyUs from './assets/images/why_us.svg';
import checkMark from './assets/icons/check_mark.svg';
import thePalace from './assets/images/the_palace.svg';
import ivyRory from './assets/images/ivy_rory.svg';
import rexona from './assets/images/rexona.svg';

function App() {
    const openMenu = () => {
        document.getElementById('hamburger').classList.toggle('open');
        document.getElementById('topmenu').classList.toggle('open');
    }

    return (
        <div className="App">
            <nav id='topmenu' className='navbar'>
                <h1>Dee's Estate</h1>
                <div id='hamburger' className='' onClick={openMenu}>
                    <div className='top'></div>
                    <div className='mid'></div>
                    <div className='bottom'></div>
                </div>
                <ul className='nav-links'>
                    <li><a href='#home' className='active'>Home</a></li>
                    <li><a href='#home'>Rent</a></li>
                    <li><a href='#featured_properties'>Land</a></li>
                    <li><a href='#footer'>Agent</a></li>
                    <li><a href='#how_it_works'>Contact Us</a></li>
                </ul>
                <button><a href='#get-started'>Get Started</a></button>
            </nav>
            <main>
                <header id='home'>
                    <div className='intro'>
                        <h2>Helping you find the property of your dreams.</h2>
                        <p>Creating quality urban lifestyles, building stronger communities.</p>
                        <div className='more_info'>
                            <button><a href='#learn-more'>Learn More</a></button>
                            <button className='play_button'>
                                <a href='learn-more'><img src={play} alt='watch video' /></a>
                            </button>
                        </div>
                    </div>
                    <div className='hero'>
                        <img className='hero_image' src={heroImage} alt='beautiful home with pool just under dim blue sky' />
                        <img className='hero_image_vector' src={heroImageVector} alt='affordable beautiful homes' />
                    </div>
                </header>
                <article id='search'>
                    <div className='search_container'>
                        <div>
                            <select id='location' name='location'>
                                <option>Location</option>
                                <option>Jahi</option>
                                <option>Maitama</option>
                            </select>
                        </div>
                        <div>
                            <select id='type' name='type'>
                                <option>Property Type</option>
                                <option>Duplex</option>
                                <option>Bungalow</option>
                            </select>
                        </div>
                        <div>
                            <select id='price' name='price'>
                                <option>Max Price</option>
                                <option>$20,000</option>
                                <option>$200,000</option>
                                <option>$2,000,000</option>
                            </select>
                        </div>
                        <button>
                            <img src={search} alt='search icon' />
                            <span>Search</span>
                        </button>
                    </div>
                </article>
                <section className='content'>
                    <article id='how_it_works'>
                        <h2>How it works.</h2>
                        <p>This is how our product works</p>
                        <div className='cards'>
                            <div className='card'>
                                <img src={addressMark} alt='location icon' />
                                <h3>Find Home</h3>
                                <p>Our properties are located at prime areas where by there won’t be problem with transportation.</p>
                            </div>
                            <div className='card'>
                                <img src={smartHouse} alt='secure home payment' />
                                <h3>Make Payments</h3>
                                <p>Our estates comes with good network, portable water, 24hrs light and round the clock security.</p>
                            </div>
                            <div className='card'>
                                <img src={secureImg} alt='key handover' />
                                <h3>Make it Official</h3>
                                <p>We have been in business for over 32 years, for client outside the country you can trust  us to deliver well.</p>
                            </div>
                        </div>
                    </article>
                    <article id='why_us'>
                        <div className='points'>
                            <h2>Why you should choose us.</h2>
                            <p>Creating quality urban lifestyles, building stronger communities.</p>
                            <ul>
                                <li><img src={checkMark} alt='check mark' />World class</li>
                                <li><img src={checkMark} alt='check mark' />Affordable</li>
                                <li><img src={checkMark} alt='check mark' />Trusted</li>
                                <li><img src={checkMark} alt='check mark' />Amenities</li>
                            </ul>
                        </div>
                        <div className={'why_us_image'}>
                            <img src={whyUs} alt='beautiful bungalow in clear day sky' />
                        </div>
                    </article>
                    <article id='featured_properties'>
                        <h2>Featured Properties</h2>
                        <p>A few of our biggest products that have sold out the most.</p>
                        <button className='see_more desktop'>View more</button>
                        <div className='cards'>
                            <div className='card'>
                                <img src={thePalace} alt='a duplex building' />
                                <div><h3>The Palace</h3><span>Duplex</span></div>
                                <div><span>Asokoro, FCT</span><span className='price'>$35,941</span></div>
                            </div>
                            <div className='card'>
                                <img src={ivyRory} alt='a duplex building' />
                                <div><h3>Ivy Rory</h3><span>Duplex</span></div>
                                <div><span>Katampe, FCT</span><span className='price'>$40,733</span></div>
                            </div>
                            <div className='card'>
                                <img src={rexona} alt='a duplex building' />
                                <div><h3>Rexona</h3><span>Duplex</span></div>
                                <div><span>Jabi, FCT</span><span className='price'>$43,130</span></div>
                            </div>
                        </div>
                        <button className='see_more mobile'>View more</button>
                    </article>
                    <article id='testimonials'>
                        <h2>Testimonials.</h2>
                        <p>What our clients are saying</p>
                        <button className='see_more desktop'>View more</button>
                        <div className='cards'>
                            <div className='card'>
                                <h3>Adeyinka Godwin</h3>
                                <span>Lagos</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                            </div>
                            <div className='card'>
                                <h3>Alex Goodwill</h3>
                                <span>Port Harcourt</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                            </div>
                            <div className='card'>
                                <h3>Muhammad Abdullah</h3>
                                <span>Mauritania</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                            </div>
                        </div>
                        <button className='see_more mobile'>View more</button>
                    </article>
                </section>
            </main>
            <footer id='footer'>
                <div className='description'>
                    <h2>Dee's Estate</h2>
                    <p>Solution for easy and flexible house hunting. You can trust us anywhere through this platform.</p>
                </div>
                <div className='property information'>
                    <h2>Property</h2>
                    <ul>
                        <li><a href='#learning-module'>Learning Module</a></li>
                        <li><a href='#partnershp'>Partnership</a></li>
                        <li><a href='#demo'>Watch demo</a></li>
                        <li><a href='#event'>Event</a></li>
                    </ul>
                </div>
                <div className='information about'>
                    <h2>About</h2>
                    <ul>
                        <li><a href='#company'>Our Company</a></li>
                        <li><a href='#career'>Career</a></li>
                        <li><a href='#investor-relations'>Investor Relations</a></li>
                        <li><a href='#social-impact'>Social Impact</a></li>
                    </ul>
                </div>
                <div className='information resources'>
                    <h2>Resources</h2>
                    <ul>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href='#feedback'>Give Feedback</a></li>
                        <li><a href='#status'>System Status</a></li>
                        <li><a href='#privacy'>Privacy Policy</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default App;