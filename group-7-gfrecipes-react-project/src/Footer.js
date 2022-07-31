import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col">
              <p>Contact Us</p>
              </div>
              <div className="col">
              <p>Policies</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <p>© EASYEATS 2022</p>
          </div>
          <div className="col-3">
            <p>Socials</p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
