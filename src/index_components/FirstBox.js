import React from "react";
import "./FirstBox.css";
import writing from "../assets/writing.png";

function FirstBox() {
	return (
		<div>
			<section className="firstbox">
				{/* This is the first box which contains the header and the top menu */}
				<div className="topnavcontainer">
					<div className="wrapper">
						<nav className="topnav">
							<a href="https://elir-mahad.github.io/scribe/">
								<img
									className=""
									src={writing}
									alt=""
									//
								/>
							</a>

							<ul className="main-menu desk">
								<li>
									<a href="https://mahad.netlify.app/code.html">Code</a>
								</li>
								<li>
									<a href="https://mahad.netlify.app/art.html">Art</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<header className="head">
					<div className="wrapper">
						<div className="headertext">
							<h1>E'lir Mahad</h1>
							<h2>A-posteriori theorizations on tech</h2>
						</div>
					</div>
				</header>
			</section>
		</div>
	);
}

export default FirstBox;
