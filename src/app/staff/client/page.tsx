import { requireRole } from "@/lib/auth-guards";
import { PortalDashboard } from "@/components/auth/PortalDashboard";

export default async function ClientDashboardPage() {
  const user = await requireRole([
    "CLIENT_ADMIN",
    "CLIENT_USER",
    "ADMIN",
  ]);

  const isClientAdmin =
    user.role === "CLIENT_ADMIN";

  return (
    <PortalDashboard
      title={
        isClientAdmin
          ? "Client Administrator Dashboard"
          : "Client Dashboard"
      }
      description="This area will become the client-facing reliability workspace for agents, test runs, confirmed failures, reliability scores and reports."
      items={[
        {
          title: "AI Agents",
          description:
            "Register and manage the customer-facing AI agents that Genesis Digital will test.",
        },
        {
          title: "Reliability Results",
          description:
            "View scores, failures, regression performance and release trends.",
        },
        {
          title: "Reports",
          description:
            "Access audit reports, weekly reliability summaries and executive reporting.",
        },
      ]}
    />
  );
}
