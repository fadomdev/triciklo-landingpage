// Id Video
// 9T0AdPQCQpE?si=9_gganm5MzZkobI9

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import '../styles/styles.css'

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
				channel="youtube"
				youtube={{ mute: 0, autoplay: 0 }}
				isOpen={isOpen}
				videoId="9T0AdPQCQpE?si=9_gganm5MzZkobI9"
				onClose={() => setOpen(false)} 
			/>
      <button className="custom-button" onClick={() => setOpen(true)}>
        VER REEL<span className='calypso'>.</span>
      </button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));