import { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1100);
    return () => clearTimeout(timer);
  }, []); 

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-textColor opacity-50"></div>
          <div className="bg-whiteBack font-mainFont p-8 max-w-md mx-auto rounded shadow-lg relative">
            <h2 className="text-3xl font-extrabold mb-4 text-center italic">Notice</h2>
            <p className='text-center'>
              This website is hosted on free services, 
              and there may be a delay of up to 30 seconds for the server to respond and serve the data. 
              If you are testing the site, 
              please be patient and allow up to 30 seconds for the content to load.
            </p>
            <div className='flex justify-center align-center'>
              <button
                onClick={togglePopup}
                className="mt-4 bg-textColor text-whiteBack py-2 px-4 rounded"
              >
                I understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
