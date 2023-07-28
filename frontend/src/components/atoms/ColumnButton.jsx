import "../../styles/atoms.css";
import {useNavigate} from "react-router-dom";

export default function ColumnButton(props) {
    // const navigate = useNavigate();
    
    // const handleClick = () => {
    //     navigate(props.to);
    // };
    return (
    <>
      <button
        type="button"
        class="btn btn-secondary btn-sm "
        style={{ background: props.color }}
        onClick={props.metodo}
        data-bs-target={props.page}
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
      >
        {props.text}
      </button>
    </>
  );
}
