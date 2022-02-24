import React, {useState,createRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useScreenshot, createFileName } from "use-react-screenshot";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Alert } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom"
import SpeedDial from '@mui/material/SpeedDial';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CImage } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Dropdown } from 'react-bootstrap';
import Picker from 'emoji-picker-react';
import InputEmoji from 'react-input-emoji'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CSidebarToggler,CSidebarNav,CSidebarHeader, CSidebarFooter,CSidebarBrand,CSidebar,CNavGroup,CNavTitle,CBadge } from '@coreui/react'
import { cilSpeedometer,cilUser,cilBell,cilGroup,cilLibrary,cilTask,cilRss,cilPaperPlane,cilLineWeight, cilBadge,cilPuzzle,cilBirthdayCake, cilMenu } from '@coreui/icons'
import {
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
    CRow,
    CCol
} from '@coreui/react'
import data from "./Data.json";
import { makeStyles } from '@mui/styles';
import { color } from "@mui/system";
import Buttons from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Paper from '@mui/material/Paper';
import { EditorState } from 'draft-js';
import { Form } from "react-bootstrap";
import  { useRef } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Editor } from 'react-draft-wysiwyg';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from 'reactjs-popup';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InfiniteScroll from 'react-infinite-scroll-component';
import SendIcon from '@mui/icons-material/Send';
import Grid from "@mui/material/Grid";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import 'reactjs-popup/dist/index.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
import ScreenshotIcon from '@mui/icons-material/Screenshot';
import { FacebookShareButton ,EmailShareButton,LinkedinShareButton,TelegramShareButton, TwitterShareButton,WhatsappShareButton} from "react-share"
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const MD = data.Media;


const useStyles = makeStyles({

    tx:{
        paddingbottom: '505px'
    }
});

const Input = styled('input')({
    display: 'none',
});

const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });

const Itm = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const colours = ['grey','red'];

const counts=[0,1]

const share=["",[<FacebookShareButton
url="someurl"
quote={"hi"}
hashtag="#programing joke">
<FacebookIcon logoFillColor="white" style={{color:'blue'}}/>
</FacebookShareButton>

,
<WhatsappShareButton
url="someurl"
quote={"hi"}
hashtag="#programing joke">
<WhatsAppIcon logoFillColor="white" style={{color:'green'}}/>
</WhatsappShareButton>
,
<EmailShareButton
url="someurl"
quote={"hi"}
hashtag="#programing joke">
<MailIcon logoFillColor="white" style={{color:'red'}} />
</EmailShareButton>
,
<LinkedinShareButton
url="someurl"
quote={"hi"}
hashtag="#programing joke">
<LinkedInIcon logoFillColor="white" style={{color:'blue'}}/>
</LinkedinShareButton>
,
<TelegramShareButton
url="someurl"
quote={"hi"}
hashtag="#programing joke">
<TelegramIcon style={{color:'blue'}} logoFillColor="white" />
</TelegramShareButton>
,
<TwitterShareButton
url="someurl"
quote={"hi"}
hashtag="#programing joke">
<TwitterIcon style={{color:'blue'}} logoFillColor="white" />
</TwitterShareButton>
]
]
 

export default function Dashboard() {

    const ref = createRef(null);

    const [image, takeScreenShot] = useScreenshot({
      type: "image/jpeg",
      quality: 1.0
    });
  
    const download = (image, { name = "img", extension = "jpg" } = {}) => {
      const a = document.createElement("a");
      a.href = image;
      a.download = createFileName(extension, name);
      a.click();
    };
  
    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  
    
    const [loading, setLoading] = useState(false)

    const [ text, setText ] = useState('')

    const [style, setStyle] = useState({display: 'none'});
    const [editorState, seteditorState] = useState([]);

    const postRef = useRef()


    const classes = useStyles();


    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };




    





    const [selectedColourIndex, setColourIndex] = useState(0);
    const [selectedCountIndex, setCountIndex] = useState(0);
    const [selectedshareIndex, setshareIndex] = useState(0);

    const nextColour = () => {
        const newCountIndex = selectedCountIndex + 1;
        const newColourIndex = selectedColourIndex + 1;
        if (colours[newColourIndex]) 
     {        setColourIndex(newColourIndex);
            setCountIndex(newCountIndex);
    }
        else
       {       setColourIndex(0);
        setCountIndex(0);
    }
}

