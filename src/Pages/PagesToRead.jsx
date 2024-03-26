/* eslint-disable react/prop-types */
import { Bar, BarChart, CartesianGrid, Cell, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { getReadInfo } from "../utility/getReadInfo";


const PagesToRead = () => {
    const chartData = getReadInfo();
    console.log(chartData)
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-white font-bold">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                    
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            {
                chartData.length == 0 ? <h1 className="text-5xl mt-10 font-bold opacity-60">Your Read Book is : 0</h1> : ''
            }
            <div className="min-h-[80vh] flex items-center justify-center">
                {
                    chartData && chartData.length > 0 && (<BarChart
                        width={900}
                        height={600}
                        data={chartData}
                        margin={{

                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" fontSize={13} />
                        <YAxis fontSize={13} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>)
                }
            </div>
        </div>
    );
};

export default PagesToRead;