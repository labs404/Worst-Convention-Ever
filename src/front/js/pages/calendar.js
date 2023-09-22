import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/schedule.css";
import "../../../../data.json";


export const Calendar = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="container">
            {/* <Navbar /> */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Page</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Table</button>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            {/* Page View */}
            <div class="container">
                <div class="row-odd">
                    <div class="col-2">
                    One of three columns
                    </div>
                    <div class="col-8">
                        <div className="event-panel ep1">
                            {/* <image className="event-banner event-onomatopoeia">POW</image> */}
                            <div className="event-banner">Dummy Title</div>
                            <div className="event event-date">Dummy Date</div> 
                            <div className="event event-start-time">Dummy Start</div>
                            <div className="event event-end-time">Dummy End</div>
                            <div className="event event-location">Dummy Location</div>
                            <div className="event event-description">Dummy Desc</div>
                        </div>
                    </div>
                    <div class="col-2">
                    Three of three columns
                    </div>
                </div>
            </div>
            </div>
            {/* Table View */}
            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                <div class="row row-odd">
                    <div class="col-2">
                        Dummy Date
                    </div>
                    <div class="col-2">
                        Dummy Start
                    </div>
                    <div class="col-2">
                        Dummy End
                    </div>
                    <div class="col-2">
                        Dummy Title
                    </div>
                    <div class="col-2">
                        Dummy Location
                    </div>
                    <div class="col-2">
                        Dummy Description
                    </div>
                </div>
                <div class="row row-even">
                    <div class="col-2">
                        Dummy Date
                    </div>
                    <div class="col-2">
                        Dummy Start
                    </div>
                    <div class="col-2">
                        Dummy End
                    </div>
                    <div class="col-2">
                        Dummy Title
                    </div>
                    <div class="col-2">
                        Dummy Location
                    </div>
                    <div class="col-2">
                        Dummy Description
                    </div>
                </div>
            </div>
            {/* <div>{store.events.map((event_name, index) => <Card key={index} event_name={event_name} index={index}/>)}</div> */}
            </div>
        </div>
    );
};