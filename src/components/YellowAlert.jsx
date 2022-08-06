import React from "react";
import '../App.css';

const YellowAlert = ({ bold, description }) => {
    return (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{bold}</strong> {description}
        </div>
    );
};

export default YellowAlert;