export default function CollapseButton(props) {
  return (
    <>
      <div className="dropdown-center">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {props.text}
        </button>
      </div>
    </>
  );
}
