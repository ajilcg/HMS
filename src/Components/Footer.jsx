import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { FitScreen } from '@mui/icons-material';
export const Footer = () => {
  return (
   <>
   
   
 

 <MDBFooter  bgColor=' ' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/ajil-cg-b397851a4/' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='facebook' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <img src='src/assets/images/LoGoHealMate.png'  style={{width:'215px'}}></img>
               </h6>
              <p>
              Every life is precious to us. You are important, and we care for you. We at Amrita Hospitals are there for you when you need us the most. Our hospital is where science, technology, and research merge to embrace good health. We are a community of physician
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kochi Address</h6>
              <p>
                <a href='https://maps.app.goo.gl/M7oWok4nnTF8q8W36' target='_blank' className='text-reset'>
                AIMS P.O, Kochi, Kerala, India - 682 041
                </a>
              </p>
                
            </MDBCol>

             

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Ernakulam, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                healmate@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 9995766737
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 9995586634
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
    </>
  )
}
