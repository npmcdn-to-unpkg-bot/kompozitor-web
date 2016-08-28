import {render} from 'react-dom';
import React, {Component} from 'react';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

var tracks = [
	{ id: 1, name: "Song A", time: "0:00"},
	{ id: 2, name: "Song B", time: "1:00"},
	{ id: 3, name: "Song C", time: "2:00"},
	{ id: 4, name: "Song D", time: "3:00"},
	{ id: 5, name: "Song E", time: "4:00"},
	{ id: 6, name: "Song F", time: "5:00"},
	{ id: 7, name: "Song G", time: "6:00"},
	{ id: 8, name: "Song H", time: "7:00"},
	{ id: 9, name: "Song I", time: "8:00"},
	{ id: 10, name: "Song J", time: "9:00"},
]

const DragHandle = SortableHandle(() => <i className="track_list_track_order fak fa-reorder" aria-hidden="true"></i>); // This can be any component you want

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

const Track = SortableElement(({value}) => {
    return (
        <li className="track_list_track container">
            <DragHandle />
            <div className="track_list_track_name">{value.name}</div>
			<div className="track_list_track_time">{value.time}</div>
        </li>
    )
});

const TrackList = SortableContainer(({items}) => {
	console.log("Init track list", items);
	var tracks = items.map(
		(track, index) =>
            <Track key={`item-${index}`} index={index} value={track} />
    );
    var track_count = tracks.length;
	return (
		<section className="tracks container">
			<TrackListHeader count={track_count}/>
			<ul className="track_list">
				{tracks}
			</ul>
		</section>
	);
});

// render(
// 	<TrackList data={tracks} />,
// 	document.getElementById('track_list')
// );		

class SortableComponent extends Component {
	constructor(props){
		super(props);
		this.state = {items: [
	{ id: 0, name: "Song A", time: "0:00"},
	{ id: 1, name: "Song B", time: "1:00"},
	{ id: 2, name: "Song C", time: "2:00"},
	{ id: 3, name: "Song D", time: "3:00"},
	{ id: 4, name: "Song E", time: "4:00"},
	{ id: 5, name: "Song F", time: "5:00"},
	{ id: 6, name: "Song G", time: "6:00"},
	{ id: 7, name: "Song H", time: "7:00"},
	{ id: 8, name: "Song I", time: "8:00"},
	{ id: 9, name: "Song J", time: "9:00"},
]};
	    this.onSortEnd = ({oldIndex, newIndex}) => {
	        console.log(this.state);
	        let {items} = this.state;
	        this.setState({
	            items: arrayMove(items, oldIndex, newIndex)
	        });
	    };
	}
    
    render() {
        let {items} = this.state;
        return (
            <TrackList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />
        )
    }
}

render(<SortableComponent />, document.getElementById('track_list'));

console.log("Loaded: Track List Component");