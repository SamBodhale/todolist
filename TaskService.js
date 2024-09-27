
export const TaskService = {
    tasks: [
      { id: 1, name: "Sample Task 1", isComplete: false },
      { id: 2, name: "Sample Task 2", isComplete: true }
    ],
  
    getTasks() {
      return this.tasks;
    },
  
    addTask(task) {
      this.tasks.push(task);
    },
  
    updateTask(updatedTask) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
  
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  };
  