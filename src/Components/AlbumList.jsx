import React from "react";
import ListView from "./ListView";
import Navbar from "./Navbar";
import "../Styles/album-list.css";

//get all albums list from app and then call list component for each list on the albums
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar page="Create New Album" path="/add-album" />

      <div className="albums-list">
        {props.albums.map((album) => (
          <ListView
            album={album}
            key={album.id}
            setUpdateAlbum={props.setUpdateAlbum}
            deleteAlbumFromList={props.deleteAlbumFromList}
          />
        ))}
      </div>
    </>
  );
};

export default AlbumsList;
