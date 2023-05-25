import { useContext } from "react";
import "./Chart.scss";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";

import LineChart from "../../components/LineChart";
import { LayoutContext } from "../../components/Layout";
import SongItem from "../../components/SongItem";

const Chart = () => {
  const { songs } = useContext(LayoutContext);

  return (
    <div className="chart home">
      <div className="align-items-center d-flex">
        <h3 className="chart-heading">Chart</h3>
        <div className="chart-play-icon">
          <BsFillPlayFill />
        </div>
      </div>

      <div className="chart">
        <LineChart className="canvas" />

        <div className="chart-playlist">
          {songs.map((song, index) => (
            <div
              className="playlist-item d-flex align-items-center"
              key={song.id}
            >
              <div className={`playlist-position top-${index + 1}`}>
                {index + 1}
              </div>
              <div className="playlist-line">
                <AiOutlineLine />
              </div>
              <SongItem key={song.id} song={song} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
