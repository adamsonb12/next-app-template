"use client";

import { IconButton } from "@common/buttons/icon";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { InputHTMLAttributes, useState } from "react";
import styled, { useTheme } from "styled-components";
import { TextInput } from "../text-input";
import { spacing64 } from "@common/spacing";

const InputWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const ToggleMaskButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  height: 100%;
  width: ${spacing64};
`;

const StyledInput = styled(TextInput)<{ showPassword?: boolean }>`
  -webkit-text-security: ${(props) => (props.showPassword ? "none" : "disc")};
  text-security: ${(props) => (props.showPassword ? "none" : "disc")};
`;

export const PasswordInput = ({
  value,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "max" | "type"> & {
  hasError?: boolean;
}) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        maxLength={100}
        name="password"
        autoComplete="password"
        showPassword={showPassword}
        {...props}
      />
      <ToggleMaskButton onClick={() => setShowPassword(!showPassword)}>
        <Icon
          path={showPassword ? mdiEye : mdiEyeOff}
          color={colors.text}
          size="100%"
        />
      </ToggleMaskButton>
    </InputWrapper>
  );
};
