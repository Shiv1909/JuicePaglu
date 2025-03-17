import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import juiceData from './data/juices';
import JuiceCard from './components/JuiceCard';
import { db, collection, addDoc } from "./firebase/firebaseConfig.js";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('protein');
  const [selectedJuices, setSelectedJuices] = useState<number[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectJuice = (id: number) => {
    setSelectedJuices((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((juiceId) => juiceId !== id); 
      } else {
        if (prevSelected.length >= 2) {
          return [prevSelected[1], id];
        }
        return [...prevSelected, id];
      }
    });
  };

  const handleSubmit = async () => {
    if (userName.trim() === '' || phoneNumber.trim() === '') {
      alert('Please enter your name and phone number.');
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    if (selectedJuices.length !== 2) {
      alert('Please select exactly two juices.');
      return;
    }

    const juiceNames = selectedJuices.map((id) => {
      const juice = Object.values(juiceData).flat().find((j) => j.id === id);
      return juice ? juice.name : '';
    });

    const formData = {
      name: userName,
      phone: phoneNumber,
      juice1: juiceNames[0] || '',
      juice2: juiceNames[1] || '',
      timestamp: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "juiceOrders"), formData);
      setSubmitted(true);
      alert("Order submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data. Please try again.");
    }
  };

  return (
    <Container>
      <LandingSection>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Title>Juice Paglu</Title>
          <Subtitle>Refreshing & Nutritious Juices, Just for You!</Subtitle>
        </motion.div>
      </LandingSection>

      <MenuSection>
        <CategoryContainer>
          {Object.keys(juiceData).map((category) => (
            <CategoryButton key={category} active={activeCategory === category} onClick={() => setActiveCategory(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)} Juice
            </CategoryButton>
          ))}
        </CategoryContainer>

        <JuiceGrid>
          {juiceData[activeCategory].map((juice) => (
            <JuiceCard 
              key={juice.id} 
              {...juice} 
              isSelected={selectedJuices.includes(juice.id)} 
              onSelect={() => handleSelectJuice(juice.id)} 
            />
          ))}
        </JuiceGrid>
      </MenuSection>

      <FormSection>
        <FormCard>
          <h3>Enter Your Details</h3>
          <InputField 
            type="text" 
            placeholder="Your Name" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
          />
          <InputField 
            type="tel" 
            placeholder="Phone Number" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            maxLength={10}
          />
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>

          {submitted && <SuccessMessage>✅ Order Submitted Successfully!</SuccessMessage>}
        </FormCard>
      </FormSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const LandingSection = styled.section`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ff6b6b, #ff8787);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: white;
  text-align: center;
  margin-top: 0.5rem;
`;

const MenuSection = styled.section`
  padding: 2rem;
  background: #f5f5f5;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const JuiceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const FormSection = styled.div`
  text-align: center;
  padding: 3rem 0;
  background: #ffffff;
`;

const FormCard = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  width: 50%;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, #ff6b6b, #ff8787);
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(45deg, #ff8787, #ff6b6b);
  }
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: green;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  background: ${(props) => (props.active ? '#ff6b6b' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #ff6b6b;
    color: white;
  }
`;

export default App;
