"use client";

import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styled, { useTheme } from "styled-components";

// @ts-ignore
const StyledTextEditor = styled(ReactQuill)`
  /* Something with Quill is preventing us from using our styled components theme */
  background-color: var(--theme-colors-code-block-background);

  .ql-editor {
    font-family: var(--theme-input-font-family);

    ::before {
      color: var(--theme-colors-text-secondary);
    }
  }
`;

export const TextEditor = ({
  value,
  onChange,
  ...props
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => {
  const { colors, misc } = useTheme();
  const [quillValue, setQuillValue] = useState(value);

  useEffect(() => {
    onChange(quillValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quillValue]);

  return (
    <StyledTextEditor
      placeholder="Let's build..."
      // @ts-ignore
      theme="bubble"
      value={quillValue}
      onChange={setQuillValue}
      {...props}
    />
  );
};
