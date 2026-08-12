import {
  Activity,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export function PortalDashboard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <>
      {/* =====================================================
          DASHBOARD HEADER
      ====================================================== */}

      <div className="card p-7 md:p-9">

        <div className="eyebrow">

          <Activity size={14} />

          AI Reliability Operations

        </div>


        <h1 className="mt-6 text-3xl font-black md:text-4xl">

          {title}

        </h1>


        <p
          className="
            mt-4
            max-w-3xl
            leading-7
            text-[var(--muted)]
          "
        >

          {description}

        </p>

      </div>


      {/* =====================================================
          DASHBOARD CARDS
      ====================================================== */}

      <div
        className="
          mt-6
          grid
          gap-5
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {items.map(
          (
            item,
            index
          ) => (

            <div
              key={item.title}
              className="
                card
                p-6
                transition
                duration-300
                hover:-translate-y-1
              "
            >

              {/* =================================================
                  CARD TOP
              ================================================= */}

              <div className="flex items-center justify-between">

                <div
                  className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-xl
                    bg-[var(--soft)]
                    text-[var(--brand)]
                  "
                >

                  {index % 3 === 0 ? (

                    <ShieldCheck
                      size={21}
                    />

                  ) : index % 3 === 1 ? (

                    <Clock3
                      size={21}
                    />

                  ) : (

                    <CheckCircle2
                      size={21}
                    />

                  )}

                </div>


                <span
                  className="
                    rounded-full
                    bg-[var(--soft)]
                    px-3
                    py-1.5
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[.12em]
                    text-[var(--muted)]
                  "
                >

                  Coming Next

                </span>

              </div>


              {/* =================================================
                  CARD TITLE
              ================================================= */}

              <h2
                className="
                  mt-6
                  text-xl
                  font-black
                "
              >

                {item.title}

              </h2>


              {/* =================================================
                  CARD DESCRIPTION
              ================================================= */}

              <p
                className="
                  mt-3
                  leading-7
                  text-[var(--muted)]
                "
              >

                {item.description}

              </p>

            </div>

          )
        )}

      </div>
    </>
  );
}