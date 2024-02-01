import React from "react";
import SideBarNew from "../components/sidebar-new";
import AddNote from "../components/add-note";

function AddNotePage() {
  const handleArchivedClick = () => {
    console.log("Archived clicked!");
  };

  return (
    <div>
      <SideBarNew handleArchivedClick={handleArchivedClick} />
      <AddNote />
    </div>
  );
}

export default AddNotePage;
