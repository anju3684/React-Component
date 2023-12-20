import React from 'react'
import { Button, Layout } from 'antd'
import "./ProjectMgmt.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SideNavBar from '../SideNavBar/SideNavBar';
import MainContent from '../MainContent/MainContent';
const { Header, Sider, Content } = Layout;

function ProjectMgmt() {
    return (
        <div className='main'>
            <Layout>
                <Sider width={240}><SideNavBar /></Sider>
                <Layout>
                    <div className='container'>
                    <div className='header'>
                        <div className='left-header'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                            <input className='searchbar' type="text" placeholder='search for...' />
                        </div>
                        <div className='right-header'>
                            <Button className='groupBtn'></Button>
                            <Button className='groupBtn'></Button>
                            <Button type='primary' style={{ width: 162, height: 50 }}><span>&#x002B;</span>Start project</Button>
                        </div>
                    </div>

                    <Content>
                        <MainContent />
                    </Content>
                    </div>
                </Layout>
            </Layout>
        </div>
    )
}

export default ProjectMgmt