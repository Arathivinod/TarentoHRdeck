import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import Variant1Deck from "./Variant1Deck";
import Variant2Deck from "./Variant2Deck";
import Variant3Deck from "./Variant3Deck";
import "../App.css";
import "/home/arathivinod/Desktop/React/tarento_hr/src/variant1.css";
import "/home/arathivinod/Desktop/React/tarento_hr/src/variant2.css";
import "/home/arathivinod/Desktop/React/tarento_hr/src/variant3.css";

const Deck = ({ newJoineeId, variant }) => {
  console.log("Variant prop value:", variant);
  const [newJoinee, setNewJoinee] = useState({});
  const [downloadClicked, setDownloadClicked] = useState(false);

  useEffect(() => {
    if (newJoineeId < 0) {
      console.log("id less than 0");
    } else {
      axios
        .get(`http://localhost:8081/newjoinee/${newJoineeId}`)
        .then((response) => {
          console.log(response);
          setNewJoinee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [newJoineeId]);

  const handleDownload = () => {
    setDownloadClicked(true);

    window.scrollTo(0, 0);

    html2canvas(document.getElementById("download-container"), {
      height: document.getElementById("download-container").scrollHeight,
    }).then((canvas) => {
      const dataURL = canvas.toDataURL();

      const a = document.createElement("a");
      a.href = dataURL;
      a.download = "employee_profile.png";

      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      setDownloadClicked(false);
    });
  };

  return (
    <>
      <Button
            className="button-download"
            variant="danger"
            onClick={handleDownload}
            disabled={downloadClicked}
          >
            {downloadClicked ? "Downloading..." : "Download"}
          </Button>
      {newJoineeId < 0 ? (
        <></>
      ) : (
        <>
          
          <div id="download-container">
            {variant <= 1 && <Variant1Deck newJoinee={newJoinee} />}
           {variant === 2 && <Variant2Deck newJoinee={newJoinee} />}
            {variant === 3 && <Variant3Deck newJoinee={newJoinee} />}
          </div>
        </>
      )}
    </>
  );
};

export default Deck;
