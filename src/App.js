import './App.css';
import {useState} from "react";
import { Container, SimpleGrid, List, ThemeIcon, Input, Button, Group, Drawer, Indicator } from '@mantine/core';
import Card from "./components/Card.js";
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';

const storeItems = [
  {
  name: "Mclaren Blue",
  src: "car-1",
  price: 20
  },
  {
  name: "Mclaren Purple",
  src: "car-2",
  price: 40
  },
  {
  name: "Mclaren Orange",
  src: "car-3",
  price: 30
  },
  {
  name: "Aston Martin",
  src: "car-4",
  price: 60
  },
  {
  name: "Ford Mustang",
  src: "car-5",
  price: 90
  }
]

function App() {
  let [open, setOpen] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchText, setSearchText] = useState("");
  let filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
  return (
    <Container>
      <Group position='left' align="flex-end" className='input'>
        <Input.Wrapper label="Search...">
          <Input value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        </Input.Wrapper>
        <Button variant="outline" color="red" onClick={() => setSearchText("") }>Temizle</Button>
        <Indicator color="orange" label={basketItems.length}
        inline size={22}>
          <Button variant="light" color="orange" onClick={() => setOpen(true)}>Sepet</Button>
        </Indicator>
        
      </Group>
      <SimpleGrid cols={3} className="SG" >
        {filteredItems.map(({name, src}) => {
          return (<Card 
          key={name} 
          name={name}
          src={src}
          onAdd={() => setBasketItems([...basketItems, {name}])} />
          );
        })}
      </SimpleGrid>
      
      <Drawer
        opened={open}
        className="drawer"
        onClose={() => setOpen(false)}
        title="Basket Items"
        padding="md"
        size="md"
      >
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
        {basketItems.map(({name}, index) => <List.Item key={index}>{name}</List.Item>
        )}
        </List>
      </Drawer>

      
    </Container>
  );
}

export default App;
