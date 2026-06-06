import { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  render() {

    const { onChange, filter } = this.props;

    return (
      <>
        <label className="filter-container">
          <h2 className="filter-title">Filter contacts:</h2>
          <input
            onChange={onChange}
            value={filter}
            type="text"
            name="filter"
            className="filter-input"
          />
        </label>
      </>
    );
  }
}

export default Filter;
