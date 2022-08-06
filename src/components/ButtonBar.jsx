import { Link } from "react-router-dom";
import React from "react";

const ButtonBar = () => {
    return (<div class="btn-group">
        <Link to="/beginner">
            <button type="button" class="btn btn-outline-info">
            Beginner Collection
            </button>
        </Link>
        <Link to="/intermediate">
            <button type="button" class="btn btn-outline-info">
            Intermediate Collection
            </button>
        </Link>
        <Link to="/advanced">
            <button type="button" class="btn btn-outline-info">
            Advanced Collection
            </button>
        </Link>
        <Link to="/store">
            <button type="button" class="btn btn-outline-info">
            Full Collection
            </button>
        </Link>
    </div>);
}

export default ButtonBar;