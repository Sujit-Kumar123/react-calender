import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./componet/calen.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import fastival from "./Fastival_data";
import FastGallery from "./FastGallery";

const Calen = () => {
  const [date, setDate] = useState(null);
  const [event, setEvent] = useState(false);
  const [fastivalIndex, setFastivalIndex] = useState();
  const handleOnClick = (date) => {
    
    setDate(date);

    if (fastival.some((item) => item.fastivalDate === date.toDateString())) {
      setFastivalIndex(
        fastival.findIndex((obj) => obj.fastivalDate === date.toDateString())
      );
      setEvent(true); 
    }
    //console.log(date.toDateString())
  };
//Appendind Fastival type
 /* const root = ReactDOM.createRoot(
    document.getElementsByClassName("react-calendar__navigation")
  );
  const element = <h1>Hello, world</h1>;
  root.render(element); */
  return (
    <>
      {event && (
        <FastGallery
          images={fastival[fastivalIndex].imgUrl}
          fastival={fastival[fastivalIndex].fastivalName}
        />
      )}
      {!event && (
        <div className="container">
          <div className="calendar-container">
            <Calendar
              formatShortWeekday={(locale, value) =>
                [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ][value.getDay()]
              }
              onChange={handleOnClick}
              value={date}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Calen;
