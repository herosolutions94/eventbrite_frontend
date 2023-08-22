import { SingleEliminationBracket, Match, SVGViewer, createTheme } from "@g-loot/react-tournament-brackets"
// import "./styles.css"

export default function App() {
	return <SingleElimination />
}
const finalWidth = Math.max(1010, 500)
export const SingleElimination = () => (
	<SingleEliminationBracket
		theme={GlootTheme}
		matches={simpleSmallBracket}
		matchComponent={Match}
		svgWrapper={({ children, ...props }) => (
			<SVGViewer width={finalWidth} height={1000} background="#1b191d" SVGBackground="#1b191d" {...props}>
				{children}
			</SVGViewer>
		)}
		onMatchClick={(match) => console.log(match)}
		onPartyClick={(match) => console.log(match)}
	/>
)

const GlootTheme = createTheme({
	textColor: { main: "#000", highlighted: "#fff", dark: "#a4a4aa" },
	matchBackground: { wonColor: "#1b191d", lostColor: "#1b191d" },
	score: {
		background: {
			wonColor: "#f05537",
			lostColor: "#1b191d",
		},
		text: { highlightedWonColor: "#fff", highlightedLostColor: "#fff" },
	},
	border: {
		color: "#424242",
		highlightedColor: "#f05537",
	},
	roundHeader: { backgroundColor: "#424242", fontColor: "#fff" },
	connectorColor: "#424242",
	connectorColorHighlight: "#f05537",
	svgBackground: "#0F121C",
})

export const simpleSmallBracket = [
	{
		id: 19753,
		nextMatchId: null,
		tournamentRoundText: "3",
		startTime: "2021-05-30",
		state: "SCHEDULED",
		participants: [],
	},
	{
		id: 19754,
		nextMatchId: 19753,
		tournamentRoundText: "2",
		startTime: "2021-05-30",
		state: "SCHEDULED",
		participants: [
			{
				id: "14754a1a-932c-4992-8dec-f7f94a339960",
				resultText: null,
				isWinner: false,
				status: null,
				name: "CoKe BoYz",
				picture: "teamlogos/client_team_default_logo",
			},
		],
	},
	{
		id: 19755,
		nextMatchId: 19754,
		tournamentRoundText: "1",
		startTime: "2021-05-30",
		state: "SCORE_DONE",
		participants: [
			{
				id: "14754a1a-932c-4992-8dec-f7f94a339960",
				resultText: "Won",
				isWinner: true,
				status: "PLAYED",
				name: "CoKe BoYz",
				picture: "teamlogos/client_team_default_logo",
			},
			{
				id: "d16315d4-7f2d-427b-ae75-63a1ae82c0a8",
				resultText: "Lost",
				isWinner: false,
				status: "PLAYED",
				name: "Aids Team",
				picture: "teamlogos/client_team_default_logo",
			},
		],
	},
	{
		id: 19756,
		nextMatchId: 19754,
		tournamentRoundText: "1",
		startTime: "2021-05-30",
		state: "RUNNING",
		participants: [
			{
				id: "d8b9f00a-0ffa-4527-8316-da701894768e",
				resultText: null,
				isWinner: false,
				status: null,
				name: "Art of kill",
				picture: "teamlogos/client_team_default_logo",
			},
		],
	},
	{
		id: 19757,
		nextMatchId: 19753,
		tournamentRoundText: "2",
		startTime: "2021-05-30",
		state: "SCHEDULED",
		participants: [],
	},
	{
		id: 19758,
		nextMatchId: 19757,
		tournamentRoundText: "1",
		startTime: "2021-05-30",
		state: "SCHEDULED",
		participants: [
			{
				id: "9397971f-4b2f-44eb-a094-722eb286c59b",
				resultText: null,
				isWinner: false,
				status: null,
				name: "Crazy Pepes",
				picture: "teamlogos/client_team_default_logo",
			},
		],
	},
	{
		id: 19759,
		nextMatchId: 19757,
		tournamentRoundText: "1",
		startTime: "2021-05-30",
		state: "SCHEDULED",
		participants: [
			{
				id: "42fecd89-dc83-4821-80d3-718acb50a30c",
				resultText: null,
				isWinner: false,
				status: null,
				name: "BLUEJAYS",
				picture: "teamlogos/client_team_default_logo",
			},
			{
				id: "df01fe2c-18db-4190-9f9e-aa63364128fe",
				resultText: null,
				isWinner: false,
				status: null,
				name: "Bosphorus",
				picture: "teamlogos/r7zn4gr8eajivapvjyzd",
			},
		],
	},
]
