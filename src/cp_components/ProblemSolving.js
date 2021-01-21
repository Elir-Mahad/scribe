import React from "react";
import psuedocode from "../assets/psuedocode.png";
import charcountstep4 from "../assets/charcountstep4.png";
import alphanumeric from "../assets/alphanumeric.png";
import charcountstep5 from "../assets/charcountstep5.png";
import charcountexample from "../assets/charcountexample.png";
//
function ProblemSolving() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">
							The process for solving algorithm problems
						</h1>
						<div className="taganimation">
							{/* <h4 className="hashtag">#algorithms</h4> */}
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
								There is a thick line between{" "}
								<a
									className="external_link"
									href="https://www.youtube.com/watch?v=FCMxA3m_Imc"
								>
									regular programming
								</a>
								, and{" "}
								<a
									className="external_link"
									href="https://www.youtube.com/watch?v=ueNT-w7Oluw"
								>
									competitive programming
								</a>
								. In regular programming, you learn how write code, and then you
								build things. During this process, you are bound to learn how to
								solve problems, but this is a skill that you learn indirectly.
								Building projects improves your logical and critical thinking
								skills; and as you build, you'll inevitably find yourself
								thinking in a more systemtic manner. On the other hand, in
								competitive programming, you are totally focused on 'solving
								problems'. Here, we are dealing with 'math'. You are given a
								problem and you have to solve it using some type of an equation
								(algorithm). In order to succeed in this field, you must first
								learn the equations (algorithms) and then you must practice the
								problems. The whole process is truly exciting. If you want to
								work as a developer for a
								<a
									className="external_link"
									href="https://www.codingninjas.com/events/how-to-get-into-faang-companies"
								>
									{" "}
									FANG
								</a>{" "}
								company, then you have to learn comptitive programming. This
								means that you have to develop, and refine, your problem solving
								muscles. Below is the general process for solving problem.
							</p>

							<p>Follow these steps to solve coding problems:</p>

							<ol>
								<li>Understand the problem</li>
								<li>Explore concrete examples</li>
								<li>Break it down</li>
								<li>Solve/simplify</li>
								<li>Look back and refactor</li>
							</ol>

							<h2 className="focus">Step 1: Understand the problem</h2>

							<p>
								When dealing with any problem, the first step is to try to
								understand it. These are some of the questions that you can ask
								to unpack the problem:
							</p>

							<ol>
								<li>Can I restate the problem in my own words?</li>

								<li>What are the inputs that go into the problem?</li>

								<li>
									What are the outputs that should come from the solution to the
									problem?
								</li>

								<li>
									Can the outputs be determined from the inputs? In other words,
									do I have enough information to solve the problem? (you may
									not be able to answer this question until you try to solve the
									problem; but its still important to consider this at an early
									stage).
								</li>

								<li>
									How should I label the important pieces of data that are a
									part of the problem?
								</li>
							</ol>

							<p>
								Suppose that we have to solve this problem:{" "}
								<span className="highlighted">
									Write a function which takes two numbers and returns their
									sum.
								</span>
							</p>

							<p>
								To solve this problem, we will start by trying to answer the
								aforementioned questions. Generally, it is possible to answer a
								question with a simple answer, but it is also okay to answer a
								question with another question. In fact, sometimes the best way
								to explore a problem, is to ask good questions about it.
							</p>

							<ol>
								<li>Can I restate the problem in my own words?</li>
								<ul>
									<li>For this problem we are adding numbers.</li>
								</ul>

								<li>What are the inputs that go into the problem?</li>
								<ul>
									<li>
										Are they always integers (numbers) or can they be strings
										(letters) for large numbers?
									</li>
									<li>
										What will happen if you want to add more than two numbers?
									</li>
								</ul>

								<li>
									What are the outputs that should come from the solution to the
									problem?
								</li>
								<ul>
									<li>Are they integers (numbers) or strings (letters) ?</li>
								</ul>

								<li>
									Can the outputs be determined from the inputs? In other words,
									do I have enough information to solve the problem?
								</li>
								<ul>
									<li>
										Yes they can, but what happens if someone only uses one
										number. Do you add zero to that number and produce the sum?
										Or do you output "null" or "error"?
									</li>
								</ul>

								<li>
									How should I label the important pieces of data that are a
									part of the problem?
								</li>
								<ul>
									<li>The name of function could be: 'add'.</li>
									<li>
										{" "}
										The variables 'num1' and 'num2' will store the different
										numbers that are being added.
									</li>
									<li>
										The variable 'Sum' will store the result of the addition.
									</li>
								</ul>
							</ol>

							<h2 className="focus">Step 2: Explore concrete examples</h2>

							<p>
								If you try to make the problem more realistic by using concrete
								examples, then you will be forced to ask more questions about
								the problem. As a result, you will have a deeper understanding
								of the problem. Here is the process for generating realistic
								examples :
							</p>

							<ol>
								<li>
									<span className="highlighted"> Simple examples: </span>
									This first step is supposed to get you warmed up. Write down
									two or three simple examples with an input and output. For
									example: 1 + 1 = 2.
								</li>
								<li>
									<span className="highlighted"> Complex examples: </span>
									Next make your problem complex. You can do this by adding more
									variables, doing something to the output after its produced,
									combining the inputs in different ways, etc. The important
									thing here is to be creative. For example: step one --> 1 + 1
									= 2. Step two --> Take the output (2) and add it to first
									input (1) --> 2 + 1 = 3 . Then do something else ..
								</li>
								<li>
									<span className="highlighted"> Empty input examples:</span>{" "}
									Next explore examples with empty inputs. Here you have to make
									sure that something specific happens when only one number, or
									no numbers, are submitted. If only one number is submitted,
									what will the function output? If no numbers are sumbitted,
									what will the function output?
								</li>
								<li>
									<span className="highlighted"> Invalid input examples:</span>{" "}
									Next explore examples with invalid inputs. Here you have to
									make sure that something specific happens when non-numeric
									characters are inputed. If the user tries to add the letter
									'p' and the number '9', then what will the function output? If
									the user tries to add two letters, then what will the function
									output?
								</li>
							</ol>

							<p>
								Suppose that we have to solve this problem:{" "}
								<span className="highlighted">
									write a function which takes in a string (i.e, letters) and
									returns counts of each character in the string.
								</span>{" "}
								For example: if we input the word "staff", then it should output
								a result showing that the letters 's', 't', 'a' only appeared
								once, and that the letter 'f' appeared twice.
							</p>

							<p>
								Now, to further understand this problem, let's use the
								aforementioned steps for creating concrete examples. The name of
								the function that we shall use in the examples below will be
								'charCount' ; it stands for 'character count'.
							</p>

							<ol>
								<li>
									<span className="highlighted"> Simple example: </span>
								</li>
								<ul>
									<li>Further questions about the problem:</li>
									<li>
										Should the result only return the letters that are in the
										string? What about the letters that are outside the string
										(i.e, outside the quotations?)
									</li>
									<li>
										If every letter was already set to 0, then we won't have to
										return/output the same letter everytime it appears. Instead,
										whenever the letter repeates itself, the count for that
										specific letter would just increase by one.
									</li>

									<li>Here are two simple examples:</li>

									<li class="code">charCount("aaaa")</li>
									<li class="code">a:4 --> a is repeated 4 times</li>

									<li class="code">charCount("hello")</li>
									<li class="code">h:1, e:1, l:2, 0:1</li>
								</ul>

								<li>
									<span className="highlighted"> Complex example: </span>
								</li>
								<ul>
									<li>Further questions about the problem:</li>
									<li>
										Do we want to account for spaces, numbers, dashes, etc?
									</li>
									<li>
										Do we store uppercase and lowercase letters differently or
										do we ignore cases?
									</li>

									<li>Here is a more complex example:</li>

									<li className="code">
										{" "}
										charCount("my phone number is 416-222-3455")
									</li>
									<li> How would the function handle this type of input ?</li>
								</ul>

								<li>
									<span className="highlighted"> Empty input example:</span>
								</li>
								<ul>
									<li>
										If someone submits an empty string, then should the function
										return an empty object or "null" or "undefined" or "error" ?
									</li>
									<li className="code">charcCount(" ")</li>
									<li> How would the function handle this type of input ?</li>
								</ul>

								<li>
									<span className="highlighted"> Invalid input example:</span>
								</li>
								<ul>
									<li>
										What if someone passes in something that isn't a string. For
										example a number.
									</li>
									<li className="code">charcCount(22)</li>
									<li> How would the function handle this type of input ?</li>
								</ul>
							</ol>

							<h2 className="focus">Step 3: Break it down</h2>

							<p>
								The third step is to explicitly write out the steps you need to
								take in{" "}
								<a
									className="external_link"
									href="https://www.youtube.com/watch?v=PwGA4Lm8zuE"
								>
									pseudo code
								</a>
								. This forces you to think abut the code you'll write before you
								write it, and it helps you catch any lingering conceptual issues
								or misunderstandings before you dive in and have to worry about
								details.
							</p>

							<p>
								In interviews, writing out the steps in psuedo code is very
								important because it demonstrates that you can formulate an
								approach under pressure.
							</p>

							<p>
								Also, alot of interview problems are very complex and many
								applicants end up running out of time. With this in mind, if you
								write out the pseudo code, and then run out of time after
								writing out the actual code for only half of the steps, then
								your pseudo code will determine whether you'll get the job.
							</p>
							<p>
								In other words, if you already wrote your psuedo code, before
								you started coding the solution (and then you ran out of time),
								then the interviewer can use your pseudo code to judge the
								soundness of your incomplete code.
							</p>
							<p>
								However, if you didn't write the pseudo code, before you started
								coding (and then you ran out of time), then the interviewer will
								percieve your code as simply incomplete.
							</p>

							<p>
								At this point in the example, and to make things simpler, we've
								decided that were going to turn all uppercase letters into
								lowercase letters and then count them. Below is the psuedo code
								for the 'charCount' problem.
							</p>

							<img
								//
								src={psuedocode}
								alt=""
							/>

							<h2 className="focus">Step 4: Simplify and solve</h2>

							<p>
								Most problems contain some parts that are difficult, and some
								parts that are easy. Normally, when your'e doing a regular test,
								your'e told finish all the easy questions first, and then deal
								with the difficult questions afterwards; that way you'll have
								more time to focus on the difficult questions. Since, most
								coding problems are time sensitive, you should use your time
								effectively by:
							</p>

							<ol>
								<li>
									Finding the core difficulty in what your'e trying to do.
								</li>
								<li>Temporarily ignoring that difficulty.</li>
								<li>Writing a simplified solution.</li>
								<li>Then incorporating that difficulty back in.</li>
							</ol>

							<p>
								We are now going to insert actual code that matches our previous
								pseudo code:
							</p>

							<img
								//
								src={charcountstep4}
								alt=""
							/>

							<h2 className="focus">Step 5: Look back and refactor</h2>

							<p>
								Refactoring is the process of restructuring the code (of an
								application or piece of software) so as to improve its
								operations, without altering its functionality. In other words,
								you have find more efficient ways of organizing your code.
							</p>

							<p>
								To refactor efficently, think about the following questions?
							</p>

							<ul>
								<li>Can you check the result ?</li>
								<li>Can you derive the result differently ?</li>
								<li>Can you understand it at a glance ?</li>
								<li>
									Can you use this specific result or method for some other
									problem? One of the benefits of solving a problem is that it
									helps you develop an intution for solving other problems. So
									whenever you write down a solution, its worthwile to think
									whether there are any similarities between this problem and
									solution, and other problems and solutions that you've
									encountered in the past.
								</li>
								<li>
									Can you improve the performance of your solution ? We can use{" "}
									<a
										//
										className="external_link"
										href="https://www.youtube.com/watch?v=D6xkbGLQesk"
									>
										time complexity
									</a>{" "}
									and space complexity to find out ways of making the solution
									better. Here you have to be comfortable measuring and
									calcuting these complexities. Try to identify things that are
									making the solution slow (for example: nested loops).
								</li>
								<li>
									Can you think of other ways to refactor ? If your'e working
									for a company, does your code follow company style guides?
									Does it follow the language conventions? Is the spacing
									consistent? In an interview setting, you should show that you
									acknowledge that your code isn't as neat as it could be, and
									that you'd prefer to make it neater if you had time.
								</li>
								<li>
									How have other people solved this problem ? You should ask
									this question, to the interviewer, after you've completed the
									problem, to demonstrate that you are curious about other
									solutions.
								</li>
							</ul>

							<p>
								For the 'charCount' problem, we have refactored the following
								items:
							</p>

							<ol>
								<li>The for loop was simplified.</li>
								<li>
									The{" "}
									<a
										//
										className="external_link"
										href="https://www.youtube.com/watch?v=sXQxhojSdZM"
									>
										regular expression
									</a>{" "}
									was replaced with an alphanumeric function. So far, to test
									whether a character is alphanumeric (i.e, either a number or a
									letter) we used the regular expression [a-z0-9]. Even though
									regular expressions are very useful, sometimes their
									performance can vary based on the browser that youre' using.
									To avoid any potential hiccups, we are going to write a
									seperate function that will check whether a character is
									alphanumeric or not, and then we will call that function
									within the charCount function.
								</li>
								<li>The lowercase statement was simplified.</li>
								<li>
									The if/else statemenets were compressed into a one-liner.
								</li>
							</ol>

							<p>
								Below is the first function of our refactored code. It's called
								'isAlphaNumeric'. This function checks to see whether a
								character is alphanumeric.
							</p>

							<img
								//
								src={alphanumeric}
								alt=""
							/>

							<p>
								Below is the second function of our refactored code. It's called
								'charCount'. This function counts all the characters in the
								string. It calls upon (uses) the 'isAlphaNumeric' function, to
								make sure that non-alphanumeric characters get removed.
							</p>

							<img
								//
								src={charcountstep5}
								alt=""
							/>

							<p>
								{" "}
								With these two functions, we are now able to identify the number
								of times each character appears in string. So if we want to know
								the character count for the string "mahadd Q787", then the
								output will look like this:
							</p>

							<img
								//
								src={charcountexample}
								alt=""
							/>

							<p>
								{" "}
								In conclusion, the process for solving algorithm problems, is
								much more complex. This blog post is simply an attempt to
								highlight the structure and nature of this process. It is
								composed of notes that i took while i was going through this{" "}
								<a
									className="external_link"
									href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
								>
									course
								</a>
								. I hope you found it useful.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProblemSolving;
