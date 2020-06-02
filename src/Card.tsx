import React from 'react';
import { CardConteiner } from './styles';

interface CardProps {
    text: string
}

export const Card = ({ text }: CardProps) => {
    return <CardConteiner>{text}</CardConteiner>;
};
