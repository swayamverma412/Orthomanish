export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                Flat #904, B-Block<br></br>
                Saileshree Vihar,<br></br>
                Chandrasekharpur<br></br>
                Bhubaneshwar (Odisha)<br></br>
                Pin- 751025
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                8908032374
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                manish8646@yahoo.com
              </p>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info' style={{ marginTop: "80px" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4165.382809435518!2d84.04578004028468!3d22.127504516825343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b3a55d778cc8c8b!2sSamaleswari%20hospital!5e0!3m2!1sen!2sin!4v1631699335193!5m2!1sen!2sin" style={{ width: "375", height: "300", style: "border:0;", allowfullscreen: "", loading: "lazy", verticalAlign: "50px" }}></iframe>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <div class="container">
                    <div class="row">
                      <div class="col-md-8">
                        <div class="copyright text-md-left text-center pt-15">
                          <p style={{ color: "#F0FFFF" }}>&copy; Copyrights 2021 Startup Grind KIIT, All Rights Reserved. </p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="copyright text-md-right text-center pt-15">
                          <p style={{ color: "#F0FFFF" }}>Owned by Dr. Manish Sharma </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
