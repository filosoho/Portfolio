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
              src="/assets/github.png"
              alt="github"
              className="w-full h-full"
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
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="text-white-500 flex gap-2">
          <p>&copy; {new Date().getFullYear()} Filosoho Space</p>
        </div>
        <p className="text-white-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
