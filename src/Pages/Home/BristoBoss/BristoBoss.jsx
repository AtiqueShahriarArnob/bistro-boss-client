import bossImg from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
    return (
        <div
            className="hero min-h-[500px] my-20"
            style={{
                backgroundImage: `url(${bossImg})`,
            }}
        >
            <div className="hero-overlay bg-opacity-40"></div>

            <div className="hero-content text-center">
                <div className="bg-white p-12 max-w-2xl">
                    <h2 className="text-4xl font-serif mb-4">Bistro Boss</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                        libero accusamus laborum deserunt ratione dolor officiis praesentium!
                        Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                        quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;
