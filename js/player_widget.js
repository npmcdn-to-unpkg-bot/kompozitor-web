var project = "Record Name";
var track = "Song A";
var time_played = "1:05";
var time_left = "2:10";

ReactDOM.render(
	<section className="player">
		<h2 className="player_project_name">{project}</h2>
		<h3 className="player_song_name">{track}</h3>
		<div className="player_widget">
			<i className="fak fa-play" aria-hidden="true"></i>
			<img className="player_widget_progress_bar" src="img/main_progress_bar.png" alt="Progress" />
			<span className="player_widget_time">{time_played} / {time_left}</span>
		</div>
	</section>,
	document.getElementById('player_widget')	
);

console.log("Loaded: Player Widget");