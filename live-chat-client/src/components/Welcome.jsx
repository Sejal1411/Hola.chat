import logo from "/public/hello.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
        <img src={logo} alt="Logo" className="welcome-logo"/>
    </div>
  
  )
}

export default Welcome;
