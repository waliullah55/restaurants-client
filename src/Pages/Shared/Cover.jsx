import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, title, bgStyle }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={bgImg}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div style={bgStyle} className="max-w-2xl rounded-lg bg-black bg-opacity-25 border py-12 px-16 border-black">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;