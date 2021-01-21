import React from "react";
//
import anagramoutput from "../assets/anagramoutput.png";
import anagramsolution1 from "../assets/anagramsolution1.png";
import anagramsolution2 from "../assets/anagramsolution2.png";

function FrequencyCounterPart2() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">The Frequency counter pattern - part 2</h1>
						<div className="taganimation">
							<h4 className="hashtag">#github #sitehosting</h4>
							<div className="boite">
								<div className="cercle3"></div>
								<div className="cercle3"></div>
								<div className="cercle3"></div>
								<div className="cercle3"></div>
							</div>
						</div>
					</div>
					{/* collapsible starts */}
					<div className="content">
						<div className="blogbody">
							<h2 className="focus focusdifferent">Preamble</h2>

							<p>
								In part 1 of this blog post, we learned about the frequency
								counter pattern and we used it in an example.
							</p>

							<p>
								In part 2, we will enhance our understanding of the frequency
								counter pattern by solving the 'anagram problem'.
							</p>

							<p>
								An anagram is a word, phrase, or name formed by rearranging the
								letters of another, such as cinema, formed from iceman.
							</p>

							<h2 className="focus">Problem</h2>

							<p>
								Given two strings, write a function to determine if the second
								string is an anagram of the first.
							</p>

							<p>The output of the function should look like this:</p>

							<img
								//
								src={anagramoutput}
								alt=""
							/>

							<p>Here is an explanation clarifying the above output:</p>
							<ul>
								<li>
									In the 1st log, the string 'this' and the string 'isht' both
									contain the same letters, and the letters appear in the same
									frequency.
								</li>
								<li>
									In the 2nd log, the string 'run' and the string 'nun' don't
									contain the same letters and they don't have the same
									frequency because:
									<ul>
										<li>
											In the second string, the letter 'n' appears twice,
											whereas in the first string the letter 'n' appears once;
											as a result, they don't have the same frequency.
										</li>
										<li>
											The first string has the letter 'r', whereas the second
											string doesn't have the letter 'r'; as a result, they
											don't have the same letters.
										</li>
									</ul>
								</li>
								<li>
									In the 3rd log, the string 'dum' and the string 'mud' both
									contain the same letters, and the letters appear in the same
									frequency.
								</li>
								<li>
									In the 4th log, the string 'master' and the string 'ramste'
									both contain the same letters, and the letters appear in the
									same frequency.
								</li>
							</ul>

							<p>
								Now that we know how the output looks, let's go through the code
								that we can use to generate this type of a solution.
							</p>

							<h2 className="focus">First solution</h2>

							<p>
								I used the code from our previous (part 1) nested loop problem,
								and i edited it a bit to make it focus on strings instead of
								numbers.
							</p>

							<p>Below is the solution using the frequency counter pattern.</p>

							<img
								//
								src={anagramsolution1}
								alt=""
							/>

							<p>
								This solution works and it has O(n) time complexity, but its a
								bit long; so we will develop another solution to solve the same
								problem.
							</p>

							<h2 className="focus">Second solution</h2>

							<p>
								The below solution is still using the frequency counter pattern
								but the code has been refactored. The major difference is that
								it is shorter and a bit more elegant.
							</p>

							<img
								//
								src={anagramsolution2}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FrequencyCounterPart2;
