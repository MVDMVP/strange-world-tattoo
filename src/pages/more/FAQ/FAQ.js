import React from "react";
import '../../../shared/data-display.css';


const FAQ = () => {
  return(
    <div className="data-display">
      <section className='category'>
        <h2 className="head">FAQ</h2>
        <h3>How do I choose the right artist for my tattoo?</h3>
        <p>The final cost of a tattoo depends on factors like size, design complexity, color usage, and artist availability and demand.</p>
        <div className="group"></div>
        <h3>What should I do if I'm not sure what tattoo I want?</h3>
        <p>If you're unsure, do your research and browse our artists portfolio's for their past works and flash for inspiration.</p>
        <div className="group"></div>
        <h3>What should I bring to a consultation with my artist?</h3>
        <p>Bring reference photos or rough sketches to help the artist understand your tattoo idea.</p>
        <div className="group"></div>
        <h3>What if I'm unhappy with the design after the consultation?</h3>
        <p>If significant changes are needed, the artist may reschedule and could charge a drawing fee if necessary. If no progress made, they may recommend a different artist.</p>
        <div className="group"></div>
        <h3>How can I discuss my budget with my artist?</h3>
        <p>Inform your artist about your budget so they can design a tattoo that fits your financial constraints.</p>
        <div className="group"></div>
        <h3>What should I consider when choosing the placement of my tattoo?</h3>
        <p>Think about pain tolerance and how the tattoo might change as your body grows. Avoid visible areas like hands, neck, or face if you're young and unsure about future career implications.</p>
        
        <h2 className="head">TIPS!</h2>
        <p>Don't rush your artist during the tattooing process - it can affect the quality of your tattoo</p>
        <p>Very large tattoos (eg: full sleeves, back tattoos) often cannot be quoted due to high variance in complexity and customization</p>
        
      </section>
    </div>
    
  );
}

export default FAQ;