import React from "react";
// import{details} from './Data'
import "../scheme/list.css";

export default function List(props) {
  //   const style = {
  //     width: "18rem",
  //   };

  return (
    
      <div class="grid-container">
        <div class="item1">AYUSH SCHEME</div>
        <div class="item3">
          <div className="card">
            <div className="content">{props.item[0].title}</div>
            <h3>{props.item[0].description}</h3>
          </div>

          <div className="card">
            <div className="content">{props.item[1].title}</div>
            <h3>{props.item[1].description}</h3>
          </div>

          <div className="card">
            <div className="content">{props.item[2].title}</div>
            <h3>{props.item[2].description}</h3>
          </div>

          <div className="card">
            <div className="content">{props.item[3].title}</div>
            <h3>{props.item[3].description}</h3>
          </div>
        </div>
        <div class="item2">
          <div id="notification">Notifications</div>
        </div>

        <div class="item4">
          <div class="side">
            <div class="card-body">
              <h5 class="card-title">Related Links</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="/" class="card-link">
                  Card link
                </a>
              </li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    
  );
}
