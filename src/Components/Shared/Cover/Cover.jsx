import { Parallax } from "react-parallax";
import './Cover.css';

const Cover = ({ img, title,description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200} className="cover-bg"
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-6 text-5xl font-bold uppercase">{title}</h1>
            <p className="font-semibold uppercase">
              {description}
            </p>
            
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
