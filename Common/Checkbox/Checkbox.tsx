const Checkbox = (props: any) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.val}
        onChange={() => {
          props.setValue(!props.val);
        }}
      />
      {props.label}
    </label>
  );
};
export default Checkbox;
