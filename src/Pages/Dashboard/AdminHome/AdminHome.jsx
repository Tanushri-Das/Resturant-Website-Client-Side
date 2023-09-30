// import React from "react";
// import useAuth from "../../../Hooks/useAuth";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { FaWallet, FaUsers, FaUtensils, FaTruck } from "react-icons/fa";
// import "./AdminHome.css";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
// import { scaleOrdinal } from "d3-scale";
// import { schemeCategory10 } from "d3-scale";

// const AdminHome = () => {
//   const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure();

//   const { data: stats = {} } = useQuery({
//     queryKey: ["admin-stats"],
//     queryFn: async () => {
//       const res = await axiosSecure("/admin-stats");
//       return res.data;
//     },
//   });

//   const { data: chartData = [] } = useQuery({
//     queryKey: ["chart-data"],
//     queryFn: async () => {
//       const res = await axiosSecure("/order-stats");
//       return res.data;
//     },
//   });

//   const colors = scaleOrdinal(schemeCategory10).range();

//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${
//       x + width / 2
//     },${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
//       x + width
//     }, ${y + height}
//   Z`;
//   };

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;

//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };
//   return (
//     <div className="w-full my-12 px-6">
//       <h2>Hi, Welcome Back! {user?.displayName}</h2>
//       <div className="grid grid-cols-4 gap-4 my-10">
//         <div className="flex wallet items-center justify-center py-5">
//           <div className="border border-red-500">
//             <FaWallet className="text-2xl text-white" />
//           </div>
//           <div className="border border-red-500 pl-6">
//             <h4 className="text-white font-bold text-2xl mb-1">
//               ${stats.revenue}
//             </h4>
//             <h5 className="text-white text-xl">Revenue</h5>
//           </div>
//         </div>
//         <div className="flex users items-center justify-center py-5">
//           <div className="border border-red-500">
//             <FaUsers className="text-2xl text-white" />
//           </div>
//           <div className="border border-red-500 pl-6">
//             <h4 className="text-white font-bold text-2xl mb-1">
//               ${stats.users}
//             </h4>
//             <h5 className="text-white text-xl">Customers</h5>
//           </div>
//         </div>
//         <div className="flex items items-center justify-center py-5">
//           <div className="border border-red-500">
//             <FaUtensils className="text-2xl text-white" />
//           </div>
//           <div className="border border-red-500 pl-6">
//             <h4 className="text-white font-bold text-2xl mb-1">
//               ${stats.menuItems}
//             </h4>
//             <h5 className="text-white text-xl">MenuItems</h5>
//           </div>
//         </div>
//         <div className="flex orders items-center justify-center py-5">
//           <div className="border border-red-500">
//             <FaTruck className="text-2xl text-white" />
//           </div>
//           <div className="border border-red-500 pl-8">
//             <h4 className="text-white font-bold text-2xl mb-1">
//               ${stats.orders}
//             </h4>
//             <h5 className="text-white text-xl">Orders</h5>
//           </div>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="w-1/2">
//           <BarChart
//             width={500}
//             height={300}
//             data={chartData}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="category" />
//             <YAxis />
//             <Bar
//               dataKey="total"
//               fill="#8884d8"
//               shape={<TriangleBar />}
//               label={{ position: "top" }}
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;

import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaWallet, FaUsers, FaUtensils, FaTruck } from "react-icons/fa";
import "./AdminHome.css";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      console.log(res)
      return res.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full my-12 px-6">
      <h2>Hi, Welcome Back! {user?.displayName}</h2>
      <div className="grid grid-cols-4 gap-4 my-10">
        <div className="flex wallet items-center justify-center py-5">
          <div>
            <FaWallet className="text-2xl text-white" />
          </div>
          <div className="pl-6">
            <h4 className="text-white font-bold text-2xl mb-1">
              ${stats.revenue}
            </h4>
            <h5 className="text-white text-xl">Revenue</h5>
          </div>
        </div>
        <div className="flex users items-center justify-center py-5">
          <div>
            <FaUsers className="text-2xl text-white" />
          </div>
          <div className="pl-6">
            <h4 className="text-white font-bold text-2xl mb-1">
              ${stats.users}
            </h4>
            <h5 className="text-white text-xl">Customers</h5>
          </div>
        </div>
        <div className="flex items items-center justify-center py-5">
          <div>
            <FaUtensils className="text-2xl text-white" />
          </div>
          <div className="pl-6">
            <h4 className="text-white font-bold text-2xl mb-1">
              ${stats.menuItems}
            </h4>
            <h5 className="text-white text-xl">MenuItems</h5>
          </div>
        </div>
        <div className="flex orders items-center justify-center py-5">
          <div>
            <FaTruck className="text-2xl text-white" />
          </div>
          <div className="pl-6">
            <h4 className="text-white font-bold text-2xl mb-1">
              ${stats.orders}
            </h4>
            <h5 className="text-white text-xl">Orders</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-full border border-red-600">
          <BarChart
            width={700}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-full border border-red-600">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Legend></Legend>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    name={entry.category}
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
