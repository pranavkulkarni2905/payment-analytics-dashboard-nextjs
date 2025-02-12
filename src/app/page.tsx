import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Payment Analytics Dashboard</h1>
        <p className="text-gray-600 mt-4">Monitor and analyze payment transactions effortlessly.</p>
      </div>
    </div>
  );
}
