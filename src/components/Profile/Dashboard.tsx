import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

interface DashboardProps {
  //  props for the Dashboard
}

const Dashboard: React.FC<DashboardProps> = () => {
  // Mock data
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    profilePhoto: "profilePhoto.jpeg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const accountDetails = {
    subscriptionPlan: "Pro Plan",
    subscriptionStatus: "Active",
  };

  const usageMetrics = {
    graphsCreated: 10,
    graphsShared: 5,
    papersCollected: 20,
  };

  const recentActivity = Array.from({ length: 10 }, (_, index) => ({
    type: "Graph Created",
    title: `Graph ${index + 1}`,
    date: "2023-01-01",
    linkPath: "/graph-details",
  }));

  const savedGraphs = Array.from({ length: 10 }, (_, index) => ({
    title: `Graph ${index + 1}`,
    dateCreated: "2023-01-01",
    previewThumbnail: "thumbnail.jpeg",
    linkPath: "/graph-details",
  }));

  return (
    <div className="bg-slate-900 text-gray-600 p-4 min-h-screen font-inter text-center">
      {/* 1st Div: Navbar */}
      <Navbar />

      {/* 2nd Div: Profile, Account Details, and Usage Metrics */}
      <div className="md:flex mb-4 md:h-80">
        <div className="sm:flex basis-3/5 mr-2 bg-gray-200 p-4 rounded-md mb-4 items-center">
          {/* Profile Photo */}
          <div className="basis-1/3 w-full h-full overflow-hidden m-2 my-4">
            <img
              src={userProfile.profilePhoto}
              alt="Profile"
              className="w-50 h-60 object-cover"
            />
          </div>
          {/* Profile Details Information */}
          <div className="basis-3/4">
            {/* Profile Details Heading */}
            <p className="text-xl pb-4 underline underline-offset-4 text-black">
              Profile Details
            </p>
            <div className="flex items-center mb-2">
              <p className="text-lg mr-2">Name:</p>
              <input
                type="text"
                value={userProfile.name}
                className="border-b border-gray-700 bg-gray-200 text-gray-600 text-sm w-full"
                readOnly
              />
            </div>
            <div className="flex items-center mb-2">
              <p className="text-lg mr-2">Email:</p>
              <input
                type="text"
                value={userProfile.email}
                className="border-b border-gray-700 bg-gray-200 text-gray-600 text-sm w-full"
                readOnly
              />
            </div>
            <div className="items-center mb-2">
              <p className="text-lg text-left mr-2">Bio:</p>
              <textarea
                value={userProfile.bio}
                rows={4}
                className="border w-full p-1 border-gray-700 bg-gray-200 text-gray-600 text-sm resize-none"
                readOnly
              />
            </div>

            <div className="text-right">
              <Link to="/account-settings">
                <button className="text-blue-500 hover:underline">
                  Edit Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 h-80 sm:">
          {/* Account Details */}
          <div className="flex-1">
            <div className="bg-gray-200 p-4 rounded-md mb-4">
              <p className="text-xl mb-2 underline underline-offset-4 text-black">
                Account Details
              </p>
              <p>Subscription Plan: {accountDetails.subscriptionPlan}</p>
              <p className="mb-2">
                Subscription Status: {accountDetails.subscriptionStatus}
              </p>
              <a href="/pricing" className="text-blue-500 pb-8 hover:underline">
                Upgrade Plan
              </a>
            </div>
          </div>

          {/* Usage Metrics */}
          <div className="flex-1 ">
            <div className="bg-gray-200 p-4 rounded-md mb-4">
              <p className="text-xl mb-2 underline underline-offset-4 text-black">
                Usage Metrics
              </p>
              <p>Graphs Created: {usageMetrics.graphsCreated}</p>
              <p>Graphs Shared: {usageMetrics.graphsShared}</p>
              <p>Papers Collected: {usageMetrics.papersCollected}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Div: Recent Activity and Saved Graphs */}
      <div className="lg:flex mb-4 ">
        {/* Recent Activity */}
        <div className="flex-1 h-96 mr-2 overflow-x-auto">
          <div className="bg-gray-200 p-4 rounded-md mb-4">
            <p className="text-xl mb-2 underline underline-offset-4 text-black">
              Recent Activity
            </p>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-10">Activity</th>
                  <th className="w-10">Title</th>
                  <th className="w-10">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((activity, index) => (
                  <tr key={index}>
                    <td className="border-t border-gray-700">
                      {activity.type}
                    </td>
                    <td className="border-t border-gray-700 hover:underline">
                      <Link to={activity.linkPath}>{activity.title}</Link>
                    </td>
                    <td className="border-t border-gray-700">
                      {activity.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Saved Graphs */}
        <div className="flex-1 h-96 overflow-x-auto">
          <div className="bg-gray-200 p-4 rounded-md mb-4">
            <p className="text-xl mb-2 underline underline-offset-4 text-black">
              Saved Graphs
            </p>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-20">Graph Preview</th>
                  <th className="w-20 border-l border-gray-700">Title</th>
                  <th className="w-20 border-l border-gray-700">
                    Date Created
                  </th>
                </tr>
              </thead>
              <tbody>
                {savedGraphs.map((graph, index) => (
                  <tr key={index}>
                    <td className="border-t border-gray-700">
                      <Link to={graph.linkPath}>
                        <img
                          src={graph.previewThumbnail}
                          alt={`Thumbnail for ${graph.title}`}
                          className="rounded-md"
                        />
                      </Link>
                    </td>
                    <td className="border-t border-gray-700 border-l hover:underline">
                      <Link to={graph.linkPath}>{graph.title}</Link>
                    </td>
                    <td className="border-t border-gray-700 border-l">
                      {graph.dateCreated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Favorites and Collections */}
      <div className="flex justify-center mt-5">
        <button className="bg-blue-300 text-slate-900 px-4 py-2 rounded-md mr-2 hover:underline">
          Favorites
        </button>
        <button className="bg-blue-300 text-slate-900 px-4 py-2 rounded-md hover:underline">
          Collections
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
