import { IconButton } from "@common/buttons/icon";
import { spacing32, spacing8 } from "@common/spacing";
import { Label } from "@common/typography/label";
import { mdiCheckboxBlankOutline, mdiCheckboxMarked } from "@mdi/js";
import Icon from "@mdi/react";
import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";

export const Checkbox = ({
  checked,
  color,
  onClick,
}: {
  checked?: boolean;
  color?: string;
  onClick: () => void;
}) => {
  const { colors } = useTheme();
  return (
    <IconButton onClick={onClick}>
      {checked && (
        <Icon
          path={mdiCheckboxMarked}
          size={spacing32}
          color={color ? color : colors.primary}
        />
      )}
      {!checked && (
        <Icon
          path={mdiCheckboxBlankOutline}
          size={spacing32}
          color={color ? color : colors.primary}
        />
      )}
    </IconButton>
  );
};

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckboxLabel = styled(Label)`
  margin-left: ${spacing8};
  line-height: 1.33;
`;

export const CheckboxField = ({
  checked,
  color,
  children,
  onClick,
  ...props
}: {
  checked?: boolean;
  color?: string;
  children?: string | ReactNode;
  onClick: () => void;
}) => {
  return (
    <CheckboxContainer {...props}>
      <Checkbox checked={checked} color={color} onClick={onClick} />
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxContainer>
  );
};
