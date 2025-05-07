import './ServiceCard.scss'
import CustomButton from '../../Button'

function ServiceCard() {
  return (
    <div className="service-card">
      <lord-icon
        src="https://cdn.lordicon.com/olmrexol.json"
        trigger="loop"
        delay="1000"
        state="morph-marked-bookmark"
        colors="primary:#cc9800"
        style={{ width: '40px', height: '40px' }}
      />
      <div className="content-wrapper">
        <div className="left-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="center-line"></div>
        <div className="right-content">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="button-container">
        <CustomButton onClick={() => console.log('Button clicked')}>
          Connect on Whatsapp
        </CustomButton>
      </div>
    </div>
  )
}

export default ServiceCard