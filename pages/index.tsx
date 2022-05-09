import { LandingHero } from "src/containers/LandingHero";
import { MainLayout } from "src/layouts/main";
import { Page } from "src/components/Page";

export default function LandingPage() {
  return (
    <MainLayout>
      <Page title="React Ts Boilerplate" id="move_top">
        <LandingHero />
      </Page>
    </MainLayout>
  );
}
