import React, { useContext } from "react";
import "./firetips.css";
import { headerContext } from "../App";
function Firetips() {
  const { firetipsPopupShown, setFiretipsPopupShown } =
    useContext(headerContext);
  return (
    <div className="popup">
      <div className="popup-inner">
        <h3>Very fire tips</h3>
        <ol className="popup-list">
          <li>
            <strong>Stay informed:</strong> Stay up to date with the latest
            information from local authorities and news sources about the
            location and movement of the wildfire. You should also have a plan
            for evacuation, and be aware of the nearest evacuation routes.
          </li>
          <li>
            <strong>Prepare your home and property:</strong> Make sure your home
            and property are fire-resistant by removing flammable debris,
            trimming trees and bushes, and ensuring that your roof and gutters
            are clean. It's also a good idea to create a defensible space around
            your home by clearing vegetation and other flammable materials.
          </li>
          <li>
            <strong>Evacuate early:</strong> If an evacuation order is issued,
            it's important to evacuate as soon as possible. Don't wait until the
            last minute, as roads can become congested and dangerous during a
            wildfire. Make sure you have a "go bag" ready with essential items
            like medications, important documents, and clothing.
          </li>
        </ol>

        <button
          type="button"
          class="btn-close close-btn"
          aria-label="Close"
          onClick={() => {
            setFiretipsPopupShown(!firetipsPopupShown);
          }}
        ></button>
        <h4>Helpful Links</h4>
        <ol>
          <li>
            <a href="https://www.msb.se/" class="link-dark">
              MSB
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Firetips;
