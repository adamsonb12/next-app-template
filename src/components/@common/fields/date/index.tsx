"use client";

import { fontSize16 } from "@common/font-size";
import { spacing12, spacing16 } from "@common/spacing";
import ReactDatePicker from "react-date-picker";
import styled from "styled-components";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export const DatePicker = ({
  date,
  onChange,
  minDate,
  maxDate,
  disabled,
  ...props
}: {
  date: Date | null;
  disabled?: boolean;
  onChange: (d: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
}) => {
  return (
    <StyledInput
      value={date}
      disabled={disabled}
      // @ts-ignore
      onChange={(date) => onChange(date)}
      minDate={minDate}
      maxDate={maxDate}
      {...props}
    />
  );
};

export const StyledInput = styled(ReactDatePicker)<{
  hasError?: boolean;
}>`
  width: 100%;

  .react-date-picker__wrapper {
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid
      ${(props) =>
        props.hasError
          ? props.theme.colors.danger
          : props.theme.colors.neutral};
    border-radius: 4px;
    caret-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.text};
    font-size: ${fontSize16};
    padding: ${spacing12} ${spacing16};
    box-sizing: border-box;
    letter-spacing: 0.05em;

    :disabled {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.colors.disabled};
    }

    ::placeholder {
      color: ${(props) => props.theme.colors.placeholder};
    }
  }
`;
