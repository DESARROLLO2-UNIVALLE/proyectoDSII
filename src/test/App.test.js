import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoList from "../components/TodoList/TodoList";

describe("ToDoList Component", () => {
  // Test initial render
  test("renders input field and add button", () => {
    render(<ToDoList />);

    // Check if input field exists
    const inputElement = screen.getByPlaceholderText("Add a new task");
    expect(inputElement).toBeInTheDocument();

    // Check if add button exists
    const addButton = screen.getByText("Add");
    expect(addButton).toBeInTheDocument();
  });

  // Test adding a task
  test("adds a new task when add button is clicked", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Type a task and click add
    fireEvent.change(inputElement, { target: { value: "New test task" } });
    fireEvent.click(addButton);

    // Check if task is added to the list
    const taskElement = screen.getByText("New test task");
    expect(taskElement).toBeInTheDocument();
  });

  // Test adding an empty task
  test("does not add an empty task", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Try to add an empty task
    fireEvent.change(inputElement, { target: { value: "   " } });
    fireEvent.click(addButton);

    // Check that no task is added
    const taskList = screen.queryByRole("list");
    expect(taskList.children.length).toBe(0);
  });

  // Test task completion toggle
  test("toggles task completion when task is clicked", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Add a task
    fireEvent.change(inputElement, { target: { value: "Toggle test task" } });
    fireEvent.click(addButton);

    // Find the task and click to toggle
    const taskElement = screen.getByText("Toggle test task");
    fireEvent.click(taskElement);

    // Check if task has completed class
    expect(taskElement.closest("li")).toHaveClass("completed");
  });

  // Test task deletion
  test("deletes a task when delete button is clicked", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Add a task
    fireEvent.change(inputElement, { target: { value: "Delete test task" } });
    fireEvent.click(addButton);

    // Find and click delete button
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    // Check that task is removed
    const taskElement = screen.queryByText("Delete test task");
    expect(taskElement).not.toBeInTheDocument();
  });

  // Test multiple tasks
  test("can add multiple tasks", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Add multiple tasks
    const tasks = ["First task", "Second task", "Third task"];
    tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.click(addButton);
    });

    // Check all tasks are present
    tasks.forEach((task) => {
      const taskElement = screen.getByText(task);
      expect(taskElement).toBeInTheDocument();
    });
  });

  test("marks task as complete using Enter key", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Add a task
    fireEvent.change(inputElement, {
      target: { value: "Keyboard complete test" },
    });
    fireEvent.click(addButton);

    // Find the task span and focus it
    const taskElement = screen.getByText("Keyboard complete test");
    fireEvent.keyDown(taskElement, { key: "Enter", code: "Enter" });

    // Check if task has completed class
    expect(taskElement.closest("li")).toHaveClass("completed");
  });

  test("marks task as complete using Space key", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    // Add a task
    fireEvent.change(inputElement, {
      target: { value: "Space key complete test" },
    });
    fireEvent.click(addButton);

    // Find the task span and focus it
    const taskElement = screen.getByText("Space key complete test");
    fireEvent.keyDown(taskElement, { key: " ", code: "Space" });

    // Check if task has completed class
    expect(taskElement.closest("li")).toHaveClass("completed");
  });

  test("adds task using Enter key in input field", () => {
    render(<ToDoList />);

    const inputElement = screen.getByPlaceholderText("Add a new task");

    // Type a task and press Enter
    fireEvent.change(inputElement, { target: { value: "Enter key task" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    // Check if task is added to the list
    const taskElement = screen.getByText("Enter key task");
    expect(taskElement).toBeInTheDocument();
  });
});
