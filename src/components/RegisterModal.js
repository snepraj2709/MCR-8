import { useState } from "react";

const RegisterModal = ({ isOpen, onClose, registerEvent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    registerEvent(true);
    // Handle form submission here
    // You can access the name and email values using the `name` and `email` state variables
    // Perform any necessary validation or API calls
    // Close the modal or show success message
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50`}>
      <div className="bg-white w-80 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Complete your RSVP</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fill in your personal information
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              You have to make payment at the venue
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
