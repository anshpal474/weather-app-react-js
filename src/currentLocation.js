import React from "react";
import Clock from "react-live-clock";
import Forcast from "./forcast";
import ReactAnimatedWeather from "react-animated-weather";
import loader from "./images/WeatherIcons.gif";

const dateBuilder = (d) => {
  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day}, ${date} ${month} ${year}`;
};

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

class Weather extends React.Component {
  state = {
    temperatureC: 30,
    temperatureF: 86,
    city: "Demo City",
    country: "IN",
    humidity: 65,
    main: "Sunny",
    icon: "CLEAR_DAY",
    ready: false
  };

  componentDidMount() {
    // Simulate loading
    setTimeout(() => {
      this.setState({ ready: true });
    }, 1000);
  }

  render() {
    if (this.state.ready) {
      return (
        <React.Fragment>
          <div className="city">
            <div className="title">
              <h2>{this.state.city}</h2>
              <h3>{this.state.country}</h3>
            </div>
            <div className="mb-icon">
              <ReactAnimatedWeather
                icon={this.state.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
              <p>{this.state.main}</p>
            </div>
            <div className="date-time">
              <div className="dmy">
                <div id="txt"></div>
                <div className="current-time">
                  <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </div>
                <div className="current-date">{dateBuilder(new Date())}</div>
              </div>
              <div className="temperature">
                <p>{this.state.temperatureC}°<span>C</span></p>
              </div>
            </div>
          </div>
          <Forcast icon={this.state.icon} weather={this.state.main} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
          <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
            Loading demo weather data...
          </h3>
        </React.Fragment>
      );
    }
  }
}

export default Weather;
