import React from "react";
import SideBarNew from "../components/sidebar-new";
import NoteDetail from "../components/note-details";

function Details() {
  const handleArchivedClick = () => {
    console.log("Archived clicked!");
  };

  return (
    <div>
      <SideBarNew handleArchivedClick={handleArchivedClick} />
      <NoteDetail />
    </div>
  );
}

export default Details;
