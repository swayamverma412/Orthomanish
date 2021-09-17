export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  Return to Normal Activities
                  <span></span>
                </h1>
                <a
                  href='#form'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Make an Appointment
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
