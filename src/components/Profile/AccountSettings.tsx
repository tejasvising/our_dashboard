import React, { useState } from "react";
import Navbar from "./Navbar";

const AccountSettings: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showUsageStatistics, setShowUsageStatistics] = useState(false);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleUpdatePlan = () => {
    if (selectedPlan) {
      console.log(`Updating subscription plan to: ${selectedPlan}`);
    }
  };

  const handleToggleUsageStatistics = () => {
    setShowUsageStatistics(!showUsageStatistics);
  };

  return (
    <div className="bg-slate-900 text-gray-600 p-4 min-h-screen font-inter">
      <Navbar />
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <div className="col-span-8 overflow-hidden rounded-xl bg-gray-200 px-8 sm:shadow-md">
          <div className="pt-4">
            <h1 className="py-2 text-2xl text-black font-semibold">
              Account settings
            </h1>
          </div>
          <hr className="mt-4 mb-8" />

          {/* Email Address Section */}
          <p className="py-2 text-xl text-black font-semibold">Email Address</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-600">
              Your email address is <strong>john.doe@company.com</strong>
            </p>
            <button className="inline-flex text-sm font-semibold text-gray-600 underline decoration-2">
              Change
            </button>
          </div>
          <hr className="mt-4 mb-8" />

          {/* Password Section */}
          <p className="py-2 text-xl text-black font-semibold">Password</p>
          <div className="flex items-center">
            {/* ... password input fields ... */}
            <div className="flex items-center">
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                <label>
                  <span className="text-sm text-gray-600">
                    Current Password
                  </span>
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      type="password"
                      id="login-password"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="***********"
                    />
                  </div>
                </label>

                <label>
                  <span className="text-sm text-gray-600">New Password</span>
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      type="password"
                      id="login-password"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="***********"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <p className="mt-2">
            Can't remember your current password?{" "}
            <a
              className="text-sm font-semibold text-gray-600 underline decoration-2"
              href="#"
            >
              Recover Account
            </a>
          </p>
          <button className="mt-4 rounded-lg bg-blue-900 px-4 py-2 text-gray-200">
            Save Password
          </button>
          <hr className="mt-4 mb-8" />

          <div className="pt-4">
            <h2 className="py-2 text-2xl text-black font-semibold">
              Manage Subscription Plan
            </h2>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="subscription"
                  value="Basic"
                  onChange={() => handleSelectPlan("Basic")}
                />
                Basic
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="subscription"
                  value="Pro"
                  onChange={() => handleSelectPlan("Pro")}
                />
                Pro
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="subscription"
                  value="Enterprise"
                  onChange={() => handleSelectPlan("Enterprise")}
                />
                Enterprise
              </label>
              <button
                className="rounded-lg bg-blue-900 px-4 py-2 text-gray-200"
                onClick={handleUpdatePlan}
              >
                Update Plan
              </button>
            </div>
            <hr className="mt-4 mb-8" />
          </div>

          <h2 className="py-2 text-2xl text-black font-semibold">
            View Usage Statistics
          </h2>
          <button
            className="mt-2 rounded-lg bg-blue-900 px-4 py-2 text-gray-200"
            onClick={handleToggleUsageStatistics}
          >
            {showUsageStatistics ? "Hide Statistics" : "Show Statistics"}
          </button>
          {showUsageStatistics && (
            <div className="mt-4">
              <p>Graphs Created: 10</p>
              <p>Graphs Shared: 5</p>
              <p>Papers Collected: 20</p>
            </div>
          )}
          <hr className="mt-4 mb-8" />

          {/* Delete Account Section */}
          <div className="mb-10">
            <p className="py-2 text-2xl text-black font-semibold">
              Delete Account
            </p>
            {/* ... deletion warning and button ... */}
            <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Proceed with caution
            </p>
            <p className="mt-2">
              Make sure you have taken backup of your account in case you ever
              need to get access to your data. We will completely wipe your
              data. There is no way to access your account after this action.
            </p>
            <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
              Continue with deletion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
