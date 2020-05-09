import React from 'react'

import { Layout, Input, Button, Switch } from 'antd'
import { FaUserAlt } from 'react-icons/fa'
import { MdNotifications, MdSettings } from "react-icons/md"
import { GiSplitCross } from "react-icons/gi";

import './dashboard.css'

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
    render() {
        return (
            <Layout>
                <Sider style={{background: "white"}}>
                    <div className="logo">
                        <img src="./vyorius.png" alt="logo" height="30px" width="30px"/> VYORIUS
                    </div>
                    <div className="avatar">
                        <img src="https://image.flaticon.com/icons/svg/1999/1999625.svg" alt="avatar" height="80px" width="80px"/><br/>
                        MICHEL
                    </div>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <div className="header">
                            <div style={{fontWeight: "bold"}}>
                                MAINTANCE SUMMARY
                            </div>
                            <div className="options">
                                <Input placeholder="Search..." className="search-input"/> <Button type="link" style={{color: "#8c8c8c"}} icon={<FaUserAlt size={20}/>} shape="circle"/> <Button type="link" style={{color: "#8c8c8c"}} icon={<MdNotifications size={20}/>} shape="circle"/> <Button type="link" style={{color: "#8c8c8c"}} icon={<MdSettings size={20}/>} shape="circle"/>
                            </div>
                        </div>
                    </Header>
                    <Content className="site-layout-background" >
                        <div className="content-header">
                            <div className="switches">
                                <GiSplitCross size={25} color="#cf1322"/> Aircraft Down &nbsp; <Switch/>
                            </div>
                            <div className="switches">
                                <GiSplitCross size={25} color="#fadb14"/> Inseption Due &nbsp; <Switch/>
                            </div>
                            <div className="switches">
                                <GiSplitCross size={25} color="green"/> Aircraft Up &nbsp; <Switch/>
                            </div>
                        </div>
                        <div className="content-body">
                            <span style={{fontSize: "20px"}}>Ecosystem</span>
                            <span><Button style={{backgroundColor: "#8c8c8c", color: "white", borderColor: "#8c8c8c"}}>Find-Ecosystem</Button></span>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;