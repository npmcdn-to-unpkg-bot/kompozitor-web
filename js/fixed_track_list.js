import {render} from 'react-dom';
import React, {Component} from 'react';

var tracks = [
	{ id: "A", name: "Song A", time: "0:00"},
	{ id: "B", name: "Song B", time: "1:00"},
	{ id: "C", name: "Song C", time: "2:00"},
	{ id: "D", name: "Song D", time: "3:00"},
	{ id: "E", name: "Song E", time: "4:00"},
	{ id: "F", name: "Song F", time: "5:00"},
	{ id: "G", name: "Song G", time: "6:00"},
	{ id: "G", name: "Song H", time: "7:00"},
	{ id: "G", name: "Song I", time: "8:00"},
	{ id: "G", name: "Song J", time: "9:00"},
]

class TrackListHeader extends Component {
	constructor(props) {
		super(props);
		this.track_count = props.count;
		this.time_total = "9:00";
	}
	render() {
		return (
			<div className="joining_node">
				<div className="tracks_header">
					<h4>All tracks ({this.track_count})</h4>
				</div>
				<div className="tracks_totals">{this.time_total}</div>
			</div>
		);
	}
}

class Track extends Component {
	constructor(props) {
		super(props);
		this.name = props.name;
		this.time = props.time;
	}
	render() {
		return (
			<li className="track_list_track container">
				<i className="track_list_track_order fak fa-reorder" aria-hidden="true"></i>
				<div className="track_list_track_name">{this.name}</div>
				<div className="track_list_track_time">{this.time}</div>
			</li>
		);
	}
}

class TrackList extends Component {
	constructor(props) {
		super(props);
		this.tracks = this.props.data.map(function(track) {
	      return (
			<Track key={track.name} name={track.name} time={track.time} />
	      );
	    });
	    this.track_count = this.tracks.length;
	}
	render() {
		return (	
			<section className="tracks container">
				<TrackListHeader count={this.track_count}/>
				<ul className="track_list">
					{this.tracks}
				</ul>
			</section>
		);
	}
}

render(
	<TrackList data={tracks} />,
	document.getElementById('track_list')
);		

console.log("Loaded: Track List Component");