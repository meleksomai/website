import { mauve, mauveA } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
    styled,
    css,
    theme,
    createTheme,
    getCssText,
    globalCss,
    keyframes,
    config,
    reset,
} = createStitches({
    theme: {
        colors: {
            ...mauve,
            ...mauveA,

            // Semantic colors
            hiContrast: "$mauve12",
            loContrast: "$mauve1",
        },
        // fonts: {
        //     untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
        //     mono: 'Söhne Mono, menlo, monospace',
        // },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
            4: '17px',
            5: '19px',
            6: '21px',
            7: '27px',
            8: '35px',
            9: '59px',
        },
        radii: {
            1: '4px',
            2: '6px',
            3: '8px',
            4: '12px',
            round: '50%',
            pill: '9999px',
        },
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '999',
        },
        media: {
            bp1: '(min-width: 520px)',
            bp2: '(min-width: 900px)',
            bp3: '(min-width: 1200px)',
            bp4: '(min-width: 1800px)',
            motion: '(prefers-reduced-motion)',
            hover: '(any-hover: hover)',
            dark: '(prefers-color-scheme: dark)',
            light: '(prefers-color-scheme: light)',
        },
        utils: {
            // us: (value: Stitches.PropertyValue<'userSelect'>) => ({
            //     WebkitUserSelect: value,
            //     userSelect: value,
            // }),

            // userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            //     WebkitUserSelect: value,
            //     userSelect: value,
            // }),

            // size: (value: Stitches.PropertyValue<'width'>) => ({
            //     width: value,
            //     height: value,
            // }),

            // appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
            //     WebkitAppearance: value,
            //     appearance: value,
            // }),
            // backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
            //     WebkitBackgroundClip: value,
            //     backgroundClip: value,
            // }),
        },
    },
});