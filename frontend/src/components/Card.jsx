import React from "react";
import "../App.css";

function Card(props) {
  var modal;
  if(props.num==1){
    modal="#staticBackdrop";
  }else if(props.num==2){
    modal="#modalConsulta"
  }else if(props.num==3){
    modal="#modalEliminar"
  }else if(props.num==4){
    modal="#modalPaciente"
  }else if(props.num==5){
    modal="#modalModificar"
  } else if(props.num==6){
    modal = "#modalRegistrarConsById"
  }
  return (
    <>
      <div class="card" style={{ width: "19vw", paddingTop:"17px",paddingBottom:"17px", borderWidth:"0px", background:"white"}}>
        <div class="card-body" style={{ textAlign: "center" }}>
          <div>
            <img src={props.img} alt="" style={{ width: "65px" }} />
          </div>
          <h5 class="card-title" style={{marginTop:"18px",marginBottom:"18px", fontWeight:"700", fontSize:"1.5rem"}}>{props.title}</h5>

            <button data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target={modal}  href="#exampleModalToggle" role="button" class="btn btn-primary"style={{fontSize:"18px", fontWeight:"700", paddingTop:"0.25vh",  borderRadius: "10px",background: "#268D78", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",width:"12vw", height:"40px", borderWidth:"0px"}}>  <p style={{textAlign:"center", paddingTop:"1vh"}}>{props.icon}  {props.buttonText}</p></button>

        </div>
      </div>
    </>
  );
}

export default Card;
