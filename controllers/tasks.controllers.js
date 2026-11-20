import Task from "../models/Task.js";
export async function getAllTasks(rep, res) {
  try {
    const tasks = await Task.find();

    res.status(200).json({ data: tasks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getTaskById(rep, res) {
  console.log("id", req.params.id);
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Tache introuvable" });
    }
    res.status(200).json({ data: task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createTask(rep, res) {
  const newTask = await Task.create(req.body);
  res.status(200).json({ data: newTask });
}

export async function updateTask(rep, res) {
  console.log(req.body);
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ error: "Tache introuvble" });
    }
    res.status(200).json({ data: task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteTask(rep, res) {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
}
