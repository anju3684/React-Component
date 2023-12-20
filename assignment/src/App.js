import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import MainContent from "./Components/MainContent/MainContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Button, Layout } from 'antd'
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import "./App.scss"
import { useEffect } from "react";
import $ from "jquery"
import Project from "./Components/project/Project";
import Main from "./Components/Activity/Main";
const { Sider, Content } = Layout;
var scrollTop = $(window).scrollTop();
function App() {
    const isSignIn = localStorage.getItem('signIn')
    console.log(scrollTop)

    useEffect(() => {

        //Enter Your Class or ID
        var $stickyMenu = $('.test');
   
        var stickyNavTop = $($stickyMenu).offset()?.top;
        var stickyNav = function () {
            if (scrollTop > stickyNavTop) {
                $($stickyMenu).addClass('sticky');
            } else {
                $($stickyMenu).removeClass('sticky');
                $('html').css('padding-top', '0')
            }
        };
        stickyNav();
        $(document).scroll(function () {
            stickyNav();
        });



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollTop])
    return (
        <>
            {!isSignIn ? (<Routes><Route path="/" element={<SignIn />}></Route></Routes>) : (
                <div className='main'>
                    <Layout>
                        <Sider>
                            <div id="menuToggle">
                                <input type="checkbox" />
                                <span className="togglespan"></span>
                                <span className="togglespan"></span>
                                <span className="togglespan"></span>
                                <div id="testing">
                                    <SideNavBar />
                                </div>
                            </div>
                            <div className="bigscreen">
                                <SideNavBar />
                            </div>
                        </Sider>
                        <Layout>
                            <div className="test">
                                <div className='header'>
                                    <div className='left-header'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                                        <input className='searchbar' type="text" placeholder='search for...' />
                                    </div>
                                    <div className='right-header'>
                                        <Button className='groupBtn'></Button>
                                        <Button className='groupBtn'></Button>
                                        <Button type='primary' className="buttonStart"><span>&#x002B;</span><span className="spanStart">Start project</span></Button>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>

                                <Content>
                                    <Routes>
                                        <Route path="/" element={<MainContent />}></Route>
                                        <Route path="/Project" element={<Project />}></Route>
                                        <Route path="/Activity" element={<Main/>}></Route>
                                    </Routes>
                                </Content>
                            </div>

                        </Layout>
                    </Layout>
                </div>
            )}
        </>

    )
}

export default App;
