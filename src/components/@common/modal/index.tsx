"use client";

import { breakWidth720 } from "@common/break-points";
import { IconButton } from "@common/buttons/icon";
import useOnclickOutside from "react-cool-onclickoutside";
import {
  spacing16,
  spacing2,
  spacing32,
  spacing448,
  spacing48,
  spacing512,
  spacing768,
  spacing8,
} from "@common/spacing";
import { Heading3 } from "@common/typography/heading";
import { WindowKeyboardInteraction } from "@common/window-interaction-listeners/keyboard";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { HTMLAttributes, ReactNode, useEffect } from "react";
import styled, { useTheme } from "styled-components";

export const Backdrop = styled.div`
  background-color: ${(props) => props.theme.colors.backdrop};
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveModal = styled.dialog`
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: ${spacing2};
  border: none;

  min-width: 0;
  width: 80vw;
  padding: 0;
  max-height: 90vh;
  overflow: auto;
  z-index: 11;

  @media screen and (min-width: ${breakWidth720}) {
    min-width: ${spacing512};
    width: auto;
    max-width: ${spacing768};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing16};
  box-shadow: 0 2px 10px 0 rgba(255, 255, 255, 0.03);
  position: relative;
  min-height: ${spacing32};
`;

export const ModalTitle = styled(Heading3)`
  max-width: calc(100% - ${spacing48});
  text-align: center;
`;

export const ModalBody = styled.div`
  padding: ${spacing32} ${spacing16};
  min-width: 0;
  @media screen and (min-width: ${breakWidth720}) {
    min-width: ${spacing448};
  }
`;

export const CloseModalIconButton = styled(IconButton)`
  position: absolute;
  top: ${spacing8};
  left: ${spacing8};
  padding: ${spacing8};
`;

export const Modal = ({
  onClose,
  children,
  title,
  ...props
}: {
  title?: string;
  onClose?: () => void;
  children: ReactNode;
} & HTMLAttributes<HTMLDialogElement>) => {
  const { colors } = useTheme();
  const ref = useOnclickOutside(() => {
    onClose?.();
  });

  useEffect(() => {
    const originalOverflow = document?.body?.style?.overflow ?? undefined;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <Backdrop>
      <WindowKeyboardInteraction
        onKeyDown={(e) => e.key === "Escape" && onClose?.()}
      />
      <ResponsiveModal open {...props} ref={ref}>
        <ModalHeader>
          <CloseModalIconButton onClick={onClose}>
            <Icon path={mdiClose} color={colors.text} size={spacing16} />
          </CloseModalIconButton>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ResponsiveModal>
    </Backdrop>
  );
};
