import React, { useState } from 'react';
import SideBarNew from '../components/sidebar-new';
import Search from '../components/search-note';
import ArchivedNotes from '../components/archived-notes';

function Archived() {
  const [keyword, setKeyword] = useState('');

  const handleArchivedClick = () => {
    console.log('Archived clicked!');
  };

  return (
    <div>
      <SideBarNew handleArchivedClick={handleArchivedClick} />
      <Search keyword={keyword} keywordChange={setKeyword} />
      <ArchivedNotes keyword={keyword} />
    </div>
  );
}

export default Archived;
