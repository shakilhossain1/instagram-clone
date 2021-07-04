import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);
  return (
    <div className="bg-gray-background py-12">
      <div className="max-w-screen-lg mx-auto">
        <p className="text-center text-2xl">Not Found</p>
      </div>
    </div>
  );
}

export default NotFound;
