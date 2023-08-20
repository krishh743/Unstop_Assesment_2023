'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HamburgerIcon from "../../../app/assets/hamburger.png";
import Image from 'next/image';
import DashboardIcon from "../../../app/assets/dashboard.png";
import NoteIcon from "../../../app/assets/note_alt.png";
import QuizIcon from "../../../app/assets/quiz.png";
import AdminIcon from "../../../app/assets/admin_meds.png";


const  SidemenuForMobile = () => {

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const handleTouch = () => {
        console.log('clicked')
    }

    const list = (anchor) => (
        <Box
            sx={{width: 250}}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Dashboard', 'Assessment', 'My Library'].map((text, index) => (
                    <ListItem key={text} onClick={handleTouch} disablePadding sx={{border: text === 'Assessment' ? '1px solid #0073E6' : 'none', backgroundColor: text === 'Assessment' ? '#E5F1FC' : 'white', color: text === 'Assessment' ? '#0073E6' : 'black', borderRadius: '8px'}}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <Image src={DashboardIcon} alt="Dashboard" width={20} height={20} /> :
                                    index === 1 ? <Image src={NoteIcon} alt="Assessment" width={20} height={20} /> :
                                        <Image src={QuizIcon} alt="My Library" width={20} height={20} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Round Status'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Image src={AdminIcon} alt="Round" width={20} height={20} />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {['left'].map((anchor) => (
                <React.Fragment key='left'>
                    <Button onClick={toggleDrawer('left', true)} endIcon={<Image src={HamburgerIcon} alt="menu" />} ></Button>
                    <Drawer
                        anchor='left'
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </React.Fragment>

            ))}
        </>
    );
}
export default  SidemenuForMobile;
