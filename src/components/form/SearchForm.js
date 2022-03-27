import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ addToFavList }) => {
  const [name, setName] = useState("");
  const [robot, setRobot] = useState();

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setName(value);
  // };
  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(name);
  // };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setName(value);
    // console.log(value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    setRobot(name);
    setName("");
  };

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search..."
              value={name}
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit" onClick={handleOnSubmit}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="mt-5">
        <Col>
          <CustomCard name={robot} fun={addToFavList} />
        </Col>
      </Row>
    </>
  );
};
