"use client";

import { Select } from "@common/fields/select";
import { usePathname, useRouter } from "next/navigation";

export const SelectNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      value={pathname}
      onChange={(e) => {
        router.push(e.currentTarget.value);
      }}
    >
      <optgroup label="Category 1">
        <option value={"/"}>Home</option>
        <option value={"/cool-route"}>Cool Route</option>
      </optgroup>
    </Select>
  );
};
