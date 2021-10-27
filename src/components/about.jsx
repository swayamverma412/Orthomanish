
import pic13 from '../Images/14-1.jpeg';
export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-1 col-md-12 col-lg-6'>
            {' '}
            <img src={pic13} height='400px' width='300px' className='img-responsive' alt='' />{' '}
          </div >
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6'>
            <div className='about-text' >
              <h2 style={{ marginTop: "40px" }}>About Us</h2>
              <p style={{ textAlign: 'left' }}>Dr.Manish kumar Sharma  is currently working as Senior resident in Dept. of Orthopaedics at Samaleswari Hospital, Sundargadh.
                Completed his MBBS from Vydehi Medical College, Bangalore(Karnataka) and went for his PG training in Orthopedics from Hi-Tech Medical College, Bhubaneshwar (Odisha) in 2017.
                He has over 3 year exprience as senior residentin the Dept. of ORTHOPEDICS. A Compassionate doctor who always considers my patients’ needs and comfort levels during diagnosis and treatment, and works to ensure they have the best possible experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}