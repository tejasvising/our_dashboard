import React, { useState } from "react";
import Navbar from "./Navbar";

interface Paper {
  id: string;
  title: string;
}

interface Graph {
  id: string;
  title: string;
  preview: string;
  description: string;
  dateCreated: string;
  papers: Paper[];
}

interface GraphDetailsPageProps {
  // Props
}

const GraphDetailsPage: React.FC<GraphDetailsPageProps> = () => {
  // Mock data for the graph
  const graph: Graph = {
    id: "1",
    title: "Sample_Graph_Name",
    preview: "graphPreview.jpeg",
    description: "This is a sample graph description.",
    dateCreated: "2023-01-01",
    papers: [
      { id: "1", title: "Paper 1" },
      { id: "2", title: "Paper 2" },
    ],
  };

  const handleEditGraph = () => {
    // logic for editing the graph
    console.log("Edit Graph button clicked");
  };

  const handleShareGraph = () => {
    // logic for sharing the graph
    console.log("Share Graph button clicked");
  };

  const handleDeleteGraph = () => {
    // logic for deleting the graph
    console.log("Delete Graph button clicked");
  };

  return (
    <div className="bg-slate-900 text-white p-4 min-h-screen font-inter text-center flex flex-col">
      <Navbar />
      <h1 className="text-3xl mb-2 underline underline-offset-4">
        Graph Details
      </h1>

      <div className="md:flex my-8 border-solid border-2">
        {/* First Div: Graph Preview */}
        <div className="md:w-1/2 p-4 ">
          <img
            // src="graphPreview.jpeg"
            src={graph.preview}
            alt="Graph Preview"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Second Div: Graph Details */}
        <div className="md:w-1/2 p-4 ">
          <div className="text-sm text-gray-300 mb-2">Graph Name:</div>
          <div className="text-2xl mb-4">{graph.title}</div>
          <div className="text-sm text-gray-400 mb-2">
            Created on {graph.dateCreated}
          </div>

          <div className="text-sm mb-2">Description:</div>
          <div className="text-md text-gray-300 mb-4">{graph.description}</div>

          {/* List of Papers */}
          <div className="text-lg mb-2">Papers in the Graph:</div>
          <ul className="pl-6 list-none">
            {graph.papers.map((paper) => (
              <li key={paper.id}>{paper.title}</li>
            ))}
          </ul>

          {/* Buttons for Edit, Share, Delete */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleEditGraph}
              className="bg-blue-300 text-blue-900 px-4 py-2 rounded-md mr-2 hover:underline"
            >
              Edit Graph
            </button>
            <button
              onClick={handleShareGraph}
              className="bg-blue-300 text-blue-900 px-4 py-2 rounded-md mr-2 hover:underline"
            >
              Share Graph
            </button>
            <button
              onClick={handleDeleteGraph}
              className="bg-blue-300 text-blue-900 px-4 py-2 rounded-md hover:underline"
            >
              Delete Graph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphDetailsPage;
