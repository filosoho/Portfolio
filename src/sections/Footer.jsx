const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col justify-between items-center gap-5">
      <div className="flex ">
        <div className="social-icon">
          <a
            href="https://github.com/filosoho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/filosoho/Portfolio/refs/heads/main/public/assets/github.png"
              alt="github"
              className="w-10 h-10 sm:w-full sm:h-full"
            />
          </a>
        </div>

        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/filosoho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/filosoho/Portfolio/refs/heads/main/public/assets/linkedin.png"
              alt="linkedin"
              className="w-10 h-10 sm:w-full sm:h-full"
            />
          </a>
        </div>
      </div>
      <div className="text-white-600 flex justify-between items-center gap-5">
        <div className=" flex gap-2">
          <p>&copy; {new Date().getFullYear()} Filosoho Space</p>
        </div>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
