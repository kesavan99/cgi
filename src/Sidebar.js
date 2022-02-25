import React from 'react'
import { CSidebarToggler,CSidebarNav,CSidebarHeader, CSidebarFooter,CSidebarBrand,CSidebar,CNavGroup,CNavTitle,CBadge } from '@coreui/react'
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


export default function Sidebar() {
  return (
    <div>

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
  )
}
