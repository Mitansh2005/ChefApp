import { useState } from "react";
export default function FiltersDropdown({jobs,handleFilter}) {
  const [employmentType, setEmploymentType] = useState('');
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [postedDate, setPostedDate] = useState('');
  const uniqueLocations = [...new Set(jobs.map(job => job.city))];
  const employmentTypes = ["FULL", "PART"];
  const getFilters = () => {
    const filters = {
      employmentType,
      location,
      salaryRange,
      postedDate,
    };
    handleFilter(filters); // Call the parent function to filter the job data
  };
	return (
		<>
			<div className="font-custom text-lg flex flex-col gap-1">
        <h1 className="font-bold text-yellow-600 bg-yellow-200 p-1 rounded-lg">Filter works with only one title in job field or empty field</h1>
				<div>
					<label
						htmlFor="employmentType"
						className="block text-md font-medium text-gray-700"
					>
						Employment Type
					</label>
					<select
						id="employmentType"
						value={employmentType}
						onChange={(e) => setEmploymentType(e.target.value)}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					>
						<option value="">Select Employment Type</option>
						{employmentTypes.map((type, index) => (
							<option key={index} value={type}>
								{type.replace("_", " ")}
							</option>
						))}
					</select>
				</div>

				{/* Location Dropdown */}
				<div>
					<label
						htmlFor="location"
						className="block text-md font-medium text-gray-700"
					>
						Location
					</label>
					<select
						id="location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					>
						<option value="">Select Location</option>
						{uniqueLocations.map((loc, index) => (
							<option key={index} value={loc}>
								{loc}
							</option>
						))}
					</select>
				</div>

				{/* Salary Range Input */}
				<div>
					<label
						htmlFor="salaryRange"
						className="block text-md font-medium text-gray-700"
					>
						Salary Range
					</label>
					<input
						type="text"
						id="salaryRange"
						value={salaryRange}
						onChange={(e) => setSalaryRange(e.target.value)}
						placeholder="e.g., 30000-50000"
						className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				{/* Posted Date Input */}
				<div>
					<label
						htmlFor="postedDate"
						className="block text-md font-medium text-gray-700"
					>
						Posted Date
					</label>
					<input
						type="date"
						id="postedDate"
						value={postedDate}
						onChange={(e) => setPostedDate(e.target.value)}
						className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>
         {/* Apply Filter Button */}
      <button
      onClick={getFilters}
        className="bg-custom_bg text-white py-2 px-4 rounded hover:bg-custom_color1 hover:text-black animate-swipeIn"
      >
        Apply Filters
      </button>
			</div>
		</>
	);
}
