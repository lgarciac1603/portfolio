import type { ReactNode } from "react";
import type { Language } from "../hooks/useLanguage";

export interface ProjectProps {
  id: string;
  titleKey: string;
  descriptionKey: string;
  overviewKey?: string;
  architectureKey?: string;
  challengeKey?: string;
  learningsKey?: string;
  image?: string;
  featured?: boolean;
  tech: string[];
  linkPage?: string;
  linkCode: string;
  showCaseStudy: boolean;
  visible?: boolean;
}

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export interface HackerBackgroundProps {
  color?: string;
  fontSize?: number;
  className?: string;
  speed?: number;
}

export interface ChildrenNodeProp {
  children: ReactNode;
}
