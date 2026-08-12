"use client";

import {
  Activity,
  Building2,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Star,
  Video,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";


// ======================================================
// METRIC CONFIGURATION
// ======================================================

const metrics = [
  {
    target: 29000,
    display: "29K+",
    label: "Hotels Searched",
    icon: Building2,
  },

  {
    target: 46000,
    display: "46K+",
    label: "Videos Generated",
    icon: Video,
  },

  {
    target: 83,
    display: "83+",
    label: "Countries Reached",
    icon: Globe2,
  },

  {
    target: 92,
    display: "92%",
    label: "Client Satisfaction",
    icon: Star,
  },
];


// ======================================================
// LIVE GRAPH
// ======================================================

export function LiveMetrics() {
  return (
    <div className="live-metrics-wrapper">
      <LiveActivityGraph />
    </div>
  );
}


// ======================================================
// MOVING STATISTICS
// ======================================================

export function StatsTicker() {
  const [started, setStarted] =
    useState(false);

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setStarted(true);
      }, 250);

    return () =>
      clearTimeout(timer);
  }, []);


  /*
    Four sets guarantee enough width
    even on large desktop screens.
  */

  const repeatedMetrics = [
    ...metrics,
    ...metrics,
    ...metrics,
    ...metrics,
  ];


  return (
    <div className="stats-marquee">

      <div className="stats-track">

        {repeatedMetrics.map(
          (metric, index) => {

            const Icon =
              metric.icon;

            return (
              <div
                key={`${metric.label}-${index}`}
                className="stats-item"
              >

                <div className="stats-icon">
                  <Icon size={20} />
                </div>


                <div>

                  <AnimatedNumber
                    target={metric.target}
                    finalDisplay={
                      metric.display
                    }
                    started={started}
                  />

                  <div className="stats-label">
                    {metric.label}
                  </div>

                </div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}


// ======================================================
// COUNT-UP NUMBER
// ======================================================

function AnimatedNumber({
  target,
  finalDisplay,
  started,
}: {
  target: number;
  finalDisplay: string;
  started: boolean;
}) {
  const [value, setValue] =
    useState(0);


  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const start =
      performance.now();

    let frame = 0;

    function animate(
      now: number
    ) {
      const progress =
        Math.min(
          (now - start) /
            duration,
          1
        );

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      setValue(
        Math.floor(
          target * eased
        )
      );

      if (
        progress < 1
      ) {
        frame =
          requestAnimationFrame(
            animate
          );
      }
    }

    frame =
      requestAnimationFrame(
        animate
      );

    return () =>
      cancelAnimationFrame(
        frame
      );
  }, [
    started,
    target,
  ]);


  function formatValue() {
    if (
      value >= target
    ) {
      return finalDisplay;
    }

    if (
      target >= 1000
    ) {
      if (
        value < 1000
      ) {
        return value.toString();
      }

      return `${
        (
          value /
          1000
        ).toFixed(1)
      }K`;
    }

    if (
      finalDisplay.includes(
        "%"
      )
    ) {
      return `${value}%`;
    }

    if (
      finalDisplay.includes(
        "+"
      )
    ) {
      return `${value}+`;
    }

    return value.toString();
  }


  return (
    <div className="stats-number">
      {formatValue()}
    </div>
  );
}


// ======================================================
// LIVE ACTIVITY GRAPH
// ======================================================

function LiveActivityGraph() {
  const [
    points,
    setPoints,
  ] =
    useState<number[]>([
      42,
      48,
      45,
      57,
      54,
      66,
      61,
      72,
      69,
      78,
      75,
      84,
    ]);


  const [
    evaluations,
    setEvaluations,
  ] =
    useState(1284);


  const [
    status,
    setStatus,
  ] =
    useState(
      "AI validation active"
    );


  useEffect(() => {
    const timer =
      setInterval(() => {

        setPoints(
          previous => {

            const last =
              previous[
                previous.length -
                  1
              ];

            const movement =
              Math.floor(
                Math.random() *
                  15
              ) - 6;

            const next =
              Math.max(
                32,
                Math.min(
                  92,
                  last +
                    movement
                )
              );

            return [
              ...previous.slice(
                1
              ),
              next,
            ];
          }
        );


        setEvaluations(
          previous =>
            previous +
            Math.floor(
              Math.random() *
                6
            ) +
            1
        );


        const statuses = [
          "AI validation active",
          "Quality checks running",
          "Hospitality data processing",
          "Agent responses evaluating",
          "Reliability checks active",
        ];

        setStatus(
          statuses[
            Math.floor(
              Math.random() *
                statuses.length
            )
          ]
        );

      }, 2400);


    return () =>
      clearInterval(timer);

  }, []);


  const path =
    useMemo(
      () =>
        createPath(
          points
        ),
      [points]
    );


  return (
    <div className="live-dashboard-card">

      {/* HEADER */}
      <div className="live-dashboard-header">

        <div>

          <div className="live-label">

            <span className="live-dot" />

            Live Genesis Activity

          </div>

          <div className="live-dashboard-title">
            Hospitality Intelligence
          </div>

        </div>


        <div className="live-icon-box">
          <Activity size={20} />
        </div>

      </div>


      {/* SCORE */}

      <div className="reliability-score-row">

        <div>
          <div className="metric-small-label">
            Platform Activity
          </div>

          <div className="reliability-score">
            98.7
            <span>%</span>
          </div>
        </div>


        <div className="reliability-status">

          <CheckCircle2
            size={15}
          />

          Healthy

        </div>

      </div>


      <div className="reliability-progress">

        <div
          className="reliability-progress-bar"
          style={{
            width: "98.7%",
          }}
        />

      </div>


      {/* GRAPH */}

      <div className="live-chart">

        <div className="graph-grid" />

        <svg
          viewBox="0 0 600 170"
          preserveAspectRatio="none"
          className="live-chart-svg"
        >

          <defs>

            <linearGradient
              id="genesisLine"
              x1="0"
              x2="1"
            >
              <stop
                offset="0%"
                stopColor="#4b91ff"
              />

              <stop
                offset="100%"
                stopColor="#45e1ad"
              />
            </linearGradient>


            <linearGradient
              id="genesisArea"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#45e1ad"
                stopOpacity=".25"
              />

              <stop
                offset="100%"
                stopColor="#45e1ad"
                stopOpacity="0"
              />
            </linearGradient>

          </defs>


          <path
            d={`${path} L600 170 L0 170 Z`}
            fill="url(#genesisArea)"
          />


          <path
            d={path}
            fill="none"
            stroke="url(#genesisLine)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

        </svg>

      </div>


      {/* BOTTOM */}

      <div className="live-bottom-grid">

        <div className="live-mini-card">

          <div className="metric-small-label">
            Evaluations
          </div>

          <div className="live-value">
            {
              evaluations.toLocaleString()
            }
          </div>

          <div className="live-positive">
            ↑ Live processing
          </div>

        </div>


        <div className="live-mini-card">

          <div className="metric-small-label">
            System
          </div>

          <div className="live-status-text">
            {status}
          </div>

          <div className="live-operational">

            <ShieldCheck
              size={12}
            />

            Operational

          </div>

        </div>

      </div>

    </div>
  );
}


// ======================================================
// SVG PATH
// ======================================================

function createPath(
  points: number[]
) {
  const width = 600;
  const height = 170;

  const spacing =
    width /
    (
      points.length -
      1
    );

  return points
    .map(
      (
        value,
        index
      ) => {

        const x =
          index *
          spacing;

        const y =
          height -
          (
            value /
            100
          ) *
            height;

        return `${
          index === 0
            ? "M"
            : "L"
        } ${x} ${y}`;
      }
    )
    .join(" ");
}