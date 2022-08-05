import './App.css';

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
        </div>
    )
}

export default App;