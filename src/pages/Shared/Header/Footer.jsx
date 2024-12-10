const Footer = () => {
    //bg-[#9dad37] 
    return (
      <footer className="footer place-items-center bg-black p-10">
        <nav className="text-white font-semibold">
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover ">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-white font-semibold">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-white font-semibold">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  