import React from "react";
import "../AllBlogs.css";
import borders1 from "../assets/borders1.jpeg";
import borders2 from "../assets/borders2.png";

function MarginBlog() {
	return (
		<section class="blogs">
			<div class="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">Debugging css: margin/padding issues</h1>
						<div className="taganimation">
							<h4 className="hashtag">#html #css</h4>
							<div class="boite">
								<div class="cercle3"></div>
								<div class="cercle3"></div>
								<div class="cercle3"></div>
								<div class="cercle3"></div>
							</div>
						</div>
					</div>
					{/* collapsible starts */}
					<div className="content">
						<div className="blogbody">
							<h2 className="focus focusdifferent">Problem</h2>

							<p>
								When coding, i found myself spending a lot of time trying to
								properly align different sections and divs. I would be right in
								the middle of a task, and suddenly the astounding lack of
								symmetry in a particular div would present itself to me.
							</p>

							<h2 className="focus">Solution</h2>

							<p>
								I gave all my sections and divs different colours; and I gave
								everything a 2px solid black border. With this tactic, I was
								always aware of my margins and paddings, and therefore a margin
								or padding mishap could never creep up on me. This tactic is
								especially useful when using flexbox, because it makes you aware
								of how all the different elements on the page align.
							</p>

							<img
								className="noncodeimg"
								src={borders1}
								alt=""
								//
							/>

							<img
								className="noncodeimg"
								src={borders2}
								alt=""
								//
							/>

							<h2 className="focus">Key idea</h2>

							<p>
								Placing background colours and borders on all divs and sections,
								can guard us against the surprise attacks of margins and
								paddings.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MarginBlog;
