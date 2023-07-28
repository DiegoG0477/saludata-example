import "../../styles/atoms.css";
export default function Input(props) {
  return (
    <>
      <input
        type="text"
        className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
        placeholder={props.placeholder}
      />
    </>
  );
}
