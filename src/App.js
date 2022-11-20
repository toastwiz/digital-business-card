import logo from './logo.svg';
import './App.css';
import Photo from "./photo.png"
import EmailIcon from "./Icon.svg"
import LinkedIcon from "./Vector.svg"
import GithubIcon from "./github.svg"
import TwitterIcon from "./Twitter.svg"
import FacebookIcon from "./Facebook.svg"
import InstagramIcon from "./Instagram.svg"


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
          <div className = "card">
              <img src= {Photo} alt="Avatar" width="317" height="317"></img>

              <div className="container">
                  <h1>Liam Franks</h1>
                  <p>Web Developer</p>
              </div>
              
              <div className="btn-container">
                <form> 
                <button className="btn" formaction="mailto:liamjfranks@gmail.com">
                  <svg width="13" height="10" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.102406 1.70721L6.50001 4.90561L12.8976 1.70721C12.8739 1.29957 12.6953 0.916403 12.3983 0.636194C12.1012 0.355985 11.7083 0.199937 11.3 0.200012H1.70001C1.29167 0.199937 0.898764 0.355985 0.601748 0.636194C0.304733 0.916403 0.126089 1.29957 0.102406 1.70721Z" fill="#1E1F26"/>
                      <path d="M12.9 3.49441L6.50001 6.69441L0.100006 3.49441V8.20001C0.100006 8.62436 0.268577 9.03133 0.568635 9.33138C0.868693 9.63144 1.27566 9.80001 1.70001 9.80001H11.3C11.7244 9.80001 12.1313 9.63144 12.4314 9.33138C12.7314 9.03133 12.9 8.62436 12.9 8.20001V3.49441Z" fill="#1E1F26"/>
                  </svg>

                    Email</button>
                </form>
                  
                <form>
                    <button className="btn-alt" formaction="https://github.com/toastwiz">
                    <img src={GithubIcon} width="16px" height="16px"></img>
                      Github</button>
                </form>
                  
                
              </div>

              <div className = "text-container">

                <div className = "about-container">

                  <h1>About </h1>
                  <p>I am an aspiring frontend web developer,
                    with a passion for creating beautiful
                    and intuitive user interfaces. </p>
                  </div>

                  <div className = "about-container">

                  <h1>Info </h1>
                  <p>I enjoy houseplants, skateboarding, 
                    guitar and mechanical keyboards. </p>
                </div>

              </div>

              
              
              <div className = "footer">

                <a href = "https://www.twitter.com/toaswiz"><img src={TwitterIcon}/></a>
                <a href = ""><img src={FacebookIcon}/></a>
                <a href=""><img src={InstagramIcon}/></a>

              </div>
              
          </div>
      </header>
    </div>
  );
}

export default App;
