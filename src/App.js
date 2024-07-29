import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Input from "./Input";
import Output from "./Output";
import Control from "./Control";

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDelete = () => {
    setItems((items) => items.filter((item) => !item.solved));
  };

  const handleSortByAll = () => {
    setFilter("all");
  };

  const handleSortByActive = () => {
    setFilter("active");
  };

  const handleSortBySolved = () => {
    setFilter("completed");
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, solved: !item.solved } : item
      )
    );
  };

  const handleAddList = (item) => {
    setItems((items) => [...items, item]);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return !item.solved;
    if (filter === "completed") return item.solved;
  });

  return (
    <div className={`App ${theme}-mode`}>
      <div className="container">
        <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
        <Input
          onAddList={handleAddList}
          theme={theme}
        />
        <Output
          items={filteredItems}
          onToggle={handleToggle}
          onDeleteItem={handleDeleteItem}
          theme={theme}
        />
        <Control
          items={items}
          onSortByAll={handleSortByAll}
          onSortByActive={handleSortByActive}
          onSortBySolved={handleSortBySolved}
          onDelete={handleDelete}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import Navbar from "./Navbar";
// import Input from "./Input";
// import Output from "./Output";
// import Control from "./Control";

// function App() {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("all");

//   const handleDeleteItem = (id) => {
//     setItems((items) => items.filter((item) => item.id !== id));
//   };

//   const handleDelete = () => {
//     setItems((items) => items.filter((item) => !item.solved));
//   };

//   const handleSortByAll = () => {
//     setFilter("all");
//   };

//   const handleSortByActive = () => {
//     setFilter("active");
//   };

//   const handleSortBySolved = () => {
//     setFilter("completed");
//   };

//   const handleToggle = (id) => {
//     setItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, solved: !item.solved } : item
//       )
//     );
//   };

//   const handleAddList = (item) => {
//     setItems((items) => [...items, item]);
//   };

//   const filteredItems = items.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "active") return !item.solved;
//     if (filter === "completed") return item.solved;
//   });

//   return (
//     <div className="App">
//       <div className="container">
//         <Navbar />
//         <Input
//           onAddList={handleAddList}
//           onToggle={handleToggle}
//           items={items}
//         />
//         <Output items={filteredItems} onToggle={handleToggle} onDeleteItem={handleDeleteItem}/>
//         <Control
//           items={items}
//           onSortByAll={handleSortByAll}
//           onSortByActive={handleSortByActive}
//           onSortBySolved={handleSortBySolved}
//           onDelete={handleDelete}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
