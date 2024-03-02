import React from "react";

const Hackshetra: React.FC<void> = () => {
  return (
    <div className="h-full w-full flex-shrink-0 overflow-y-auto flex justify-end">
        <div 
            className="apply-button p-2" 
            data-button-theme="light"
            data-hackathon-slug="hackshetra-24" 
            style={{height: "44px", width: "312px"}}
        >Apply with Devfolio</div>
    </div>
  );
};

export default { Hackshetra };
