import React, { useEffect } from 'react';
import Timeline from '../components/TimeLine';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
