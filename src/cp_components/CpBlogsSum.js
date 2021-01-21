import React from "react";
//
import problemsolvingimage from "../assets/problemsolvingimage.png";
// import frequencycounterimage from "../assets/frequencypatternimage.png";
// import multiplepointersimage from "../assets/multiplepointersimage.png";
//
import { Link } from "react-router-dom";
//
function CpBlogsSum() {
	return (
		<div className="synopsis">
			<div className="synopsisbox">
				<img
					//
					className="blogimage"
					src={problemsolvingimage}
					alt=""
				/>
				<h2> The process for solving coding problems</h2>
				<p>Learn how to systematically deconstruct algorithmic problems.</p>
				<Link
					style={{ textDecoration: "none" }}
					//
					to="problemsolving"
				>
					<button> Read post </button>
				</Link>
			</div>
			{/* <div className="synopsisbox">
				<img
					//
					className="blogimage"
					src={frequencycounterimage}
					alt=""
				/>
				<h2>The Frequency counter pattern - part 1</h2>
				<p>
					{" "}
					The frequency counter pattern is one of the many patterns, that
					competitive progammers use ...
				</p>
				<Link
					style={{ textDecoration: "none" }}
					//
					to="frequencycounter1"
				>
					{" "}
					<button> Read post </button>
				</Link>
			</div>
			<div className="synopsisbox">
				<img
					//
					className="blogimage"
					src={frequencycounterimage}
					alt=""
				/>
				<h2>The Frequency counter pattern - part 2</h2>
				<p>
					{" "}
					In part 2, we will solve the 'anagram problem'. An anagram is a word
					...
				</p>
				<Link
					style={{ textDecoration: "none" }}
					//
					to="frequencycounter2"
				>
					{" "}
					<button> Read post </button>
				</Link>
			</div>

			<div className="synopsisbox">
				<img
					//
					className="blogimage"
					src={multiplepointersimage}
					alt=""
				/>
				<h2>The multiple pointers pattern - part 1</h2>
				<p>
					{" "}
					The multiple pointers is used for creating pointers or values that
					correspond to an index ...
				</p>
				<Link
					style={{ textDecoration: "none" }}
					//
					to="multiplepointers1"
				>
					{" "}
					<button> Read post </button>
				</Link>
			</div> */}
		</div>
	);
}

export default CpBlogsSum;
