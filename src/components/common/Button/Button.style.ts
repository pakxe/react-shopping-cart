import styled from 'styled-components';
import { ButtonProps } from './Button';
import hoverColorGenerator from '../../../utils/hoverColorGenerator';

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ color }) => {
    switch (color) {
      case 'default':
        return `
          background-color: white;
          color: black;
          border: 1px solid lightGray;
        `;
      case 'primary':
        return `
          background-color: black;
          color: white;
        `;
      default:
        return `
          background-color: white;
          color: black;
          border: 1px solid lightGray;
        `;
    }
  }}

  ${({ size, square }) => {
    switch (size) {
      case 's':
        return `
          height: 24px;
          padding: ${square ? '4px 4px' : '4px 8px'};
        `;
      case 'm':
        return `
          height: 36px;
          padding: ${square ? '8px 8px' : '8px 12px'};
        `;
      case 'l':
        return `
          height: 48px;
          padding: ${square ? '12px 12px' : '12px 16px'};
        `;
      case 'fit':
        return `
          height: fit-content;
          padding: 16px 16px;
        `;
      default:
        return `
          height: 36px;
          padding: ${square ? '8px 8px' : '8px 12px'};
        `;
    }
  }}

  ${({ square }) =>
    square &&
    `
    aspect-ratio: 1 / 1;
  `}

  ${({ width }) => {
    switch (width) {
      case 'fit':
        return `width: fit-content;`;
      case 'full':
        return `width: 100%;`;
      default:
        return `width: ${width}px;`;
    }
  }}

  border-radius: ${({ radius }) => {
    switch (radius) {
      case 's':
        return '4px';
      case 'm':
        return '8px';
      case 'l':
        return '16px';
      default:
        return `${radius}px`;
    }
  }};

  &:hover {
    background-color: ${({ color }) => {
      switch (color) {
        case 'default':
          return hoverColorGenerator('#FFFFFF');
        default:
          return hoverColorGenerator('#333333');
      }
    }};
  }

  &:disabled {
    cursor: default;
    background-color: ${({ color }) => {
      switch (color) {
        case 'default':
          return hoverColorGenerator('#FFFFFF');
        default:
          return hoverColorGenerator('#999999');
      }
    }};
  }
`;
