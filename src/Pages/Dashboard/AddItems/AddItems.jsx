import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': "multipart/form-data"
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${data.name} is added to the menu`,
                    timer: 1500
                });

            }
            console.log(res.data)
        }
    }
    return (
        <div>
            <SectionTitle heading="Add An Item" subHeading="Whats New"></SectionTitle>
            <div>

                {/* Form Card */}
                <div className="bg-gray-100 p-6 md:p-10 rounded-md max-w-5xl mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Recipe Name */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Recipe name*</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                required
                                type="text"
                                placeholder="Recipe name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Category & Price */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Category*</span>
                                </label>
                                <select
                                    defaultValue="default"
                                    {...register("category", { required: true })}
                                    className="select select-bordered w-full"
                                >
                                    <option value="default" disabled>
                                        Category
                                    </option>
                                    <option value="Salad">Salad</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Soup">Soup</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Drinks">Drinks</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Price*</span>
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    required
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        {/* Recipe Details */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Recipe Details*</span>
                            </label>
                            <textarea
                                {...register("recipe", { required: true })} required
                                className="textarea textarea-bordered w-full h-40"
                                placeholder="Recipe Details"
                            ></textarea>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <input {...register("image", { required: true })} required type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button className="btn bg-[#D1A054] text-white hover:bg-[#b8893f] p-3">
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default AddItems;