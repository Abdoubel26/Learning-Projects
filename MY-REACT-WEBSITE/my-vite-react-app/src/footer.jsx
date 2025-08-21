

function Footer() {
  return (
    <footer>
        <p className="header-description">Join us in our mission to explore and settle Mars.</p>
      <button className="header-button">Get Involved</button>
      <form className="header-form">
        <input type="email" className="header-input" placeholder="Enter your email" />
        <button type="submit" className="header-submit">Subscribe</button>
      </form>
      <p className="header-subscription">Subscribe to our newsletter for the latest updates.</p>
      <p className="footer-text">© {new Date().getFullYear()} The Mars Society. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
