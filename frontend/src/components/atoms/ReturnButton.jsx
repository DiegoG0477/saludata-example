export default function ReturnButton(props) {
    return(
        <button
        type="button"
        class="btn globalButton-red"
    
        // data-bs-target="{#staticBackdrop4}"
        data-bs-target={props.page}
        style={{marginRight: "1vw"}}
        data-bs-toggle="modal"
        data-bs-dismiss="modal"
      >
        Regresar
      </button>
    );

}
