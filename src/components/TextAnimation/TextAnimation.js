import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Hi, Nice to see you here",
  "I hope you’re doing well",
  "Please do Login / Register"
];

export const TextAnimation = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
        // style={{color: '#fff', fontSize: '35px'}}
      />
    </h1>
  );
};











// import React from 'react'
// import './TextAnimation.scss'

// export default function TextAnimation() {
//     return (
//         <div>
//             <section class="container">
//   <h1 class="title">
//     <span>Hi, nice</span>
//     <span>to see</span>
//     <span>you here</span>
//   </h1>
  
//   <h2 class="title">
//     <span>This is</span>
//     <span>a long</span>
//     <span>sub title</span>
    
    
//   </h2>
// </section>
//         </div>
//     )
// }
