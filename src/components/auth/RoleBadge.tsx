import type {
  Role,
} from "@/generated/prisma/client";


const ROLE_LABELS:
  Record<
    Role,
    string
  > =
{

  ADMIN:
    "Administrator",

  QA_LEAD:
    "QA Lead",

  EVALUATOR:
    "Evaluator",

  CLIENT_ADMIN:
    "Client Admin",

  CLIENT_USER:
    "Client User",

};


export function RoleBadge({
  role,
}: {
  role:
    Role;
}) {

  return (

    <span
      className="
        rounded-full
        bg-[var(--soft)]
        px-3
        py-1.5
        text-xs
        font-black
        text-[var(--brand)]
      "
    >

      {
        ROLE_LABELS[
          role
        ]
      }

    </span>

  );

}