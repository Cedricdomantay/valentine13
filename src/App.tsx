import { useState } from "react";
import "./App.css";
const phrases = [ 
  "Noo",
"are you sure?",
"please my wife:<,
"Please beautiful!!",
"Don't do this to me",
"I'm gonna cry...",
"You don't love me na?" :<",
"Kagatin kita sige:<","Dali na",
];
  
function App() {
  const [NoCount, setNoCount] = useState(0);
  const [yesPressed, setyesPressed] = use useState(flase);
  const [yesButtonSize = noCount * 20 + 16;] 
  
  function getNoButtonText() {
     setNoCount (NoCount + 1);
  }
  
    function get NoButtonText() {
      return phrases [Math.min(NoCount, phrases.length - 1)];
    }
    
    return (
      <div className="valentine-container">
        {yesPressed ? (
          <>
          <img
            alt="bears kising"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
            <div className="text">Yeyyyyyyy!!!!</div>
          </>
          ) : (
          <>
          <img
          alt="bear wihttps://www.google.com/url?sa=i&url=https%3A%2F%2Fgifdb.com%2Fgif%2Fcute-love-bear-roses-ou7zho5oosxnpo6k.html&psig=AOvVaw1AMavejHAL7JeawaavZt9W&ust=1707909268164000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiyg_yXqIQDFQAAAAAdAAAAABANth hearts"
          src=""
          />
            <div>Will you be my valentine?,</div>
            <div>
              <button
                className="yesButton"
                style={{  fontSize:yesButtonSize}}
                onClick={() => setYesPressed(true)}
                >
                  Yes
                  </Button>
                  <button onClick={handleNoClick} className="noButton">
                  {getNoButtonText()}
                  </Button>
                  </div>
             </>
        )}
         </div>
      );
        }
      
export default App;

