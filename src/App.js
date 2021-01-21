import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import FirstBox from "./index_components/FirstBox";
import BlogTopics from "./index_components/BlogTopics";
//
import DevBlogsSum from "./dev_components/DevBlogsSum.js";
import EssayBlogsSum from "./essay_components/EssayBlogsSum";
import CpBlogsSum from "./cp_components/CpBlogsSum";
//
import DeployHtmlSiteGit from "./dev_components/DeployHtmlSiteGit";
import DeployReactSiteGit from "./dev_components/DeployReactSiteGit";
import MarginBlog from "./dev_components/MarginBlog";
import DoubleClassing from "./dev_components/DoubleClassing";
//
import ProblemSolving from "./cp_components/ProblemSolving";
import FrequencyCounterPart1 from "./cp_components/FrequencyCounterPart1";
import FrequencyCounterPart2 from "./cp_components/FrequencyCounterPart2";
import MultiplePointersPart1 from "./cp_components/MultiplePointersPart1";
import Footer from "./index_components/Footer";
//
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{/* below are the third level pages */}
					<Route path="/htmlgit">
						<FirstBox />
						<DeployHtmlSiteGit />
						<Footer />
					</Route>
					<Route path="/reactgit">
						<FirstBox />
						<DeployReactSiteGit />
						<Footer />
					</Route>
					<Route path="/margin">
						<FirstBox />
						<MarginBlog />
						<Footer />
					</Route>
					<Route path="/doubleclass">
						<FirstBox />
						<DoubleClassing />
						<Footer />
					</Route>

					{/* New Layer above */}

					{/* below paths for the cp summaries */}
					<Route path="/problemsolving">
						<FirstBox />
						<ProblemSolving />
						<Footer />
					</Route>
					<Route path="/frequencycounter1">
						<FirstBox />
						<FrequencyCounterPart1 />
						<Footer />
					</Route>
					<Route path="/frequencycounter2">
						<FirstBox />
						<FrequencyCounterPart2 />
						<Footer />
					</Route>
					<Route path="/multiplepointers1">
						<FirstBox />
						<MultiplePointersPart1 />
						<Footer />
					</Route>

					{/* below paths for dev summaries  */}
					<Route path="/essaysummaries">
						{/* this is the essay index page, contains the header and essay blogs */}
						<FirstBox />
						<EssayBlogsSum />
						<Footer />
					</Route>
					<Route path="/devsummaries">
						{/* this is the devtips index page, contains the header and dev blogs */}
						<FirstBox />
						<DevBlogsSum />
						<Footer />
					</Route>
					<Route path="/cpsummaries">
						{/* this is the cp index page, contains the header and cp blogs */}
						<FirstBox />
						<CpBlogsSum />
						<Footer />
					</Route>
					<Route path="/">
						{/* this is the home page, contains the header and the blog topics */}
						<FirstBox />
						<BlogTopics />
						<Footer />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
