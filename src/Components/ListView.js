import React from "react";
import { Link } from "react-router-dom";
import "../Styles/listview.css";
import { Trash3, PencilSquare } from "react-bootstrap-icons";

//get album from album list and show using html css and js
const ListView = (props) => {
  return (
    <div className="list">
      <h3>{props.album.title}</h3>
      <div className="button-group">
        <Link to="/update-album">
          <button
            className="update-btn"
            onClick={() => props.setUpdateAlbum(props.album)}
          >
            {<PencilSquare />}
          </button>
        </Link>
        <button
          className="delete-btn"
          onClick={() => props.deleteAlbumFromList(props.album.id)}
        >
          {<Trash3 />}
        </button>
      </div>
    </div>
  );
};

export default ListView;
