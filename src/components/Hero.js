import './hero.scss'

const Hero = () => {
  return (
    <>
    <div className='main'>
      <div className="container">
        <p>Software</p>
        <div className="stack" style={{ '--stacks': 3 }}>
          <span style={{ '--index': 0 }}>RAHEEM EL-ASSADI</span>
          <span style={{ '--index': 1 }}>RAHEEM EL-ASSADI</span>
          <span style={{ '--index': 2 }}>RAHEEM EL-ASSADI</span>
        </div>
        <div className='right'>
        <p>Developer</p>
        </div>
      </div>      
    </div>
    <p className='arrow'><i class="gg-push-down"></i></p>
    </>
  )
}


export default Hero