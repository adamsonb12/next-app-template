"use client";

import styled from "styled-components";

import { A11y } from "@common/buttons/a11y";
import { spacing12, spacing64 } from "@common/spacing";
import { TextInput } from "../text-input";
import { useEffect, useRef } from "react";

const Container = styled(A11y)<{ numberOfCodeCharacters: number }>`
  cursor: text;
  background-color: transparent;
  border: none;
  display: grid;
  gap: ${spacing12};
  grid-template-columns: repeat(
    ${(props) => props.numberOfCodeCharacters},
    calc(
      (100% - (${(props) => props.numberOfCodeCharacters} - 1) * ${spacing12}) /
        ${(props) => props.numberOfCodeCharacters}
    )
  );
  align-items: center;
`;

const HiddenInput = styled(TextInput)`
  height: 0;
  width: 0;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
`;

const CharacterCellText = styled.div<{ showCursor?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: ${spacing64};
  font-size: 36px;
  text-align: center;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text};

  /* border: thin solid black; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);

  @keyframes cursor-blink {
    0% {
      opacity: 0;
    }
  }

  ::after {
    content: "";
    width: ${(props) => (props.showCursor ? "1px" : 0)};
    height: 60%;
    background-color: ${(props) => props.theme.colors.text};
    animation: cursor-blink 1.2s steps(2) infinite;
  }
`;

export const ValidationCodeInput = ({
  code,
  onChange,
  numberOfCodeCharacters,
}: {
  code: string;
  onChange: (code: string) => void;
  numberOfCodeCharacters: number;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const codeBoxes = Array.from({ length: numberOfCodeCharacters }, (v, i) => i);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref.current]);

  return (
    <>
      <HiddenInput
        id="verification-code"
        value={code}
        onChange={(e) => {
          onChange(e.target.value ?? "");
        }}
        autoFocus
        ref={ref}
      />
      <Container
        numberOfCodeCharacters={numberOfCodeCharacters}
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
      >
        {codeBoxes.map((index) => {
          const character = String(code).charAt(index);
          return (
            <CharacterCellText showCursor={index === code.length} key={index}>
              {character ?? ""}
            </CharacterCellText>
          );
        })}
      </Container>
    </>
  );
};
