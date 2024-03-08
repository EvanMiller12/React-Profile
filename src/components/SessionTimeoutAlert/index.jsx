import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import useIdle from "../../hooks/useIdleTimer.js";

export function SessionTimeoutAlert() {
  const fetcher = useFetcher();
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleIdle = () => {
    setShowModal(true); //show modal
    setRemainingTime(10); //set 10 seconds as time remaining
  };

  // set idle time to 60s
  const { isIdle } = useIdle({ onIdle: handleIdle, idleTime: 0.6 });
  // console.log("is user idle?", isIdle);

  useEffect(() => {
    let interval;

    if (isIdle && showModal) {
      interval = setInterval(() => {
        setRemainingTime(
          prevRemainingTime =>
            prevRemainingTime > 0 ? prevRemainingTime - 1 : 0 //reduces the second by 1
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isIdle, showModal]);

  useEffect(() => {
    if (remainingTime === 0 && showModal) {
      // alert("Time out!");
      handleLogOut();
    }
  }, [remainingTime, showModal]); // this is responsoble for logging user out after timer is down to zero and they have not clicked anything

  const handleLogOut = () => {
    setShowModal(false);
    fetcher.load("/session-timeout");
  };

  const handleStayLoggedIn = () => {
    setShowModal(false);
  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      {isIdle && showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Idle Timeout Warning</h2>
            <p>You are about to be logged out due to inactivity.</p>
            <br />
            Time remaining:
            {millisToMinutesAndSeconds(remainingTime * 1000)}
            <br />
            <div className="row">
              <button className="btn btn-danger" onClick={handleLogOut}>
                Logout
              </button>
              <button className="btn btn-primary" onClick={handleStayLoggedIn}>
                Stay Logged In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
