const BtnPlayStop = ({ handlePlay, handleStop }) => (
  <div className="flex justify-center md:justify-end items-center  mt-[-6rem] buttons">
    <img
      className="w-8 h-8 sm:w-12 sm:h-12 hover-light button-effect "
      src="/assets/play.png"
      alt="round play button"
      loading="lazy"
      onClick={handlePlay}
    />
    <img
      className="w-8 h-8 sm:w-12 sm:h-12 hover-light button-effect "
      src="/assets/stop.png"
      alt="square stop button"
      loading="lazy"
      onClick={handleStop}
    />
  </div>
);

export default BtnPlayStop;