const nextshare = () => {
    const newshareIndex = selectedshareIndex + 1;
    if (share[newshareIndex]) 
 {        setshareIndex(newshareIndex);
        }
    else
   {   
    setshareIndex(0);
}
}




 const handleClick=event=> {

    event.preventDefault();

console.log(postRef.current.value)

}    











    return (

        <div >

            <nav className=" navbar fixed-top navbar-expand-md navbar-dark bg-dark " style={{background:'linear-gradient(to right,rgb(0, 0, 0), #200F21)'}}>
                <div className="flex-row d-flex">
                    <img style={{height: '40px'}} className="navbar-brand"
                         src={'https://raw.githubusercontent.com/jagjotsingh09/Website-Dashboard/main/src/img/CGI-logo.jpg'}
                         alt=""/>
                    <a className="navbar-brand" href="#">Confederation of Global Innovators</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a style={{color: 'white'}} className="nav-link" href="#myAlert"
                               data-toggle="collapse">Services</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color: 'white'}} className="nav-link" href="" data-target="#myModal"
                               data-toggle="modal">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light text-white">
                                <i className="fas fa-envelope-open-text"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light text-white">
                                <i className="fas fa-align-justify"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>


            <div style={{paddingTop:'10opx'}}>

                <CSidebar position="fixed show" style={{height:'100%'}} className=" mt-5 bg-info " style={{height:'flex'}} >

                    <CSidebarNav  style={{background:'linear-gradient(to right,rgb(0, 0, 0), #200F21)'}}>
                        <CNavItem >
                            <h5 style={{color:'white'}}>Confederation of Global Innovators</h5>
                        </CNavItem>

                        <CNavItem style={{color:'white'}} href="/Overview">
                            Overview
                        </CNavItem>
                        <CNavItem style={{color:'white'}} href="/Export">
                            Export
                            <CBadge color="primary ms-auto"></CBadge>
                        </CNavItem>
                        <CNavItem style={{color:'white'}} href="/Snippets"  >
                            Snippets
                            <CBadge color="primary ms-auto"></CBadge>
                        </CNavItem>
                        <CNavItem style={{color:'white'}} href="/Gallery">
Gallery
                            <CBadge color="white ms-auto"></CBadge>
                        </CNavItem>

                        <CNavItem style={{color:'white'}} href="/Certificates">
                            Certificates
                            <CBadge color="primary ms-auto"></CBadge>
                        </CNavItem>
                        <CNavItem style={{color:'white'}}href="/Company">
                            Company
                            <CBadge color="primary ms-auto"></CBadge>
                        </CNavItem>
                        <CNavItem style={{color:'white'}} href="/Management">
                            Management
                            <CBadge color="primary ms-auto"></CBadge>
                        </CNavItem>
                    </CSidebarNav>

                </CSidebar>

            </div>
            <div style={{paddingTop:'50px',paddingLeft:'255px'}}>


                <Box
                    style={{width:'100%'}}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1,width:'120ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >



                    <Grid container spacing={2}>
                    
                        <Grid itm xs={8}>
                        <form >
                            <input placeholder="Post something here..." ref={postRef} style={{width:'550px',height:"55px"}} />
                            <p></p>
                            <Buttons variant="contained" onClick={handleClick}  startIcon={<SendIcon/>}> Post</Buttons>

    </form>
                            
                        </Grid>
                        <Grid itm xs={1}>
                            

                        </Grid>
                        
                        <Grid itm xs={8}>
