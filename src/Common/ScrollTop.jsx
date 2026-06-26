import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const scroll = () => {

      if (window.scrollY > 300) {

        setShow(true);

      } else {

        setShow(false);

      }

    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);

  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 bg-green-700 text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-800"
        >
          <FaArrowUp className="mx-auto" />
        </button>
      )}
    </>
  );
}