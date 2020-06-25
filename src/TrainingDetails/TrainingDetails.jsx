import React from "react";

export const TrainingDetails = ({ type } = this.props) => {
  return (
    <div>
      <h1>{type}</h1>
      {type === "4x4" && (
        <>
          <p>
            After warming up, pick 4 boulder problems or routes that are about
            2-4 grades below your max, and try to climb all 4 within 5-6 minutes
            (10-15 min if you’re climbing routes). If V0 or V1 is your max, add
            feet or hands to your problems to make them easier. Do all 4
            problems or routes in a row without resting. Rest 4 minutes between
            sets if your bouldering and 10 min between sets if you’re climbing
            routes. You’ll want to climb 4 rounds total, hence the name 4×4 .
            Have fun!
          </p>
          <ul>
            <li>
              Problems or routes should not be tweaky, and you should ideally
              know them well.
            </li>
            <li>
              On boulder problems don’t top out, it’ll save time and give you a
              better workout.
            </li>
            <li>
              Jog to the next problem or route and start up the wall without
              rest.
            </li>
            <li>
              If you fall off before the halfway mark, try the problem again or
              pull back on to the route from where you fell off. If you fall
              from more than halfway up, move on to the next problem or route.{" "}
            </li>
            <li>
              If you can’t finish all 4, pick easier problems or routes for the
              next round. You want to be able to just barely finish the circuit.
            </li>
          </ul>
        </>
      )}
      <button>{type !== 'Injury Recovery' ? 'Begin Training' : 'Begin Recovery'}</button>
    </div>
  );
};
