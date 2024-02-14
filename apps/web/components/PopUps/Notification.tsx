import React from "react";
import PopUp from "./Events/PopUp";
import NotificationsPopUp from "./Dates/PopUp";
const Notification: React.FC<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visibleNotifications: boolean;
  setVisibleNotifications: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  visible,
  setVisible,
  visibleNotifications,
  setVisibleNotifications,
}) => {
  return (
    <div className="absolute z-50">
      <PopUp visible={visible} setVisible={setVisible} />
      <NotificationsPopUp
        visibleNotifications={visibleNotifications}
        setVisibleNotifications={setVisibleNotifications}
      />
    </div>
  );
};

export default Notification;
