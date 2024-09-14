import React, { useState } from "react";
import Navbar from "./Navbar";

interface CreateNewGraphPageProps {
  // props for the CreateNewGraphPage
}

interface Paper {
  id: string;
  title: string;
}

// Mock data for papers, favorites, and collections
const papers: Paper[] = [
  { id: "1", title: "Paper 1" },
  { id: "2", title: "Paper 2" },
  { id: "3", title: "Paper 3" },
  // ...
];

// to render paper options or selection
const PaperSelection: React.FC<{
  onSelect: (paperId: string) => void;
  selectedPapers: string[];
}> = ({ onSelect, selectedPapers }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {papers.map((paper) => (
        <div key={paper.id} className="flex items-center">
          <input
            type="checkbox"
            id={`paper_${paper.id}`}
            checked={selectedPapers.includes(paper.id)}
            onChange={() => onSelect(paper.id)}
            className="mr-2"
          />
          <label htmlFor={`paper_${paper.id}`} className="text-sm">
            {paper.title}
          </label>
        </div>
      ))}
    </div>
  );
};

const CreateNewGraphPage: React.FC<CreateNewGraphPageProps> = () => {
  const [graphType, setGraphType] = useState("line"); // Default to line graph
  const [graphTitle, setGraphTitle] = useState("");
  const [graphDescription, setGraphDescription] = useState("");
  const [selectedPapers, setSelectedPapers] = useState<string[]>([]);
  const [colors, setColors] = useState({
    background: "#ffffff",
    line: "#3498db",
  });

  const handleGraphTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGraphType(event.target.value);
  };
  const handlePreview = () => {
    // logic for graph visualization preview
    console.log("Preview button clicked");
  };

  const handleGraphTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGraphTitle(event.target.value);
  };

  const handleGraphDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setGraphDescription(event.target.value);
  };

  const handleCreateGraph = () => {
    // logic for creating the graph
    console.log("Create Graph button clicked");
  };

  const handleColorChange = (
    colorType: "background" | "line",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColors((prevColors) => ({
      ...prevColors,
      [colorType]: event.target.value,
    }));
  };

  const handlePaperSelection = (paperId: string) => {
    // Toggle for paper selection
    setSelectedPapers((prevSelected) => {
      if (prevSelected.includes(paperId)) {
        return prevSelected.filter((id) => id !== paperId);
      } else {
        return [...prevSelected, paperId];
      }
    });
  };

  return (
    <div className="bg-slate-900 text-gray-600 p-4 min-h-screen font-inter text-center">
      <Navbar />
      <h1 className="text-3xl text-white mb-6 underline underline-offset-4">
        Create New Graph
      </h1>

      {/* Graph Type Selection */}
      <div className="mb-4">
        <label htmlFor="graphType" className="text-lg mr-2 text-gray-200">
          Select the type of graph:
        </label>
        <select
          id="graphType"
          value={graphType}
          onChange={handleGraphTypeChange}
          className="bg-blue-300 text-slate-900 text-sm p-2 rounded"
        >
          {/* graph type options */}
          <option value="line">Line Graph</option>
          <option value="bar">Bar Graph</option>
          <option value="pie">Pie Chart</option>
          <option value="xy">X-Y Plot</option>
        </select>
      </div>

      <div className="max-w-md mx-auto bg-gray-200 p-4 rounded-md mb-4">
        <form className="flex flex-col space-y-4">
          <label htmlFor="graphTitle" className="text-lg text-black">
            Graph Title:
          </label>
          <input
            type="text"
            id="graphTitle"
            value={graphTitle}
            onChange={handleGraphTitleChange}
            className="border-b border-gray-500 bg-gray-200 text-white text-sm p-2"
          />

          <label htmlFor="graphDescription" className="text-lg text-black">
            Graph Description:
          </label>
          <textarea
            id="graphDescription"
            value={graphDescription}
            onChange={handleGraphDescriptionChange}
            className="border border-gray-500 bg-gray-200 text-white text-sm p-2 resize-none"
          />

          {/* Paper Selection */}
          <div className="text-lg text-black">Select Papers:</div>
          <PaperSelection
            onSelect={handlePaperSelection}
            selectedPapers={selectedPapers}
          />

          {/* Color Configuration */}
          <p className="text-lg text-black">Graph Colors:</p>
          <div className="sm:flex">
            <div>
              <label htmlFor="backgroundColor" className="text-sm mx-2">
                Background:
              </label>
              <input
                type="color"
                id="backgroundColor"
                value={colors.background}
                onChange={(e) => handleColorChange("background", e)}
                className="p-1 w-40 rounded"
              />
            </div>
            <div>
              <label htmlFor="lineColor" className="text-sm mx-2">
                Line:
              </label>
              <input
                type="color"
                id="lineColor"
                value={colors.line}
                onChange={(e) => handleColorChange("line", e)}
                className="p-1 w-40 rounded"
              />
            </div>
          </div>

          {/* Graph Preview Button */}
          <button
            type="button"
            onClick={handlePreview}
            className="bg-blue-900 text-gray-200 px-4 py-2 rounded-md hover:underline"
          >
            Preview
          </button>

          {/* Create Graph Button */}
          <button
            type="button"
            onClick={handleCreateGraph}
            className="bg-blue-900 text-gray-200 px-4 py-2 rounded-md hover:underline"
          >
            Print Graph
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewGraphPage;
