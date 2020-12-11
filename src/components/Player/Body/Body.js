import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../../DataLayer/DataLayer'
import './Body.css'
import Header from './Header/Header'
import SongRow from './SongRow/SongRow'

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()
    console.log('discover_weekly', discover_weekly)
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__textInfo">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" />
                    <Favorite fontSize="large" className="" />
                    <MoreHoriz />
                </div>
            </div>

            {discover_weekly?.tracks.items.map(item => <SongRow track={item.track} />)

            }
        </div>
    )
}

export default Body
