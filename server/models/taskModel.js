const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    taskName: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: false },

  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
