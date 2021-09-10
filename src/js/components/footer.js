class FooterNav extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          this.innerHTML = `
            <style>
            </style>
            <div class="footer__navigation">
          <nav class="navbar justify-content-center">
            <ul class="footer__nav d-flex flex-wrap justify-content-center">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Cruises</a></li>
              <li><a href="#">Specils</a></li>
              <li><a href="#">Holidays</a></li>
              <li><a href="#">Blog</a></li>
              <li class="no-pseudo"><a href="#">Contact us</a></li>
            </ul>
          </nav>
          <span class="footer__copyright">Copyright @voyage. All Right Reserved</span>
        </div>
          `;
        }
      }
      
      customElements.define('footer-navigation', FooterNav);
      
    
    
    
    
    