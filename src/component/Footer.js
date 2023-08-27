
const Footer = () => {
    return(
      
      <div class="footer">
        <h2>Questions? Call <a href="#">000-800-919-1694</a></h2>
  
        <div class="row">
          <div class="col">
            <a href="#">FAQ</a>
            <a href="#">Investor relation</a>
            <a href="#">Privacy</a>
            <a href="#">Speed test</a>
            <a href="#">Help Center</a>
          </div>
  
          <div class="col">
            <a href="#">Jobs</a>
            <a href="#">Cookies</a>
            <a href="#">Legal Notices</a>
            <a href="#">Account</a>
            <a href="#">Ways to watch</a>
          </div>
  
          <div class="col">
            <a href="#">Media Centre</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
            <a href="#">Corporate Information</a>
            <a href="#">only on Netflix</a>
          </div>
        </div>
        <form className="d-flex" role="search">
                <select>
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </form>
        <p class="copyright-text"> © Netflix India - Made with <span>❤</span> by Anirudha</p>
      </div>
  );
  }
  
  export default Footer;