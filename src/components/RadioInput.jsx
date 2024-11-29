/* eslint-disable react/prop-types */
export default function RadioInput({ title, name, id, value, ...props }) {
  return (
    <p className="radio-style">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        {...props}
        required
      />
      <label htmlFor={id}>{title}</label>
    </p>
  );
}
