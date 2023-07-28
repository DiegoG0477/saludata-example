// import "../../App.css"
import "../../styles/atoms.css";
function ReadInput(props) {
  return (
    <>
      <div className="input-box">
        <label
          htmlFor="pacient-names"
          className="form-label"
          style={{ fontWeight: "bold" }}
        >
          {props.label}
        </label>
        <input
          type="text"
          className="shadow-sm p-3 mb-5 bg-body-tertiary form-control read-input"
          value={props.readInfo}
          id="pacients-names"
          placeholder={props.holder}
          style={{
            height: "7vh",
            fontWeight: "bold",
          }}
          disabled
          readOnly
        />
      </div>
    </>
  );
}
export default ReadInput;
