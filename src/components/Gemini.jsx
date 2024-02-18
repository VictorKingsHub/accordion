import React, {useState} from 'react'

function Gemini() {


    const AccordionItem = ({ title, content }) => {
      const [isActive, setIsActive] = useState(false);
    
      const handleClick = () => setIsActive(!isActive);
    
      return (
        <>
          <button onClick={handleClick}>{title}</button>
          {isActive && <div>{content}</div>}
        </>
      );
    };
    
    const Accordion = ({ items }) => (
      <div>
        {items.map((item) => (
          <AccordionItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    );
    

//   return (
//     <div>
      
//     </div>
//   )
}

export default Gemini
