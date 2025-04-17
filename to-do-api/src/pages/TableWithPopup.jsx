import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const API_URL = 'http://localhost:3001/tasks';

const TableWithPopup = () => {
  const [rows, setRows] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    time: '',
    durationHour: '',
    durationMinute: '',
  });

  // Fetch data on component mount
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setRows(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add new task
  const handleAdd = async () => {
    const newTask = {
      title: formData.title,
      timeOfBegin: formData.time,
      duration: `${formData.durationHour}h ${formData.durationMinute}m`,
      date: formData.date.toLocaleDateString(),
      done: false,
    };

    try {
      const response = await axios.post(API_URL, newTask);
      setRows([...rows, response.data]);
      setPopupOpen(false);
      setFormData({ title: '', date: new Date(), time: '', durationHour: '', durationMinute: '' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Toggle task "done"
  const toggleDone = async (index) => {
    const task = rows[index];
    const updatedTask = { ...task, done: !task.done };

    try {
      await axios.patch(`${API_URL}/${task.id}`, { done: updatedTask.done });
      const newRows = [...rows];
      newRows[index] = updatedTask;
      setRows(newRows);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="p-6">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Time of Begin</th>
            <th className="px-4 py-2 border">Duration</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Done</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id} className="text-center">
              <td className="px-4 py-2 border">{row.id}</td>
              <td className="px-4 py-2 border">{row.title}</td>
              <td className="px-4 py-2 border">{row.timeOfBegin}</td>
              <td className="px-4 py-2 border">{row.duration}</td>
              <td className="px-4 py-2 border">{row.date}</td>
              <td className="px-4 py-2 border">
                <input
                  type="checkbox"
                  checked={row.done}
                  onChange={() => toggleDone(index)}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="6" className="text-center py-3">
              <button
                onClick={() => setPopupOpen(true)}
                className="text-green-600 hover:text-green-800 text-lg"
              >
                <i className="fas fa-plus-circle"></i> Add New
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* POPUP */}
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-bold mb-4 text-center">Add New Entry</h2>

            <input
              type="text"
              placeholder="Title"
              className="w-full mb-3 px-4 py-2 border rounded"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <div className="relative mb-3">
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                className="w-full px-4 py-2 border rounded"
              />
              <i className="fas fa-calendar-alt absolute top-3 right-3 text-gray-400"></i>
            </div>

            <input
              type="time"
              className="w-full mb-3 px-4 py-2 border rounded"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />

            <div className="flex space-x-2">
              <input
                type="number"
                min="0"
                placeholder="Hours"
                className="w-1/2 px-4 py-2 border rounded"
                value={formData.durationHour}
                onChange={(e) => setFormData({ ...formData, durationHour: e.target.value })}
              />
              <input
                type="number"
                min="0"
                max="59"
                placeholder="Minutes"
                className="w-1/2 px-4 py-2 border rounded"
                value={formData.durationMinute}
                onChange={(e) => setFormData({ ...formData, durationMinute: e.target.value })}
              />
            </div>

            <button
              onClick={handleAdd}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add Entry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableWithPopup;
