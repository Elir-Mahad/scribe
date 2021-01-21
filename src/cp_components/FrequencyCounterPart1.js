import React from "react";
//
import frequencycounteroutput from "../assets/frequencycounteroutput.png";
import nestedloop from "../assets/nestedloop.png";
import frequencypattern from "../assets/frequencypattern.png";

function FrequencyCounterPart1() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">The Frequency counter pattern - part 1</h1>
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
								The frequency counter pattern is one of the many patterns, that
								competitive progammers use to solve coding problems.
							</p>

							<p>
								This pattern uses objects or sets to collect values/frequencies
								of items. This can often reduce the need for nested loops or
								O(n^2) operations, especially when we are solving problems that
								require us to analyze the frequency and/or value of items.
							</p>

							<h2 className="focus">Problem</h2>

							<p>
								Suppose that we have to solve this problem: write a function
								called same, which accepts two arrays. The function should
								return true, if every value in the array has it's corresponding
								value squared in the second array. The frequency of values must
								also be the same.
							</p>

							<p>The output of the function should look like this:</p>

							<img
								//
								src={frequencycounteroutput}
								alt=""
							/>

							<p>Here is an explanation clarifying the above outputs:</p>
							<ul>
								<li>
									In the 1st log, the output is false because:
									<ul>
										<li>
											In the second array, the number 9 should be repeated twice
											because in the first array the number 3 is repeated twice.
										</li>
										<li>
											In the first array, the number 2 should be in displayed
											once, because in the second array the number 4 is
											displayed once.
										</li>
									</ul>
								</li>
								<li>
									In the 2nd log, the output is true because the second array
									contains the square numbers, of all the numbers in the first
									array; and the frequency of the squared numbers mirrors the
									frequency of the numbers in the first array.
								</li>
								<li>
									In the 3rd log, the output is false because:
									<ul>
										<li>
											In the second array, the number 9 should be displayed once
											because in the first array the number 3 is displayed once.
										</li>
									</ul>
								</li>
							</ul>

							<p>
								Now that we know how the output looks, let's go through the code
								that we can use to generate this type of a solution.
							</p>

							<h2 className="focus">First solution</h2>

							<p>Below is an example of a nested loop solution.</p>

							<img
								//
								src={nestedloop}
								alt=""
							/>

							<p>
								This is the bad approach because its a nested loop, which means
								that its o(n^2) which is quadratic time; and quadratic time is
								not good because as the volume of data increases, the number of
								the operations skyrockets.
							</p>

							<p>
								In other words, in the beginning of the function we have this
								for loop: insert picture here to show code
								{/* <span class="code">
									for (let i = 0; i < arr1.length; i++)
								</span> */}
							</p>

							<p>This first 'for loop':</p>
							<ul>
								<li>scans each item in arr1</li>
								<li>grabs the value of each item</li>
							</ul>

							<p>
								And then within this 'for loop', there is a second loop:
								<span className="code">
									let correctIndex = arr2.indexOf(arr1 [i] ** 2)
								</span>
							</p>

							<p>This second loop :</p>
							<ul>
								<li>scans each item in arr1</li>
								<li>calculates the squared value of each item in arr1</li>
								<li>stores the squared value of each item arr2</li>
								<li>stores arr2 in the constant correctIndex</li>
							</ul>

							<p>
								We will now develop a more efficient method that is not
								quadratic time.
							</p>

							<h2 className="focus">
								Second solution using the frequency counter pattern
							</h2>

							<p>
								So far we've used a nested loop that loops over the first array,
								and then loops over each value in the second array via a second
								loop
							</p>

							<p>
								Now we are going to refactor the whole function by utilizing the
								<span className="code">frequency counter pattern</span> to make
								it more efficient.
							</p>

							<p>
								In the frequency pattern, instead of using the nested loop, we
								will loop over each array individual. Then we will take the
								arrays and break them down to an object, and then we'll compare
								those objects.
							</p>

							<p>
								Two seperate loops is always more efficient than a nested loop.
							</p>

							<p>The time complexity for two seperate loops is 'O(n)'</p>

							<p>
								So if 'n' is a thousand characters, and we have two seperate
								loops, each looping over a seperate array, then the function
								will carry out 2000 operations before it finishes.
							</p>

							<p>
								On the other hand, the time complexity for a nested loop is
								'o(n^2)'.
							</p>

							<p>
								So if 'n' is a thousand characters, and we have a nested loop
								wherein ( first loop contains the second loop) then we would
								have 1000 operations on the outer loop multiplied by 1000
								operations on the inner loop. This means that the function will
								carry out 1,000,000 operations before it finishes.
							</p>

							<img
								//
								src={frequencypattern}
								alt=""
							/>

							<p>
								With this refactored function, the time complexity is 3n and we
								simplify that to O(n). So if n is 1000, then we have 3000
								operations would occur. Each for loop will execute 1000
								operations, and there are three for loops.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FrequencyCounterPart1;
