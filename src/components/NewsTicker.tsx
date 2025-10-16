import React from 'react';

const NewsTicker: React.FC = () => {
  return (
    <div style={{ paddingTop: '30px' }}>
      <div className="news-section gra">
        <label>News</label>
        <marquee behavior="scroll" direction="left" scrollAmount="2" onMouseOver="this.scrollAmount = 0" onMouseOut="this.scrollAmount = 2">
          <span></span>
        </marquee>
      </div>
    </div>
  );
};

export default NewsTicker;