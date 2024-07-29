import "./Control.css";

const Control = ({
  items,
  onSortByAll,
  onSortByActive,
  onSortBySolved,
  onDelete,
  theme
}) => {
  let numItems = items.filter((item) => !item.solved).length;

  return (
    <div className={`control ${theme}-mode`}>
      <p className="number-items"> {numItems} items left</p>

      <div className={`flex ${theme}-mode`}>
        <p className="all" onClick={onSortByAll}>
          All
        </p>
        <p className="active" onClick={onSortByActive}>
          Active
        </p>
        <p className="complete" onClick={onSortBySolved}>
          Completed
        </p>
      </div>

      <p className="clear" onClick={onDelete}>
        Clear Completed
      </p>
    </div>
  );
};

export default Control;

