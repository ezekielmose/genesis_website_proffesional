import { requireRole } from "@/lib/auth-guards";
import { PortalDashboard } from "@/components/auth/PortalDashboard";

export default async function QALeadDashboardPage() {
  await requireRole(["QA_LEAD", "ADMIN"]);

  return (
    <PortalDashboard
      title="QA Lead Dashboard"
      description="Manage evaluation quality, reviewer calibration, escalations and high-severity AI failures."
      items={[
        {
          title: "Review Queue",
          description:
            "Review high-risk and disputed AI evaluations.",
        },
        {
          title: "Evaluator Calibration",
          description:
            "Audit evaluator decisions and maintain consistent QA standards.",
        },
        {
          title: "Critical Failures",
          description:
            "Prioritize high-severity hallucinations, policy violations and regressions.",
        },
      ]}
    />
  );
}
