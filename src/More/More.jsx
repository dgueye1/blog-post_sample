import React from "react";
import "./More.css";

function More () {
    return (
        <div className="More rounded p-3 mb-2 bg-primary text-white">
            <h5 className="moreTitle">Other Topics</h5>
            <ul>
                <p className="Topics">More Topics</p>
                <li><a href="#" className="link-light">Topic1</a></li>
                <li><a href="#" className="link-light">Topic2</a></li>
                <li><a href="#" className="link-light">Topic3</a></li>
                <li><a href="#" className="link-light">Topic4</a></li>
                <br />
                <p className="Topics">Trending</p>
                <li><a href="#" className="link-light">Topic5</a></li>
                <li><a href="#" className="link-light">Topic6</a></li>
                <li><a href="#" className="link-light">Topic7</a></li>
                <li><a href="#" className="link-light">Topic8</a></li>
                <br />
                <p className="Topics">Hot Topics</p>
                <li><a href="#" className="link-light">Topic9</a></li>
                <li><a href="#" className="link-light">Topic10</a></li>
                <li><a href="#" className="link-light">Topic11</a></li>
                <li><a href="#" className="link-light">Topic12</a></li>
            </ul>
        </div>
    );
}

export default More;