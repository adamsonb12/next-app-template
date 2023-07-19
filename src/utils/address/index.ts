import { RegionCode } from "./region-code";

export const getAddressLineOneComponents = ({
  streetAddress,
  streetTwo,
}: {
  streetAddress: string;
  streetTwo?: string;
}) => {
  return `${streetAddress} ${streetTwo}`;
};

export const getAddressLineTwoFromComponents = ({
  city,
  state,
  postalCode,
}: {
  city: string;
  state: string;
  postalCode: string;
}) => {
  return `${city}, ${state} ${postalCode}`;
};

export interface Address {
  streetOne: string;
  streetTwo: string;
  city: string;
  state: string;
  postalCode: string;
  regionCode: RegionCode; // country code
}

export interface FormattedAddress extends Omit<Address, "regionCode"> {
  country: string;
}

interface GooglePlacesAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

// Parse google api details address components to our Address Object
// Places address components have a different shape
export const getGooglePlacesApiAddressObject = (
  addressComponents: GooglePlacesAddressComponent[]
): FormattedAddress => {
  const addressComponentCategories = {
    home: ["street_number"],
    street: ["street_address", "route"],
    streetLineTwo: ["subpremise"],
    postal_code: ["postal_code"],
    region: [
      "administrative_area_level_1",
      "administrative_area_level_2",
      "administrative_area_level_3",
      "administrative_area_level_4",
      "administrative_area_level_5",
    ],
    city: [
      "locality",
      "sublocality",
      "sublocality_level_1",
      "sublocality_level_2",
      "sublocality_level_3",
      "sublocality_level_4",
    ],
    country: ["country"],
  };

  const address = {
    home: "",
    postal_code: "",
    street: "",
    streetLineTwo: "",
    region: "",
    city: "",
    country: "",
  };

  addressComponents.forEach((component) => {
    for (const category in addressComponentCategories) {
      if (
        // @ts-ignore
        addressComponentCategories[category].indexOf(component.types[0]) !== -1
      ) {
        if (category === "country") {
          address[category] = component.short_name;
        } else {
          // @ts-ignore
          address[category] = component.long_name;
        }
      }
    }
  });

  return {
    streetOne: `${address.home} ${address.street}`.trim(),
    streetTwo: address.streetLineTwo.trim(),
    city: address.city.trim(),
    state: address.region.trim(),
    postalCode: address.postal_code.trim(),
    country: address.country.trim(),
  };
};