<br></br>
                            <Divider />
                        </Grid>
                        <Grid itm xs={8}>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file" />

                                <ImageSearchIcon style={{color:"#2196f3",size:'large'}} />
                                <span>Photos..</span>
                                <Input accept="video/*"  id="icon-button-file" type="file" />

                                <VideoLibraryIcon style={{color:'red'}} />
                                Videos..

                            </label>
                            <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
                        </Grid>

                    </Grid>
                   <div style={{width:'800px',paddingLeft:'10px'}}>
                    <Divider />
                   </div>

                </Box>
                <div style={{paddingLeft:'50px'}}>
                    {MD.map(s => (

                    <Paper

                        sx={{
                            maxWidth: 680,
                            flexGrow: 1,
                           backgroundColor:  '#1A2027',
                            color:'#1A2027'
                        }}
                    >
                    <Paper
style={{paddingTop:'10px'}}
                    sx={{

                        maxWidth: 650,
                         backgroundColor: '#1A2027',
                          }}
                >

                        <CContainer style={{color: 'white'}}>
                            <CRow>
                                <CCol> <span><Avatar
                                    src="data:image/jpeg;base64,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"/>Name</span></CCol>


                                <CCol style={{paddingLeft: '480px'}}>

                            
<Dropdown
          >
      <Dropdown.Toggle
        className="main-style"
        id="dropdown-basic"
        style={{background:'#1A2027'}}
      >
      <MoreHorizIcon/>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{background:'#1A2027'}} >
         
         
        <Dropdown.Item  style={{color:'white'}} href="#/action-1">
        <ShareIcon style={{color:'white'}}/>Share
        </Dropdown.Item>
        <Dropdown.Item style={{color:'white'}} href="#/action-2">
        <PrintIcon style={{color:'white'}}/>Print
        </Dropdown.Item>
        <Dropdown.Item style={{color:'white'}} href="#/action-3">
         <ScreenshotIcon style={{color:'white'}}/> screenshot
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                            
                                  </CCol>
                            </CRow>
                            <CRow>
                                <CCol>About.|Date|<LanguageIcon/></CCol>
                            </CRow>
                             <CRow>
                            
                                <p></p>
                                <p>{s.para}</p>


                                <CImage fluid
                                        src={s.photo}/>

                            </CRow>
                            <CRow>

                            </CRow>

                        </CContainer>
                        <div ref={ref}>  
                           
                           
                                                      
                        <div style={{color:'white'}}></div>
                        {chosenEmoji ? (
                            <span style={{color:'white'}}>{chosenEmoji.emoji}</span>
                        ) : (
                            <span style={{color:'white'}}></span>
                        )}
                        
                        <div style={{paddingTop:'8px', paddingLeft:'12px'}}>
                       

                            <div style={{background:'white'}}>
                            <ScreenshotIcon onClick={downloadScreenshot}></ScreenshotIcon>
                            
                            <i style={{color:'black',paddingLeft:'20px'}}>   <FavoriteIcon style={{color: colours[selectedColourIndex]}} type="button" onClick={nextColour}></FavoriteIcon>
                                          {counts[selectedCountIndex]}
                                          </i>            
                                        <i style={{color:'black',paddingLeft:'20px'}}> <ShareIcon style={{color:'black',paddingLeft:'0px'}} type="button" onClick={nextshare}  /></i>
                                         {share[selectedshareIndex]}

                                     
                                                               </div>
                                                              

                        
                        </div>
                        
<div style={{paddingTop:'8px'}} >
 
<TextareaAutosize
aria-label="empty textarea"
placeholder="Comments"
style={{ width: 200 }}
/>


                        
                                <Buttons   style={{color:"#2196f3"}} size="large" startIcon={<SendIcon/>} /> 
                                </div>
</div>
                    </Paper>
                    <div style={{backgroundColor:'white'}}>
    <Divider  sx={{ borderBottomWidth: 25 }} />
</div>


                    </Paper>
                            ))}

                </div>








            </div>
        </div>

    )
}








