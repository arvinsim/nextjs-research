import React, {useEffect} from 'react';
import styled from "styled-components";

function ResponsiveDesign() {
    const items: Array<{ name: string, age: number, gender: string, car: string, money: number}> = [
        {
            name: 'John',
            age: 27,
            gender: 'male',
            car: 'BMW',
            money: 1000
        },
        {
            name: 'Jane',
            age: 24,
            gender: 'female',
            car: 'Ferrari',
            money: 2000
        },
    ]

    return (
        <div>
            <Header>
                <div>Name</div>
                <div>Age</div>
                <div>Gender</div>
                <div>Car</div>
                <div>Money</div>
            </Header>
            <div>
            {items.map(item => {
                return (
                    <>
                    <ListItem key={item.name}>
                    <ListItemCell className={"name"}>
                        <ListItemTitle>Name</ListItemTitle>
                        <ListItemValue>{item.name}</ListItemValue>
                    </ListItemCell>
                    <ListItemCell className={"age"}>
                        <ListItemTitle>Age</ListItemTitle>
                        <ListItemValue>{item.age}</ListItemValue>
                    </ListItemCell>
                    <ListItemCell className={"gender"}>
                        <ListItemTitle>Gender</ListItemTitle>
                        <ListItemValue>{item.gender}</ListItemValue>
                    </ListItemCell>
                    <ListItemCell className={"car"}>
                        <ListItemTitle>Car</ListItemTitle>
                        <ListItemValue>{item.car}</ListItemValue>
                    </ListItemCell>
                    <ListItemCell className={"money"}>
                        <ListItemTitle>Money</ListItemTitle>
                        <ListItemValue>{item.money}</ListItemValue>
                    </ListItemCell>
                </ListItem>
                    <hr />
                        </>
                )
            })}
            </div>
        </div>
    );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media only screen and (max-width: 600px) {
    display: none;
  }

  > div {
    font-weight: bold;
  }
`

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-areas:
    "money car"
    "name age"
    "gender .";
    
    .name {
      grid-area: name
    }
    
    .age {
      grid-area: age;
    }
    
    .money {
      grid-area: money;
    }

    .car {
      grid-area: car;
    }

    .gender {
      grid-area: gender;
    }
  }
`

const ListItemCell = styled.div` `
const ListItemTitle = styled.div`
  font-weight: bold;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const ListItemValue = styled.div``


export default ResponsiveDesign;