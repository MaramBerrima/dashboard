import React, { handleSubmit, useState} from 'react';
import "./Home.css";
import VideoBg from '../assets/VideoBg.mp4';

const Home= () => {
  
  const Accordion = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputValue);
    };
   
   
    return (
      <div>
        <button onClick={handleToggle}>
          {isExpanded ? 'Cacher' : 'Comparer'}
        </button>
        {isExpanded && (
          <form onSubmit={handleSubmit}>
            <label>
              Entrez le deuxiéme site : 
            <input type="text" value={inputValue} onChange={handleInputChange} style={{ marginBottom: '10px' }}/>
            </label>
            <button type="submit">Comparer</button>
          </form>
        )}
        
      </div>
    );
  }
  
  return <div className="wrapper">
    
  <h1>Welcome to Speedester</h1>
  <form onSubmit={handleSubmit}>
        <div className="overlay">
        <video src={VideoBg} autoPlay loop muted />
        </div>
        
    <fieldset>
      <label>
        <p>Site</p>
        <input name="Site" />
      </label>
    </fieldset>
  </form>
  <div> <button className="button-one ">Analyser</button></div>
  
  
<Accordion/>


</div>

}
export default Home;