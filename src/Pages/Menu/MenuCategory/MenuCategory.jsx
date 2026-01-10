import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="mb-24">
            {title && img && <Cover img={img} title={title} />}

            <div className="max-w-[1320px] mx-auto px-4 mt-16">
                <div className="grid md:grid-cols-2 gap-10">
                    {items.map(item => (
                        <MenuItem key={item._id} item={item} />
                    ))}
                </div>


                {title && (
                    <div className="text-center mt-10">
                        <Link to={`/order/${title.toLowerCase()}`}>
                            <button className="bg-black text-white px-6 py-3 rounded-lg">
                                Order Now
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuCategory;
