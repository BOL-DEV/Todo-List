import "./Output.css";

const Output = ({ items, onToggle, onDeleteItem, theme }) => {
  return (
    <div className={`output-container ${theme}-mode`}>
      <ul className="sub-container">
        {items.map((item) => (
          <Item
            item={item}
            onToggle={onToggle}
            onDeleteItem={onDeleteItem}
            key={item.id}
            theme={theme}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onToggle, onDeleteItem, theme }) => {
  return (
    <li className={`item ${theme}-mode`}>
      <label class="custom-checkbox">
        <input
          type="checkbox"
          checked={item.solved}
          onChange={() => onToggle(item.id)}
        />
        <span class={`checkmark ${theme}-mode`}></span>
      </label>
      <span
        style={
          item.solved ? { textDecoration: "line-through", opacity: 0.5 } : {}
        }
      >
        {item.description}
      </span>
      <button className="delete" onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
};

export default Output;
