import "./styles.css";
import { useEffect, useRef, useState } from "react";

function Wrapper(props) {
  // console.log(window)
  // const css = "z-index: 11; position: relative; background-color: white;";

  // const highlightCSS = "z-index: 10; position: absolute;"
  // const [mousePos, setMousePos] = useState({});

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePos({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // console.log(mousePos)

  // const [highlightRect, setHightlightRect] = useState()
  // const [highlight, showHighlight] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    if (!props.children.ref.current) return;
    setShowOverlay(true);
    props.children.ref.current.style.position = "relative";
    props.children.ref.current.style.zIndex = "20";
    props.children.ref.current.style.backgroundColor = "white";
    props.children.ref.current.style.padding = "15px";
    // props.children.ref.current.style.borderRadius = "10px";
    props.children.ref.current.setAttribute("id", "highlight");
    const a = document.getElementById("highlight");
    a.style.after = "50px";
    a.style.setProperty("--height", `${a.getBoundingClientRect().height}px`);
    a.style.setProperty("--width", `${a.getBoundingClientRect().width}px`);

    document.addEventListener("click", () => {
      setShowOverlay(false);
      props.children.ref.current.style.zIndex = "1";
    });
  }, [props.children]);

  return (
    <>
      {showOverlay && <div id="overlay"></div>}
      {/* {showOverlay && <div id="highlight"></div>} */}
      {/* <div id="wrapper"> */}
      {props.children}
      {/* </div> */}
    </>
  );
}
export default function App() {
  const highlight = useRef(null);
  const highlight2 = useRef(null);
  const anyRef = useRef(null);
  return (
    <div className="App">
      <Wrapper>
        <div ref={highlight}>Hello CodeSandbox</div>
      </Wrapper>
      {/* <Wrapper> */}
      <img
        ref={anyRef}
        src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      ></img>
      <h2 ref={highlight2}>Start editing to see some magic happen!</h2>
      {/* </Wrapper> */}
    </div>
  );
}
