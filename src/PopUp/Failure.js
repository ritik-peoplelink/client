import React, { useState } from "react";
import Popup from "./Popup";

const Failure = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const { response } = props;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <Popup title="Oops! Error?" onClose={handleClose}>
          {response ? (
            <div>
              <h3>{response?.status}</h3>
              <pre>{JSON.stringify(response?.data)}</pre>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </Popup>
      )}
    </div>
  );
};
export default Failure;
