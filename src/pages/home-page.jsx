import React, { useState, useEffect } from "react";
import SideBarNew from "../components/sidebar-new";
import NotesList from "../components/note-list";
import Search from "../components/search-note";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchKeyword = searchParams.get("search") || "";
    setKeyword(decodeURIComponent(searchKeyword));
  }, [location]);

  const handleKeywordChange = (newKeyword) => {
    setKeyword(newKeyword);
    navigate(`?search=${encodeURIComponent(newKeyword)}`);
  };

  const handleArchivedClick = () => {
    navigate("/archived");
  };

  return (
    <div>
      <SideBarNew handleArchivedClick={handleArchivedClick} />
      <Search keyword={keyword} keywordChange={handleKeywordChange} />
      <NotesList keyword={keyword} />
    </div>
  );
}

export default HomePage;
