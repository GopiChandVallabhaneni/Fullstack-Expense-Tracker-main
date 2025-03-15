import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
    address: '',
    designation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      username: '',
      password: '',
      phone: '',
      address: '',
      designation: ''
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100">
      <div className="bg-orange-200 p-6 rounded-lg shadow-lg w-80">
        <h4 className="text-center font-bold text-xl mb-">Welcome to Expense Tracker</h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username" className="font-bold mb-1">USERNAME</label>
            <input type="text" id="username" className="border border-green-300 rounded-md p-2 mb-4" name="username" placeholder="User Name" value={formData.username} onChange={handleChange} required />

            <label htmlFor="password" className="font-bold mb-1">PASSWORD</label>
            <input type="password" id="password" className="border border-green-300 rounded-md p-2 mb-4" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

            <label htmlFor="phone" className="font-bold mb-1">PHONE</label>
            <input type="number" id="phone" className="border border-green-300 rounded-md p-2 mb-4" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />

            <label htmlFor="address" className="font-bold mb-1">ADDRESS</label>
            <input type="text" id="address" className="border border-green-300 rounded-md p-2 mb-4" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />

            <label htmlFor="designation" className="font-bold mb-1">Select Your Designation</label>
            <select id="designation" className="border border-green-300 rounded-md p-2 mb-4" name="designation" value={formData.designation} onChange={handleChange} required>
              <option value="" disabled>Select Your Designation</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 hover:text-red-500">Submit</button>
            <button type="button" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 hover:text-red-500" onClick={handleClear}>Clear</button>
          </div>

          <div className="text-center mt-4">
            <a href="" className="text-blue-700 hover:underline">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
