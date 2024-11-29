/* eslint-disable react/prop-types */
export default function Input({ title, id, text, prefix, ...props }) {
  return (
    <div className="input-field">
      <label htmlFor={id}>{title}</label>
      <div className="input-style">
        {prefix && <div>{text}</div>}
        <input id={id} name={id} type="number" required {...props} />
        {!prefix && <div>{text}</div>}
      </div>
    </div>
  );
}
