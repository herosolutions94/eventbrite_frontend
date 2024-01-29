import React from "react";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from '@g-loot/react-tournament-brackets';
import { useWindowSize } from "@uidotdev/usehooks";

import axios from "axios";
import style from "@/styles/scss/app.module.scss"
type TournamentMatchesProps = {
  matches: [],
}
const TournamentMatches = ({ matches }: TournamentMatchesProps) => {
  return (
    <>
      <section className="affiliate">
        <div className={style.contain}>
          <SingleElimination matches={matches} />
        </div>
      </section>
    </>

  );
}

export default TournamentMatches;

interface Participant {
  id: string;
  resultText: string | null;
  isWinner: boolean;
  status: string | null;
  name: string;
  picture: string;
}

interface BracketMatch {
  id: number;
  nextMatchId: number | null;
  tournamentRoundText: string;
  startTime: string;
  state: string;
  participants: Participant[];
}

const GlootTheme = createTheme({
  textColor: { main: "#000000", highlighted: "#F4F2FE", dark: "#707582" },
  matchBackground: { wonColor: "#2D2D59", lostColor: "#1B1D2D" },
  score: {
    background: {
      wonColor: `#10131C`,
      lostColor: "#10131C",
    },
    text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
  },
  border: {
    color: "#292B43",
    highlightedColor: "RGBA(152,82,242,0.4)",
  },
  roundHeader: { backgroundColor: "#3B3F73", fontColor: "#F4F2FE" },
  connectorColor: "#3B3F73",
  connectorColorHighlight: "RGBA(152,82,242,0.4)",
  svgBackground: "#0F121C",
});
type SingleEliminationProps = {
  matches: [],
}
// ...

export const SingleElimination = ({ matches }: SingleEliminationProps) => {
  const { width, height } = useWindowSize();
  // const [width, height]: [number | null, number |] = useWindowSize();
  const finalWidth: number = width !== null ? Math.max(width - 50, 500) : 500;
  const finalHeight: number = height !== null ? Math.max(height - 100, 500) : 500;
  // Check if width and height are not null before using them in calculations
  // const finalWidth = width !== null ? Math.max(width - 50, 500) : 5000;
  // const finalHeight = height !== null ? Math.max(height + 3000, 5000) : 5000;
  // const finalWidth = width !== null ? Math.max(width - 50, 500) : 500;
  // const finalHeight = height !== null ? Math.max(height - 0, 500) : 500;
  console.log(finalWidth, finalHeight)
  return (
    <SingleEliminationBracket
      theme={GlootTheme}
      matches={matches}
      matchComponent={Match}
      svgWrapper={({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => (
        <SVGViewer
          // Check and adjust the width and height values as needed
          width={1000}  // Adjust this value based on your layout
          height={800}  // Adjust this value based on your layout
          background="rgb(11, 13, 19)"
          SVGBackground="rgb(11, 13, 19)"
          {...props}
        >
          {children}
        </SVGViewer>
      )}
      onMatchClick={(match: any) => console.log(match)}
      onPartyClick={(match: any) => console.log(match)}
    />

  );
};





