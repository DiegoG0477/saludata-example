// import "../../App.css"
import "../../styles/atoms.css";
function InputLabel(props) {
  return (
    <>
      <div className="input-box">
        <label
          for="pacient-names"
          className="form-label"
          style={{ fontWeight: "bold" }}
        >
          {props.text}
        </label>
        <input
          type="text"
          className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
          id="pacients-names"
          placeholder={props.holder}
          style={{ width: props.ancho + "vw", height: "8vh" }}
          onChange={(event) => {
            props.metodo(event.target.value);
          }}
        />
      </div>
    </>
  );
}
export default InputLabel;
