const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>&copy; {new Date().getFullYear()} Filosoho Space</p>
      </div>

      <div className="flex">
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

      <p className="text-white-500">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
