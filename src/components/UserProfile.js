import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    CardImg,
    Label
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdLocationPin , MdPhoto } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { BsStack, BsSuitHeartFill } from "react-icons/bs";
import "../css/UserProfile.css"

function UserProfile({ id }) {
    const [result, setResult] = useState([])
    const clientId = "8r88ONMf_N9rYKKN7TgnpFCIccTYziB1XarGZTgviNI"
    
    useEffect(() => {
        axios.get("https://api.unsplash.com/search/users?page=1&query="+id+"&client_id="+clientId).then((response) => {
            setResult(response.data.results);
        });
    }, [id]);
    
    return (
        <Container>
            {result.map((userprofile) => (
                <center>
                    <Card className='carduser'>
                        <CardBody>
                            <Row>
                                <Col xs="4">
                                    <CardImg src={userprofile.profile_image.large} className="imgprofile"/>
                                </Col>
                                <Col xs="8">
                                    <CardSubtitle className='detail'>
                                        <CardTitle className='name'>
                                            <Label>{userprofile.first_name}</Label> {userprofile.last_name}
                                        </CardTitle>
                                        <Label className='bio'>{userprofile.bio}</Label>
                                        
                                        <br/>
                                        <Label className='location'><MdLocationPin size={18}/> {userprofile.location}</Label>
                                        <br/>
                                        <Label>
                                            <a href={userprofile.links.html} className="website"> 
                                                <BiWorld/> {userprofile.username+".com"}
                                            </a>
                                        </Label>

                                        <Row className='roww'>
                                            <Col>
                                                <Label className="text-center"><MdPhoto size={25}/>
                                                    <br/>
                                                    {userprofile.total_photos} Photos
                                                </Label>
                                            </Col>
                                            <Col>
                                                <Label className="text-center"><BsSuitHeartFill size={22}/>
                                                    <br/>
                                                    {userprofile.total_likes} Likes
                                                </Label>
                                            </Col>
                                            <Col>
                                                <Label className="text-center"><BsStack size={22}/>
                                                    <br/>
                                                    {userprofile.total_collections} Collections
                                                </Label>
                                            </Col>
                                        </Row>
                                        
                                          
                                    </CardSubtitle>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </center>
            ))}
        </Container>
    );
};

export default UserProfile;
