import './App.css';
import {useState} from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input } from '@mantine/core';
import Card from "./components/Card.js";
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';

const storeItems = [
  {
  name: "Çikolata",
  price: 20
  },
  {
  name: "Çikolata Kabı",
  price: 40
  },
  {
  name: "Çikolata Sosu",
  price: 30
  }
]

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchText, setSearchText] = useState("");
  let filteredItems = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
  return (
    <Container>
      <SimpleGrid cols={3} className="SG" >
        {storeItems.map(({name}) => {
          return (<Card 
          key={name} 
          name={name}
          onAdd={() => setBasketItems([...basketItems, {name}])} />
          );
        })}
      </SimpleGrid>
      <Input.Wrapper label="Search...">
        <Input onChange={(e) => setSearchText(e.target.value)}/>
      </Input.Wrapper>
      <List
      className='List'
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
      >
      {filteredItems.map(({name}, index) => <List.Item key={index}>{name}</List.Item>
      )}
      </List>
    </Container>
  );
}

export default App;
