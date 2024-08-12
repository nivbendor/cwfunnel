// src\types\index.ts

import { Config } from '../config/default';

export interface Theme {
  colors: {
    primary: string;
    primaryHover: string;
    background: string;
    card: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
  fontSizes: {
    heading: string;
    subheading: string;
    body: string;
    button: string;
  };
  spacing: {
    containerPadding: string;
    elementSpacing: string;
  };
  borderRadius: string;
}

export interface Assets {
  logo: string;
  illustration: string;
}

export interface StepWithOptions {
  question: string;
  options: ReadonlyArray<string>;
  headline: string;
  subHeadline: string;
  visual: string;
  funFact: string;
}

export interface StepWithInput {
  question: string;
  input: 'zip' | 'age' | 'name';
  headline: string;
  subHeadline: string;
  visual: string;
  funFact: string;
}

export type Step = StepWithOptions | StepWithInput;

export interface Copy {
  logo: string;
  greeting: string;
  steps: ReadonlyArray<Step>;
  buttons: {
    next: string;
  };
}

export interface FormData {
  zipCode: string;
  age: string;
  firstName: string;
  lastName: string;
}