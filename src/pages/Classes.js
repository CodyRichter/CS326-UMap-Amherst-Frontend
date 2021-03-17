import React from "react";

export default function Classes() {
  return (
    <div>
      <div className="classes-dashboard">
        <div>
          <span className="classes-title">Class Schedule</span>
          <button className="classes-button">Add Class</button>
        </div>
        <div className="classes-list">
          <div className="classes-list-item">
            <div>
              COMPSCI - 121{" "}
              <span style={{ float: "right" }}>Monday, Wednesday</span>
            </div>
            <div>
              Thompson Hall{" "}
              <span style={{ float: "right" }}>11:15 AM to 12:05 PM</span>
            </div>
            <div>Room 104</div>
            <button className="classes-button">Remove</button>
          </div>
        </div>
        <button className="classes-button">Save Classes</button>
        <button className="classes-button">Return to Map</button>
      </div>
    </div>
  );
}
