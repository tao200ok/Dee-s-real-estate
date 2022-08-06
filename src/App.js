// Load stylesheet
import './App.css';

// Load media assets
import play from './assets/icons/play_btn.svg';
import heroImage from './assets/images/hero_image.svg';
import heroImageVector from './assets/images/hero_image_vector.svg';

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
                                <img src={play} alt='watch video' />
                            </button>
                        </div>
                    </div>
                    <div className='hero'>
                        <img className='hero_image' src={heroImage} alt='affordable beautiful homes' />
                        <img className='hero_image_vector' src={heroImageVector} alt='affordable beautiful homes' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;