import { requireRole } from "@/lib/auth-guards";
import { PortalDashboard } from "@/components/auth/PortalDashboard";

export default async function EvaluatorDashboardPage() {
  await requireRole(["EVALUATOR", "QA_LEAD", "ADMIN"]);

  return (
    <PortalDashboard
      title="Evaluator Dashboard"
      description="Human reviewers will use this workspace to verify AI responses, classify failures and submit evidence-based evaluations."
      items={[
        {
          title: "My Assignments",
          description:
            "Cases assigned to you for human verification.",
        },
        {
          title: "Pending Reviews",
          description:
            "AI evaluations awaiting your Pass, Fail or escalation decision.",
        },
        {
          title: "Completed Reviews",
          description:
            "Your previously submitted evaluation decisions and QA feedback.",
        },
      ]}
    />
  );
}
