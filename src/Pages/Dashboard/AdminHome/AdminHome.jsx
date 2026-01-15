import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaUsers, FaBook } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const AdminHome = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    const { data: chartData } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    });


    if (isLoading) {
        return <div className="p-10 text-center text-3xl">Loading Stats...</div>;
    }

    //chart shape
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
    };


    return (
        <div className="p-6">
            <h2 className="text-3xl mb-6">
                <span className="text-xl font-semibold">Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>


            <div className="stats shadow w-full">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className='text-3xl'></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value text-primary">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-3xl'></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">{stats.user}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItem}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>


                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.order}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
            <div className="w-10/12 mx-auto">
                <BarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis width="auto" />
                    <Bar dataKey="quantity" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                        {chartData.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                    </Bar>

                </BarChart>
            </div>
        </div>
    );
}

export default AdminHome;