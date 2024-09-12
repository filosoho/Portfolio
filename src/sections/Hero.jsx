import { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I am Anna";
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150;
  const delayBetweenLoops = 1300;

  useEffect(() => {
    let timeout;
    if (isTyping) {
      timeout = setTimeout(() => {
        setText((prev) => {
          const nextText = fullText.slice(0, prev.length + 1);
          if (nextText === fullText) {
            setIsTyping(false);
          }
          return nextText;
        });
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setIsTyping(true);
      }, delayBetweenLoops);
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p
          className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans typing-effect"
          style={{ minHeight: "40px" }}
        >
          {text}
          <span className="caret"></span>
        </p>
        <p className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          A curious Software Engineer
          <span>
            <img
              className="w-8 h-8  mx-2.5 mb-3 inline-block vertical-align-middle"
              src="/assets/octocat.png"
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
