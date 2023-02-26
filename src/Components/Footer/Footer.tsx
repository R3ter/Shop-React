import "./style.scss";
export default () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Shoe Shop</h1>

          <h2>Contact</h2>

          <address>
            waleed.sukhon77@gmail.com
            <br />
            <a className="footer__btn" href="mailto:waleed.sukhon77@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/waleed-sukhon-8457651b6/"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a target="_blank" href="https://github.com/R3ter">
                  Github
                </a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Software Design</a>
                <br />
                <a href="#">Digital Signage</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2023 R3ter. All rights reserved.</p>

          {/* <div className="legal__links">
            <span>
              Made By <span className="heart">Me</span>
            </span>
          </div> */}
        </div>
      </footer>
    </div>
  );
};
