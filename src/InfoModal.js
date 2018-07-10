import React from "react";

const InfoModal = props => (
  <div className="fixed top-0 right-0 bottom-0 z-5 mw-3 h-50 pa3 mt5 bg-light-blue">
    <h4>For 2+ people:</h4>
    <div>
      <p>Click 'Create Shared Practise' button</p>
      <p>Copy and share the URL</p>
      <p>People who go to the same URL will see the same question</p>
      <p>
        Press 'c' to view the controls, these are hidden at first when sharing
      </p>
      <p>Use the dropdown menu to hold the part of the question</p>
    </div>
  </div>
);

export default InfoModal;
