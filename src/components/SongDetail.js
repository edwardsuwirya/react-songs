import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (song) {
        return (
            <div>
                <h3>Song Detail</h3>
                <div>
                    <div>{song.title}</div>
                    <div>{song.duration}</div>
                </div>
            </div>
        )
    } else {
        return <div>Please Select A Song</div>
    }

}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);