import React from "react";

const ContactAreaOne = () => {
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className='contact-area'>
        <div className='container'>
          <div className='contact-inner-1'>
            <img
              className='top_image_bounce animate-img-1'
              src='assets/img/banner/2.png'
              alt='img'
            />
            <img
              className='top_image_bounce animate-img-2'
              src='assets/img/about/6.png'
              alt='img'
            />
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src='assets/img/bg/4.png' alt='img' />
                {/* <img className='w-100' src='https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?t=st=1714070012~exp=1714073612~hmac=6e100a701f4181130f7cbff21709b0b6b2b9d8c7657cff197ca02d856cfd6328&w=1380' alt='img' /> */}
                
              </div>
              <div
                className='col-lg-4 wow animated fadeInRight'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  <h6 className='sub-title'>GET IN TOUCH</h6>
                  <h2 className='title'>
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  <p className='content'>
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p>
                  <form className='mt-4'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Phone' />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Subject' />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single-input-inner style-border'>
                          <textarea placeholder='Message' defaultValue={""} />
                        </div>
                      </div>
                      <div className='col-12'>
                        <a
                          className='btn btn-black mt-0 w-100 border-radius-5'
                          href='#'
                        >
                          Submit now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/13.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Contacts us</h5>
                  <h6>88 01234 2345 12</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/14.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Your Email</h5>
                  <h6>Comism@mail.com</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/15.svg' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Location</h5>
                  <h6>99 united,America</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
