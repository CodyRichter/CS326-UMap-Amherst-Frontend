import React from "react";

export default function Classes() {
  // Array of class objects to load from backend
  let classList = [
    {
      name: "COMPSCI - 121",
      days: "Monday, Wednesday",
      building: "Thompson Hall",
      time: "11:15 AM to 12:05 PM",
      room: "104",
    },
    {
      name: "COMPSCI - 220",
      days: "Tuesday, Thursday",
      building: "ILC",
      time: "10:00 AM to 11:15 AM",
      room: "N 151",
    },
    {
      name: "COMPSCI - 311",
      days: "Friday, Saturday, Sunday",
      building: "Goessmann Lab",
      time: "2:50 AM to 3:11 PM",
      room: "20",
    },
  ];

  let listDOM = []; // stores class list dom
  // Loading all of the classes
  for (let i = 0; i < classList.length; i++) {
    let classDOM = (
      <div className="classes-list-item">
        <div>
          {classList[i].name}{" "}
          <span style={{ float: "right" }}>{classList[i].days}</span>
        </div>
        <div>
          {classList[i].building}{" "}
          <span style={{ float: "right" }}>{classList[i].time}</span>
        </div>
        <div>Room {classList[i].room}</div>
        <button className="classes-button">Remove</button>
      </div>
    );
    listDOM.push(classDOM);
  }

  // No classes loaded check
  if (listDOM.length === 0) {
    listDOM = (
      <div className="classes-list-item">
        <div>No classes scheduled :(</div>
      </div>
    );
  }

  return (
    <div>
      <div className="classes-dashboard">
        <div>
          <span className="classes-title">Class Schedule</span>
          <button className="classes-button">Add Class</button>
        </div>
        <div className="classes-list">{listDOM}</div>
        <button className="classes-button">Save Classes</button>
        <button className="classes-button">Return to Map</button>
      </div>
    </div>
  );
}
