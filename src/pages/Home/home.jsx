/* eslint-disable no-unused-vars */
// Global styles
import { Container } from "../../styles/globalStyles";

// Styles
import { HomeContain, MainHero } from "./homeStyles";

// Site header
import { SiteHeader } from "../../components/header/siteHeader";

// Components
import { YourNextPill } from "../../components/yourNextPill/yourNextPill";
import { YourNextAppoint } from "../../components/yourNextAppointmet/yourNextAppnmt";
import { YourCabinet } from "../../components/yourCabinet/yourCabinet";
import { CabinetModal } from "../../components/cabinetModal/cabinetModal";
import { WeaklyDate } from "../../components/weaklyDate/weaklyDate";

// Hooks
import { useContext } from "react";

// Context
import { GlobalContext } from "../../context/globalContext";

export const Home = () => {
  // Context
  const { isModalActive } = useContext(GlobalContext);

  return (
    <div>
      <SiteHeader></SiteHeader>
      <HomeContain>
        <Container $flexDirection="column">
          <MainHero>
            {/* Weakly Date */}
            <WeaklyDate/>
            {/* Your next pill Section */}
            <YourNextPill />
            {/* Your next appointment */}
            <YourNextAppoint />
            {/* Your cabinet */}
            <YourCabinet />
            {/* Cabinet Modal */}
            {isModalActive && <CabinetModal />}
          </MainHero>
        </Container>
      </HomeContain>
    </div>
  );
};
