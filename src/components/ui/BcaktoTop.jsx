import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 2;
      if (window.scrollY > halfScreen) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 max-[450px]:bottom-20 right-15 p-4 rounded-full bg-primary text-white shadow-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer z-[1000]"
        >
          <ArrowUp size={30} />
        </button>
      )}
    </div>
  );
}
