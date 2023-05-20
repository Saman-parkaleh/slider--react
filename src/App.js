import Data from "./components/Data";
import "./App.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

function App() {
  const [persen, setPersen] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastindex = persen.length - 1;
    if (index < 0) {
      setIndex(lastindex);
    }
    if (index > lastindex) {
      setIndex(0);
    }
  }, [index, persen]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className=" text-center box  flex justify-center content-center grid  h-[100vh]">
      <div className="title">
        <samp className="font-bold text-2xl">نظرانت مشتریان</samp>
      </div>
      <div className=" boxcontaner     ">
        {persen.map((pepole, persenindex) => {
          const { id, image, name, title, qoute } = pepole;
           
          let position = "nextslide";
          if (persenindex === index) {
            position = "activeSlide";
          }
          if (
            persenindex === index - 1 ||
            (index === 0 && persenindex === persen.length - 1)
          ) {
            position = "lastslide";
          }
          return (
            <article key={id} className={`${position} contaner m-10`}>
              <img
                className="w-[150px] h-[150px] rounded-[50%]   bg-blue-400   m-10"
                src={image}
                alt=""
              />
              <h1 className="text-red-700 text-xl">{name}</h1>
              <p className="text-blue-800 m-5 text-base">{title}</p>
              <p className="m-5 text-sm">{qoute}</p>
            </article>
          );
        })}
      </div>
      <div className="relative">
        <button
          className="absolute bottom-[290px] border-red-500  right-[0] text-3xl"
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button>
        <button
          className="absolute bottom-[290px] left-[0] text-3xl"
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
}

export default App;
