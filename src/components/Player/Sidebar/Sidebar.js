import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useDataLayerValue } from '../../DataLayer/DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()

    console.log('playlists', playlists)

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
                alt="sidebar logo"
            />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}


        </div>
    )
}

export default Sidebar
