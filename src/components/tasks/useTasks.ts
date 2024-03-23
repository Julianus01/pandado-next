import { useState } from "react";

const LS_TASKS_KEY = 'tasks'

function getLsTasks() {
  if (typeof window === 'undefined') {
    return []
  }

  const tasksString = localStorage.getItem(LS_TASKS_KEY);
  const tasksJson = JSON.parse(tasksString || '[]')

  return tasksJson
}

function saveTasksToLs(tasks: Task[]) {
  if (typeof window !== 'undefined') {
    const tasksString = JSON.stringify(tasks)
    localStorage.setItem(LS_TASKS_KEY, tasksString)
  }
}

export interface Task {
  title: string
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(getLsTasks())

  function saveTask(newTask: Task) {
    setTasks(prevTasks => ([newTask, ...prevTasks]))
  }

  return { tasks }
}