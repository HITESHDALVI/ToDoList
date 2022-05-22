import "./styles.css";

export default function ToDoList() {
  return (
    <div className="to-do-list">
      <h1> this is to do list</h1>
      <div className="input-field">
        <input className="add-item" placeholder="Add To Do" type="text" />
        <button className="add-item-btn">Add</button>
      </div>
    </div>
  );
}
