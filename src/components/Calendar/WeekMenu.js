import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { db } from "../../utils/firebase";
import { query, onSnapshot, addDoc, collection } from "firebase/firestore";

const WeekMenu = () => {
  const today = new Date();

  const [event, setEvent] = useState("");

  useEffect(() => {
    const q = query(collection(db, "WeekPlanner"));
    const unsub = onSnapshot(q, (snap) => {
      const array = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(array);
      setEvent([...array]);
    }); 
    return () => {
      unsub();
    };
  }, []);

  function handleDateClick(e) {
    const NewEvent = {
      // get the Id of the recipe???
      date: e.date,
    };
    console.log("datum:", handleDateClick);
    console.log("event:", NewEvent);
    addDoc(collection(db, "WeekPlanner"), NewEvent);
  }

  return (
    <>
      <h1 className="recipeDetail__title">Calendar</h1>
      <h2 className="recipeDetail__title">Weekly Menu</h2>
      <div>
        Today:
        {today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear()}
      </div>
      <FullCalendar
        events={event}
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
      />
    </>
  );
};

export default WeekMenu;
