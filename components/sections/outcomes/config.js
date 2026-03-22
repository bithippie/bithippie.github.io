import DiscoveryVelocity from "./scenes/DiscoveryVelocity";
import LatencyOfLearning from "./scenes/LatencyOfLearning";
import ResearchFreedom from "./scenes/ResearchFreedom";
import WorkflowsByScience from "./scenes/WorkflowsByScience";

const outcomes = [
  {
    id: "discovery-velocity",
    heading: "Turn Data Into Discovery Velocity",
    body: [
      {
        text: "The most valuable insights emerge when computational predictions connect to experimental results and downstream outcomes. Patterns between early-stage models and assay performance. Correlations linking screening data to toxicology results. Intelligence that only becomes visible when data flows across your research pipeline.",
        visibleAt: 0.05,
      },
      {
        text: "We build infrastructure and warehousing strategies that enable cross-functional analysis across computational and wet lab teams. Your scientists discover correlations earlier, refine predictions with real-world results, and make faster decisions\u2014while maintaining appropriate access controls.",
        visibleAt: 0.45,
      },
    ],
    Scene: DiscoveryVelocity,
  },
  {
    id: "latency-of-learning",
    heading: "Eliminate the Latency of Learning",
    body: [
      {
        text: "We\u2019ve seen brilliant computational scientists sidelined for days by computational bottlenecks. Sequential processing delays discovery. Researchers wait for results instead of learning and iterating. Multi-day computational failures waste time and resources.",
        visibleAt: 0.03,
      },
      {
        text: "We build cloud infrastructure that enables parallel processing at scale. Your team gets answers fast\u2014intelligently leveraging CPUs or GPUs to run workloads efficiently and cost-effectively.",
        visibleAt: 0.48,
      },
    ],
    Scene: LatencyOfLearning,
  },
  {
    id: "workflows-by-science",
    heading: "Workflows Defined by Science, Not Software",
    body: [
      {
        text: "Off-the-shelf bioinformatics platforms fit nobody perfectly. You pay for unused features, navigate workflows that don\u2019t match your science, and lock into expensive licensing.",
        visibleAt: 0.05,
      },
      {
        text: "We build custom tools designed alongside your team\u2014internal applications and interactive dashboards that replace bloated SaaS products. You own the code, control the features, and set the direction.",
        visibleAt: 0.55,
      },
    ],
    Scene: WorkflowsByScience,
  },
  {
    id: "research-freedom",
    heading: "Research Freedom, Production Discipline",
    body: [
      {
        text: "Biotech research demands both speed and rigor. Data scientists need freedom to explore, but ad-hoc VM setups create black boxes: results can\u2019t be reproduced, audit trails don\u2019t exist, and workflows remain undocumented.",
        visibleAt: 0.03,
      },
      {
        text: "We build infrastructure that bridges exploration and production. Infrastructure-as-code gives your team self-service environments that are documented, version-controlled, and auditable. Scientists iterate in sandbox environments, then transition proven workflows to production with full traceability.",
        visibleAt: 0.28,
      },
    ],
    Scene: ResearchFreedom,
  },
];

export default outcomes;
