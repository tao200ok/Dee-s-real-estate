// Load stylesheet
import './App.css';

// Load media assets
import play from './assets/icons/play_btn.svg';
import heroImage from './assets/images/hero_image.svg';
import heroImageVector from './assets/images/hero_image_vector.svg';
import search from './assets/icons/search.svg';

function App() {
    const openBurger = () => {
        document.getElementById('hamburger').classList.toggle('open');
        document.getElementById('topmenu').classList.toggle('open');
    }

    return (
        <div className="App">
            <nav id='topmenu' className='navbar'>
                <h1>Dee's Estate</h1>
                <div id='hamburger' className='' onClick={openBurger}>
                    <div className='top'></div>
                    <div className='mid'></div>
                    <div className='bottom'></div>
                </div>
                <ul className='nav-links'>
                    <li><a href='#home' className='active'>Home</a></li>
                    <li><a href='#rent'>Rent</a></li>
                    <li><a href='#land'>Land</a></li>
                    <li><a href='#agent'>Agent</a></li>
                    <li><a href='#contact'>Contact Us</a></li>
                </ul>
                <button><a href='#get-started'>Get Started</a></button>
            </nav>
            <main>
                <div id='home'>
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
                        <img className='hero_image' src={heroImage} alt='affordable beautiful homes' />
                        <img className='hero_image_vector' src={heroImageVector} alt='affordable beautiful homes' />
                    </div>
                </div>
                <div id='search'>
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
                                <option>200,000</option>
                            </select>
                        </div>
                        <button>
                            <img src={search} alt='search icon' />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
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