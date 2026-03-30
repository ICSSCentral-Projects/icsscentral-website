import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import BlogsPage from "./pages/BlogsPage";
import FOIPortalPage from "./pages/FOIPortalPage";
import STRAWDeskPage from "./pages/STRAWDeskPage";
import DirectoryPage from "./pages/DirectoryPage";
import CouncilHistoryPage from "./pages/CouncilHistoryPage";
import CouncilMembersPage from "./pages/CouncilMembersPage";
import OrganizationsPage from "./pages/OrganizationsPage";
import ContactPage from "./pages/ContactPage";
import BlogOverviewPage from "./pages/BlogOverviewPage";
import BlogPartnershipPage from "./pages/BlogPartnershipPage";
import BlogLegacyPage from "./pages/BlogLegacyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "events", Component: EventsPage },
      { path: "blogs", Component: BlogsPage },
      { path: "blogs/partnership", Component: BlogPartnershipPage },
      { path: "blogs/legacy", Component: BlogLegacyPage },
      { path: "blogs/:id", Component: BlogOverviewPage },
      { path: "services/foi-portal", Component: FOIPortalPage },
      { path: "services/straw-desk", Component: STRAWDeskPage },
      { path: "services/directory", Component: DirectoryPage },
      { path: "about/council", Component: CouncilHistoryPage },
      { path: "about/members", Component: CouncilMembersPage },
      { path: "about/organizations", Component: OrganizationsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);