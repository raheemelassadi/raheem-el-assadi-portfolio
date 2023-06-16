import './hero.scss'

const Hero = () => {
  return (
    <div className='main'>
      <div className="container">
        <span>Software</span>
        <div className="stack" style={{ '--stacks': 3 }}>
          <span style={{ '--index': 0 }}>RAHEEM EL-ASSADI</span>
          <span style={{ '--index': 1 }}>RAHEEM EL-ASSADI</span>
          <span style={{ '--index': 2 }}>RAHEEM EL-ASSADI</span>
        </div>
        <span className="right">Developer</span>
        <span>&#xf0c9;</span>
      </div>
    </div>
  )
}


export default Hero