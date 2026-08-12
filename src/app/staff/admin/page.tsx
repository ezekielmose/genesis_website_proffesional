import {
  requireRole,
} from "@/lib/auth-guards";

import {
  PortalDashboard,
} from "@/components/auth/PortalDashboard";


export default async function AdminDashboardPage() {

  await requireRole([
    "ADMIN",
  ]);


  return (

    <PortalDashboard

      title=
        "Administrator Dashboard"

      description=
        "Full platform administration. This account can eventually manage users, clients, projects, evaluators, test runs, reports and system settings."

      items={[
        {

          title:
            "User Management",

          description:
            "Create staff and client users, assign roles, activate or deactivate accounts.",

        },

        {

          title:
            "Client Management",

          description:
            "Manage hospitality and travel organizations using the AI Reliability platform.",

        },

        {

          title:
            "System Oversight",

          description:
            "Monitor projects, evaluations, failures, QA operations and platform health.",

        },
      ]}

    />

  );

}