import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';


function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        //Run this code ONCE when the sidebar component load
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ));
       
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Gopeshwar Kumawat</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
                </div> 
                <CreateOutlinedIcon />
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOptions Icon={DraftsIcon} title="Saved items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps" />
            <SidebarOptions Icon={FileCopyIcon} title="File browser" />
            <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
            <hr />            
            <SidebarOptions Icon={AddIcon} addChannelOption title="Add channels" />
            {/* connect to db and list all the channels */}
            {channels.map(channel => (
                <SidebarOptions id={channel.id} title={channel.name} />
            ))}
        </div>
    )
}

export default Sidebar;
