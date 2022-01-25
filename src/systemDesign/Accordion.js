import "../css/accordion.css";
import React from "react";
// function Accordian() {
//   const [show, setShow] = React.useState({});
//   const divRef = React.useRef();
//   const handleAccordian = (e) => {
//     let data = e.target.innerHTML;
//     console.log(data.trim() === "1")
//     // because data is become string
//     setShow({
//       id: data.trim()
//     });
//     // To add animations
//     // setTimeout(()=>{
//     //     let childElem = e.target.children[0];
//     //     childElem.classList.add("showContent")
//     // })
//   }
//   const accordian = () => {
//     let arr = [1,2,3,4,5];
//     return (
//       <div>
//       {arr.map((a,i)=>{
//         return <div key={i} className={`accordian`}
//           onClick={(e)=> handleAccordian(e)}
//           ref={divRef}>
//                {a}
//               {show.id == a && <div className={`${show.id == a && "showContent"}`}>Hello {a}</div>}
//           </div>
//       })}
//       </div>
//     )
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       {accordian()}
//     </div>
//   );
// }
const AccordionSection = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
      <div>
          <div
              className={`accordion-title ${isOpen ? "open" : ""}`}
              onClick={() => setOpen(!isOpen)}>
              {title}
          </div>
          <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
              <div className="accordion-content">{children}</div>
          </div>
      </div>
  );
};
const Accordion = () => (
  <div className="wrapper">
      <AccordionSection title="Why is the sky blue?">
          Sunlight reaches Earth's atmosphere and is scattered in all directions by
          all the gases and particles in the air.
      </AccordionSection>
      <AccordionSection title="What's It Like Inside Jupiter?">
          It's really hot inside Jupiter! No one knows exactly how hot
      </AccordionSection>
      <AccordionSection title="What Is a Black Hole?">
          A black hole is an area of such immense gravity that nothing
      </AccordionSection>
  </div>
);

export default Accordion;
