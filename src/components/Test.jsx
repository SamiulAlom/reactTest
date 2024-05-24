import { useState } from "react";

export default function Test() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [undo, setUndo] = useState([]);

  const AddItem = () => {
    setList([...list, item]);
  };

  const RemoveItem = (index) => {
    const newList = [...list];
    const removedItem = newList.splice(index, 1)[0];
    setList(newList);
    setUndo([...undo, removedItem]);
  };

  const undoTable = (index) => {
    const newUndoList = [...undo];
    const itemToUndo = newUndoList.splice(index, 1)[0];
    setList([...list, itemToUndo]);
    setUndo(newUndoList);
  };

  return (
    <div>
      <input
        onChange={(e) => setItem(e.target.value)}
        placeholder="Fruit"
        type="text"
      />
      <button onClick={AddItem}>Add</button>
      <br />
      <table className="table">
        <tbody>
          <tr>
            <th>Number</th>
            <th>Fruit</th>
            <th>Action</th>
          </tr>
          {list.length !== 0 ? (
            list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => RemoveItem(index)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
      <h1>Undo Table</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>Number</th>
            <th>Fruit</th>
            <th>Action</th>
          </tr>
          {undo.length !== 0 ? (
            undo.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => undoTable(index)}>Undo</button>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
