"use client";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);



const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Monthly Payments" },
  },
};

const lineOptions: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Daily Payment Trends" },
  },
};

const pieOptions: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: { display: true, text: "Category-wise Payments" },
  },
};

const Dashboard = () => {
  // Bar Chart Data (Monthly Payments)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Payments Received",
        data: [100, 200, 150, 300, 250, 400],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Line Chart Data (Daily Payments)
  const lineData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "Daily Payments",
        data: [20, 30, 25, 50, 45, 60],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Pie Chart Data (Category-wise Payments)
  const pieData = {
    labels: ["Subscription", "One-time", "Refunds"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Monthly Payments</h2>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Daily Payment Trends</h2>
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Category-wise Payments</h2>
        <div className="w-64 mx-auto">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
