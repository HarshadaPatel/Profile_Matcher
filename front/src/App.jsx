// import ProfileForm from '../../front/src/components/ProfileForm';
import React, { useState } from 'react';

import ProfileForm from './components/ProfileForm';
import FilterTab from './components/FilterTab';

function App() {
  const [tab, setTab] = useState('form');

  return (
    <div>
      <button onClick={() => setTab('form')}>Profile Form</button>
      <button onClick={() => setTab('filter')}>Filter Profiles</button>
      
      {tab === 'form' ? <ProfileForm /> : <FilterTab />}
    </div>
  );
}

export default App;
