import todo from "../models/todo.js";
export const addTodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getTodo = async (request, response) => {
  try {
    const todes = await todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todes);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await todo.findById(request.params.id);

    const todos = await todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await todos.save();

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    await todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    const todos = await todo.findById(request.params.id);

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const todos = await todo.findByIdAndDelete(request.params.id);

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
