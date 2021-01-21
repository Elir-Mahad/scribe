import React from "react";
import "./BlogTopics.css";
import competitiveprogramming from "../assets/competitiveprogramming.jpg";
import codingtips from "../assets/codingtips.jpeg";
import codingtheory from "../assets/codingtheory.png";
import { Link } from "react-router-dom";
//

function BlogTopics() {
	return (
		<section className="blog_topics">
			<section className="flex-container">
				<div className="container algo">
					<Link
						style={{ textDecoration: "none" }}
						//
						to="/cpsummaries"
					>
						<img
							className="image"
							src={competitiveprogramming}
							alt=""
							//
						/>
						<div className="words">
							<h2>
								Algo world <span className="postnumbers"> 1 post </span>
							</h2>

							<p>Reflections on competitive programming.</p>
						</div>
					</Link>
				</div>
				<div className="container tips">
					<Link
						style={{ textDecoration: "none" }}
						//
						to="/devsummaries"
					>
						<img
							className="image"
							src={codingtips}
							alt=""
							//
						/>
						<div className="words">
							<h2>
								Coding tips <span className="postnumbers"> 0 </span>
							</h2>

							<p>Tutorials, and reflections on front end web development.</p>
						</div>
					</Link>
				</div>
				<div className="container essay">
					<Link
						//
						style={{ textDecoration: "none" }}
						to="/essaysummaries"
					>
						<img
							className="image"
							src={codingtheory}
							alt=""
							//
						/>
						<div className="words">
							<h2>
								Essays <span className="postnumbers"> 0 </span>
							</h2>

							<p>Analysis on books that focus on a variety of tech topics.</p>
						</div>
					</Link>
				</div>
			</section>
		</section>
	);
}

export default BlogTopics;
