
import pic13 from '../Images/13.jpg';
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
              <p style={{ textAlign: 'left' }}>Dr.Manish kumar Sharma  is currently working as Senior resident in Dept. of Orthopaedics at ESIC Model Hospital, Rourkela.
                Completed his MBBS from Vydehi Medical College, Bangalore(Karnataka) and went for his PG training in Orthopedics from Hi-Tech Medical College, Bhubaneshwar (Odisha) in 2017.
                He has about 1 year 4 months exprience as senior residentin the Dept. of ORTHOPEDICS in Hi-tech medical college and Hospital, Rourkela.
                He has 4 months exprience as a senior resident in the Dept.of Orthopaedics at Care Hospital, BBSR.Compassionate doctor who always considers my patients’ needs and comfort levels during diagnosis and treatment, and works to ensure they have the best possible experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}