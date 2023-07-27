import styles from "./styles.module.css";
import { SelectNavigation } from "./select-navigation";
import { AsideNavigationLinks } from "./aside-navigation-links";

const MobileNavigation = () => {
  return (
    <div className={styles.mobileNavigation}>
      <SelectNavigation />
    </div>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className={styles.desktopNavigation}>
      <AsideNavigationLinks />
    </nav>
  );
};

export const AsideNavigation = () => {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
};
