import "../../styles/atoms.css"

export default function Button(props) {
    return(
        <button className="globalButton">
            {props.text}
        </button>
    );
}