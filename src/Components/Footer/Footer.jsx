const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <h2 className="text-2xl font-bold">
          Edu<span className="text-primary">Verse</span>
        </h2>
        <p>Empowering student voices through shared knowledge.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Terms & Conditions</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">LinkedIn</a>
      </nav>
    </footer>
  );
};

export default Footer;