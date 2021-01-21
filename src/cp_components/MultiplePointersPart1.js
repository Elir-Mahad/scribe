import React from "react";
//
import mp_output from "../assets/mp_output.png";
import mp_firstsolution from "../assets/mp_firstsolution.png";
import mp_secondsolution from "../assets/mp_secondsolution.png";

function MultiplePointersPart1() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">The multiple pointers pattern - part 1</h1>
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
								The new pattern that we are going to examine today is called
								multiple pointers.
							</p>

							<h2 className="focus">Multiple pointers</h2>

							<p>
								Creating pointers or values that correspond to an index or
								position and move towards the beginning, end or middle based on
								a certain condition.
							</p>

							<p>
								This pattern is very efficient for solving problems with minimal
								space complexity.
							</p>

							<p>
								We have some sort of linear structure like an array or a string.
								The idea is that we are going to be searching for a pair of
								values, or searching for something that meets a condition.
							</p>

							<h2 className="focus">Quick example</h2>

							<p>
								Suppose that we have this array of numbers:
								<span>[-4,-3,-2,-1,0,1,2,5]</span>
								and we are required to scan this array to find the pair [-2,2].
							</p>

							<p>
								To carry out this task, we could use two reference points.
								References here mean variables like 'i' and 'j', which refer to
								specific locations in an array or a string.
							</p>

							<p>
								If we decide to scan the array from the corners, and towards the
								middle, then:
							</p>

							<ul>
								<li>
									One reference point that we can use here is the furthest
									number on the left (-4). Let's say that this reference point
									is stored in the variable 'i'.
								</li>

								<li>
									Another reference point that we can use here is the furthest
									number on the right (5). let's say that this reference point
									is stored in the variable 'j'.
								</li>

								<li>
									Now that we have two reference points, we can scan the whole
									array, 'i' starting from the left and 'j' starting from the
									right, untill we find what we are looking for.
								</li>
							</ul>

							<p>
								Additionally, we can have different reference points. For the
								above example, if we decide to scan the array from left to the
								right then, instead of having reference points that are on the
								opposite ends of the array, we would have to place our reference
								points right next to each other. Therefore, to scan from left to
								right:
							</p>

							<ul>
								<li>
									One reference point that we can use here is the furthest
									number on the left (-4). Let's say that this reference point
									is stored in the variable 'i'.
								</li>

								<li>
									Another reference point that we can use here is the next
									number on it's right (-3). let's say that this reference point
									is stored in the variable 'j'.
								</li>

								<li>
									Now that we have two reference points, we can scan the whole
									array, by moving but 'i' and 'j' forward in a certain way,
									untill we find what we are looking for.
								</li>
							</ul>

							<p>
								One of the important things about this pattern is that there
								isn't one fixed way of scanning an array or string; you can scan
								forward, backward, etc. Moreover, this pattern is loosely
								defined in comparison to frequency counting pattern.
							</p>

							<h2 className="focus">Problem</h2>

							<p>
								Suppose that we have to solve this problem: write a function
								called sumZero which accepts a sorted array of integers. The
								function should find the first pair where the sum is 0. Return
								an array that includes both values that sum to zero, or return
								undefined when no pairs in the array sum up to zero.
							</p>

							<p>The output of the function should look like this:</p>

							<img
								//
								src={mp_output}
								alt=""
							/>

							<p>
								For this problem, we will scan the array from the corners, and
								towards the middle. Here is an explanation clarifying the above
								outputs:
							</p>

							<p>For the first console log:</p>
							<ul>
								<li>
									The first reference point is the furthest number on the left
									(-3). Let's say that this reference point is stored in the
									variable 'i'. The second reference point is the furthest
									number on the right (3). let's say that this reference point
									is stored in the variable 'j'.
								</li>

								<li>
									Now that we have two reference points, the algorithm will scan
									the whole array, 'i' starting from the left and 'j' starting
									from the right, untill it finds a pair of numbers whose sum is
									0.
								</li>

								<li>
									-3 and 3 add up to zero. Therefore the algorithm returns an
									array <span>[-3, 3]</span>
									that includes both values that sum to zero.
								</li>
							</ul>

							<p>For the second console log:</p>
							<ul>
								<li>
									The first reference point is the furthest number on the left
									(-6). Let's say that this reference point is stored in the
									variable 'i'. The second reference point is the furthest
									number on the right (5). let's say that this reference point
									is stored in the variable 'j'.
								</li>

								<li>
									Now that we have two reference points, the algorithm will scan
									the whole array, 'i' starting from the left and 'j' starting
									from the right, untill it finds a pair of numbers whose sum is
									0.
								</li>

								<li>
									The first number on the left is -6. The algorithm scans all
									the other numbers to identify which number, when added to -6,
									could produce 0. None of the numbers can achieve this task.
									Therefore the algorithm takes the next number on the left -5.
									Then it scans all the other numbers to identify which number,
									when added to -5, could produce 0.
								</li>
								<li>
									The number 5, which is the furthest number on the right, can
									achieve this task, because -5 and 5 add up to zero. Therefore
									the algorithm returns an array
									<span>[-5, 5]</span>
									that includes both values that sum to zero.
								</li>
							</ul>

							<p>For the third console log:</p>

							<ul>
								<li>
									The first reference point is the furthest number on the left
									(-2). Let's say that this reference point is stored in the
									variable 'i'. The second reference point is the furthest
									number on the right (3). let's say that this reference point
									is stored in the variable 'j'.
								</li>

								<li>
									Now that we have two reference points, the algorithm will scan
									the whole array, 'i' starting from the left and 'j' starting
									from the right, untill it finds a pair of numbers whose sum is
									0.
								</li>

								<li>
									None of the pairs can add up to zero, therefore it outputs
									undefined.
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
								src={mp_firstsolution}
								alt=""
							/>

							<p>
								This solution uses the number that's furthest on the left as the
								first reference point. Then it uses the number that's furthest
								on the right as the second reference point. Then it scans all
								the numbers (one by one) from the right to the left, untill it
								finds a number, that when added to the number that's furthest on
								the left, could produce an output of 0.
							</p>

							<p>
								This is the bad approach because its a nested loop, which means
								that its o(n^2) which is quadratic time; and quadratic time is
								not good because as the volume of data increases, the number of
								the operations skyrockets.
							</p>

							<p>
								In other words, in the beginning of the function we have this
								for loop: insert picture here
								{/* <span>
									for (let left_end_num = 0; left_end_num < arr.length;
									left_end_num++)
								</span> */}
							</p>

							<p>This first 'for loop':</p>
							<ul>
								<li>scans each item in arr</li>
								<li>grabs the value of each item</li>
								<li>
									picks the number that's furthest on the left end as the first
									reference point
								</li>
							</ul>

							<p>
								And then within this 'for loop', there is a second loop: Insert
								picture HERE
								{/* <span>
									for (let right_end_num = left_end_num + 1; right_end_num <
									arr.length;right_end_num++)
								</span> */}
							</p>

							<p>This second loop :</p>
							<ul>
								<li>scans each item in arr</li>
								<li>grabs the value of each item</li>
								<li>
									picks the number that's furthest on the right end as the
									second reference point
								</li>
							</ul>

							<p>
								Keeping in mind that, the time complexity for a nested loop is
								'o(n^2)'. If 'n' is a 1000 number, and we have a nested loop
								wherein ( first loop contains the second loop) then we would
								have 1000 operations on the outer loop multiplied by 1000
								operations on the inner loop. This means that the function will
								carry out 1,000,000 operations before it finishes.
							</p>

							<p>
								We will now develop a more efficient method that is not
								quadratic time.
							</p>

							<h2 className="focus">Second solution</h2>

							<p>Here is the refactored solution that's not nested</p>

							<img
								//
								src={mp_secondsolution}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MultiplePointersPart1;
