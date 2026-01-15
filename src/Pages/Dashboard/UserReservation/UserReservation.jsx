import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const UserReservation = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
        notes: "",
    });

    const [token, setToken] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem("access-token");
        if (storedToken) setToken(storedToken);
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!token) {
            Swal.fire("Unauthorized", "You must be logged in to book a table.", "warning");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (res.status === 401) {
                Swal.fire("Unauthorized", "Your session has expired. Please login again.", "error");
                return;
            }
            if (data.success) {
                Swal.fire("Booked!", "Your reservation has been submitted.", "success");
                setForm({ name: "", phone: "", date: "", time: "", guests: 1, notes: "" });
            } else {
                Swal.fire("Oops!", data.error || "Something went wrong.", "error");
            }
        } catch (err) {
            Swal.fire("Oops!", "Something went wrong.", "error");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg my-10 border-t-4 border-orange-500">
            <SectionTitle subHeading='Reservation' heading='Book Your Table'></SectionTitle>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered w-full border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="date"
                        name="date"
                        className="input input-bordered w-full border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        value={form.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        className="input input-bordered w-full border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        value={form.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="number"
                    name="guests"
                    min="1"
                    className="input input-bordered w-full border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    value={form.guests}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="notes"
                    placeholder="Special Notes (optional)"
                    className="textarea textarea-bordered w-full border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    value={form.notes}
                    onChange={handleChange}
                ></textarea>
                <button
                    type="submit"
                    className="p-2 rounded-lg w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default UserReservation;
