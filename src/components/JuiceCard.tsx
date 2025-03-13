import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface JuiceCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}

const JuiceCard: React.FC<JuiceCardProps> = ({
  name,
  description,
  price,
  image,
  isSelected,
  onSelect,
}) => {
  return (
    <Card
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      isSelected={isSelected}
      onClick={onSelect}
    >
      <ImageContainer>
        <JuiceImage src={image} alt={name} />
      </ImageContainer>
      <Content>
        <JuiceName>{name}</JuiceName>
        <Description>{description}</Description>
        <Price>₹{price}</Price>
      </Content>
      <SelectButton isSelected={isSelected}>
        {isSelected ? 'Selected' : 'Select'}
      </SelectButton>
    </Card>
  );
};

const Card = styled(motion.div)<{ isSelected: boolean }>`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  width: 280px;
  border: ${props => props.isSelected ? '2px solid #ff6b6b' : 'none'};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const JuiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const JuiceName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff6b6b;
`;

const SelectButton = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 1rem;
  border: none;
  background: ${props => props.isSelected ? '#ff6b6b' : '#f0f0f0'};
  color: ${props => props.isSelected ? 'white' : '#333'};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isSelected ? '#ff5252' : '#e0e0e0'};
  }
`;

export default JuiceCard;