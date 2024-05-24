import { useRef, useState } from "react";

export default function Api() {
  //   let [name, setName] = useState("");
  let name = useRef(null);
  let id = useRef(null);
  const [val, setVal] = useState("");

  const Call = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    name.current = await res.json();
    console.log(name.current);
  };
  const show = () => {
    val == "id"
      ? (id.current.innerText = `ID: ${name.current.id}`)
      : val == "title"
      ? (id.current.innerText = `Name: ${name.current.title}`)
      : val == "userId"
      ? (id.current.innerText = `${name.current.userId}`)
      : (id.current.innerText = "invalid value");
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setVal(e.target.value);
        }}
        type="text"
      />
      <button onClick={Call}>Call</button>
      <button onClick={show}>show</button>
      <p ref={id}> name: </p>
    </div>
  );
}
