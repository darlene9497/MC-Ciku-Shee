import './AboutSection.scss'
import image from '../../../assets/shee3.jpeg'
import CustomButton from '../../common/Button'

function AboutSection () {
  return (
    <div className='about-section'>
        <div className="image-container">
            <img src={image} alt="shee mwangi" />
        </div>
        <div className="text-box-section">
            <h2>
                Hey, I'm Shee
                <lord-icon
                    src="https://cdn.lordicon.com/ggzqlvhu.json"
                    trigger="loop"
                    delay="1500"
                    colors="primary:#fae8d2,secondary:#000000,tertiary:#ffc738"
                    style={{ width: '50px', height: '50px' }}
                ></lord-icon>
            </h2>
            <div className="about-text-box">
                <h3>You can stop looking...</h3>
                <h4>You found your host!</h4>
                <div className="text-title">
                    <p>MC</p>
                    <span>.</span>
                    <p>Entertainer</p>
                    <span>.</span>
                    <p>Professional hype woman</p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis 
                    lacinia mi, ac facilisis nisl egestas nec. Curabitur scelerisque, quam 
                    vitae congue semper, nulla turpis mollis augue, condimentum volutpat 
                    lorem sem quis odio. Sed a elit at sapien volutpat porta ut ut lectus. 
                    Fusce vestibulum diam quis nibh vestibulum rutrum. Mauris a enim 
                    non magna vestibulum facilisis quis nec nulla. Maecenas suscipit 
                    eleifend massa. Nunc porttitor massa felis, quis iaculis ipsum cursus at.
                </p>
                <CustomButton onClick={() => console.log('Button clicked')}>
                    Meet Shee
                </CustomButton>
            </div>
        </div>
    </div>
  )
}

export default AboutSection