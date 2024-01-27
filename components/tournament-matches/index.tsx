import React from "react";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from '@g-loot/react-tournament-brackets';

import axios from "axios";
import style from "@/styles/scss/app.module.scss"
type TournamentMatchesProps = {
  matches: [],
}
const TournamentMatches = ({ matches }: TournamentMatchesProps) => {
  return (
    <>
      <section id={style.affiliate}>
        <div className={style.contain}>
          <div className={`${style.content} text-center`}>
            <h2>Tournament Brackets</h2>
          </div>
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
export const SingleElimination = ({ matches }: SingleEliminationProps) => (
  <SingleEliminationBracket
    theme={GlootTheme}
    matches={matches}
    matchComponent={Match}
    svgWrapper={({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => (
      <SVGViewer
        className="responsive-bracket"
        width={10000}
        height={5000}
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


const simpleSmallBracket: BracketMatch[] = [
  {
    id: 19753,
    nextMatchId: null,
    tournamentRoundText: "1",
    startTime: "2021-05-30",
    state: "SCHEDULED",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: null,
        name: "Asifoz",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: null,
        name: "defepad",
        picture: "teamlogos/client_team_default_logo"
      },
    ]
  },
  {
    id: 19754,
    nextMatchId: 19753,
    tournamentRoundText: "2",
    startTime: "2021-05-32",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "Asifoz",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1b-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "nafyozerki",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    id: 19755,
    nextMatchId: 19753,
    tournamentRoundText: "2",
    startTime: "2021-05-32",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "defepad",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1b-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "lcmidgk",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    id: 19750,
    nextMatchId: 19755,
    tournamentRoundText: "2",
    startTime: "2021-05-32",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "defepad",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1b-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "wevos",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    id: 19751,
    nextMatchId: 19755,
    tournamentRoundText: "2",
    startTime: "2021-05-32",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "lcmidgk",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1b-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "2381c065a0580",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    id: 19745,
    nextMatchId: 19754,
    tournamentRoundText: "2",
    startTime: "2021-05-32",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "Asifoz",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1b-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "Ali Zia",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },
  {
    id: 19746,
    nextMatchId: 19754,
    tournamentRoundText: "2",
    startTime: "2021-05-32",
    state: "SCORE_DONE",
    participants: [
      {
        id: "14754a1a-932c-4992-8dec-f7f94a339960",
        resultText: "Won",
        isWinner: true,
        status: "PLAYED",
        name: "nafyozerki",
        picture: "teamlogos/client_team_default_logo"
      },
      {
        id: "14754a1b-932c-4992-8dec-f7f94a339960",
        resultText: "Lost",
        isWinner: false,
        status: "PLAYED",
        name: "shauntell",
        picture: "teamlogos/client_team_default_logo"
      }
    ]
  },



];
console.log(simpleSmallBracket)
