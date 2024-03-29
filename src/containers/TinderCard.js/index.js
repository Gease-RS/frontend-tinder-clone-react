import { useState, useEffect } from "react";
import TinderCardSwipe from "react-tinder-card";

import styled from "styled-components";
import api from "../../api";

const TCard = styled.div`
  background-color: #fff;
  width: 360px;
  padding: 20px;
  max-width: 85vw;
  height: 400px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;

  @media (max-width: 400px) {
    width: 300px;
  }
`;
const TinderCardsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8vh;
`;

const Swipe = styled.div`
  position: absolute;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h3`
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: #fff;
`;

function App() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/peoples`);
      setPeoples(result.data);
    };
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log("out of frame: " + name);
  };

  return (
    <CardContent>
      {peoples.map((person) => (
        <TinderCardsCardContainer>
          <Swipe key={person._id}>
            <TinderCardSwipe
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <TCard style={{ backgroundImage: `url(${person.url})` }}>
                <CardTitle>{person.name}</CardTitle>
              </TCard>
            </TinderCardSwipe>
          </Swipe>
        </TinderCardsCardContainer>
      ))}
    </CardContent>
  );
}

export default App;
