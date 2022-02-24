import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscHeart } from "react-icons/vsc";
import { BiMessageRounded } from "react-icons/bi";
import {
  CardImg,
  Card,
  Row,
  Col,
  CardBody,
  CardText,
  CardSubtitle,
  Label
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Post.css"

const Post = ({ id }) => {
  return (
    <div>
      {id.map((datail) => (
        <Card className="mx-auto" style={{ margin: '50px 0px 50px 0px' }}>
          <CardBody>
            <Row>
              <Col xs="1" className="col" key={datail.user.id}>
                <CardImg
                  alt="Card image cap"
                  src={datail.user.profile_image.small}
                  top
                  width="100%"
                  className="imgpeople"
                />
              </Col>
              <Col>
                <Label 
                  className="mt-1 text-muted"
                  tag="h6"
                >
                  <a href={"/profile/" + datail.user.username} className="text-center text-black text-decoration-none ">{datail.user.first_name}</a>
                </Label>
              </Col>
            </Row>
          </CardBody>
          <img
            alt="Card image cap"
            src={datail.urls.full}
            width="100%"
            className="img"
          />
          <CardBody>
            <VscHeart size="25px" />
            <BiMessageRounded size="25px" style={{ margin: '0px 0px 0px 10px' }} />
            <CardSubtitle
              className="mb-2"
              tag="h6"
              style={{ margin: '4px 0px 0px 0px' }}
            >
              {datail.user.total_likes} likes
            </CardSubtitle>
            <CardText>
              <span><a href={"/profile/" + datail.user.username} class="important">{datail.user.first_name}</a>
               {datail.user.bio}</span>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default Post;
