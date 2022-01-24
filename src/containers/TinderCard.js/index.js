import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TinderCardSwipe from "react-tinder-card";
import styled from "styled-components";

const TCard = styled.div`
  position: relative;
  background-color: #fff;
  width: 360px;
  padding: 20px;
  max-width: 85vw;
  height: 400px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;
const TinderCardsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
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

export default function TinderCard() {
  const [people, setPeople] = useState([
    {
      name: "Juliany Milles",
      url: "https://i.pravatar.cc/300?img=22",
    },
    {
      name: "John Doe",
      url: "https://i.pravatar.cc/300?img=52",
    },
    {
      name: "Gabrielle Sellesdion",
      url: "https://i.pravatar.cc/300?img=45",
    },
    {
      name: "Leandry Schutz Lima",
      url: "https://i.pravatar.cc/300?img=3",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log("out of frame: " + name);
  };

  return (
    <CardContent>
      <TinderCardsCardContainer>
        {people.map((person) => (
          <Swipe key={person.name}>
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
        ))}
      </TinderCardsCardContainer>
    </CardContent>
  );
}
