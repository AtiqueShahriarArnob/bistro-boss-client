const Cover = ({ img, title }) => {
    return (
        <div
            className="hero h-[700px]"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="hero-overlay bg-black bg-opacity-60"></div>

            <div className="hero-content text-center text-neutral-content">
                <div className="bg-black bg-opacity-50 px-12 py-8">
                    <h1 className="text-5xl font-bold uppercase">{title}</h1>
                    <p className="mt-4">Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
