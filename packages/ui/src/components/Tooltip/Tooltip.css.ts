import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

export const content = style([
  atoms({
    borderRadius: "medium",
    padding: "100",
    color: "slate11",
    backgroundColor: "slate6",
  }),
  style({
    userSelect: "none",
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    selectors: {
      "&[data-state='delayed-open'][data-side='top']": {
        animationName: "slideDownAndFade",
      },
      "&[data-state='delayed-open'][data-side='right']": {
        animationName: "slideLeftAndFade",
      },
      "&[data-state='delayed-open'][data-side='bottom']": {
        animationName: "slideUpAndFade",
      },
      "&[data-state='delayed-open'][data-side='left']": {
        animationName: "slideRightAndFade",
      },
    },
  }),
]);

export const tooltipArrow = style({
  fill: vars.color.slate6,
});

// @keyframes slideUpAndFade {
//   from {
//     opacity: 0;
//     transform: translateY(2px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes slideRightAndFade {
//   from {
//     opacity: 0;
//     transform: translateX(-2px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

// @keyframes slideDownAndFade {
//   from {
//     opacity: 0;
//     transform: translateY(-2px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes slideLeftAndFade {
//   from {
//     opacity: 0;
//     transform: translateX(2px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }
