import { capitalizeFirstLetter } from "../text";

export const formatName = ({
  firstName,
  lastName,
  middleName,
}: {
  firstName: string;
  lastName: string;
  middleName?: string;
}) => {
  if (middleName) {
    return `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(
      middleName
    )} ${capitalizeFirstLetter(lastName)}`;
  }

  return `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(
    lastName
  )}`;
};
