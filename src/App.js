import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [artwork, setArtwork] = useState({});
  const [name, setName] = useState("");
  const [correctAnswerText, setCorrectAnswerText] = useState("");
  const [index, setIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);

  const getArtwork = () => {
    axios.get("http://localhost:3004/paintings").then((res) => {
      console.log(res.data);
      setArtwork(res.data);
    });
  };

  const handleChange = (e) => {
    setCorrectAnswerText("");
    if (e.target.value === "right") {
      setRightCount(rightCount + 1);
    }
    setTotalCount(totalCount + 1);
    setName("");
    getArtwork();
  };

  useEffect(() => {
    getArtwork();
  }, [totalCount]);

  return (
    <div>
      <table>
        <tbody>
          <tr style={{ margin: 20 }}>
            <img
              style={{ minHeight: 500 }}
              height="500"
              minHeight="500"
              src={artwork.url}
            ></img>
          </tr>
          <hr />
          <tr>
            <th>Response</th>
          </tr>
          <tr style={{ marginTop: 20 }}>
            <input type="text" name={name}></input>
            <input
              type="submit"
              name="Submit"
              onClick={() =>
                setCorrectAnswerText(
                  `${artwork.title} by ${artwork.artist} (${artwork.createdYear})`
                )
              }
            ></input>
            <button value="right" onClick={handleChange}>
              Right
            </button>
            <button value="wrong" onClick={handleChange}>
              Wrong
            </button>
          </tr>

          <tr>
            <th>Correct Answer</th>
          </tr>
          <tr>
            <td>{correctAnswerText}</td>
          </tr>
          <tr>
            <p>
              Percentage correct:{" "}
              {((rightCount / (totalCount > 0 ? totalCount : 1)) * 100).toFixed(
                2
              )}
              %
            </p>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
