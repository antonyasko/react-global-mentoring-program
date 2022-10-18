import { PureComponent } from "react";
import "./GenreToggle.css";

export class GenreToggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeGenre: "all",
      genres: props.genres,
    };
  }

  onButtonClick(e) {
    console.log("Genre: ", e.target.dataset.name);

    this.setState((state) => ({
      ...state,
      activeGenre: e.target.dataset.name,
    }));
  }

  render() {
    return (
      <div className="container genre-toggle-container">
        {this.state.genres.map((genre) => (
          <button
            className={genre === this.state.activeGenre ? "active" : ""}
            data-name={genre}
            key={genre}
            onClick={this.onButtonClick.bind(this)}
          >
            {genre}
          </button>
        ))}
      </div>
    );
  }
}
