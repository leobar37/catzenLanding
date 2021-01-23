import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="loading">
      <h3>Cargando</h3>
      <ReactLoading className="spiner" height={"20%"} />
    </div>
  );
}

export default Loading;
