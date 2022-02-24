import React, { useState } from "react";
import {
  Container,
  Label,
  Form,
  Row,
  Col,
  Input,
  Button,
  InputGroup
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Post from "./Post";
import "../css/Search.css";
import { FcSearch } from "react-icons/fc";

function Search() {
  const [keyword, setKeyword] = useState([]);
  const [result, setResult] = useState([]);
  const [clientId] = useState("8r88ONMf_N9rYKKN7TgnpFCIccTYziB1XarGZTgviNI");

  const init = (event) => {
    event.preventDefault();
    axios.get("https://api.unsplash.com/search/photos?page=1&query=" + keyword + "&client_id=" + clientId)
      .then((response) => {
        setResult(response.data.results);
    });
  };

  return (
    <Container >
      <Form onSubmit={init}>
        <center>
          <Label className="h1">MY STAGRAM</Label>
        </center>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <center>
              <InputGroup>
                <Input onChange={(event) => setKeyword(event.target.value)} className="search"
                  type="text" placeholder="Find the image you want . ." />
                <Button type="submit" className="btn"> <FcSearch />
                </Button>
              </InputGroup>
            </center>
          </Col>
          <Col xs="3"></Col>
        </Row>
      </Form>
      <Post id={result} />
    </Container>
  );
}

export default Search;
