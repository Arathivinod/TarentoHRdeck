import { Container } from "react-bootstrap";
import ListNewJoinee from "../Components/ListNewJoinee";
import "../App.css"
const ViewDeck = () => {
  return (
    <Container fluid className=" h-100">
      {/* <h1>New Joinee </h1> */}
      <ListNewJoinee />
    </Container>
  );
};

export default ViewDeck;