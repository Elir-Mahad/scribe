import React from "react";
import "../AllBlogs.css";

function DeployReactSiteGit() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">Deploy a react app via Github pages</h1>
						<div className="taganimation">
							<h4 className="hashtag">#react #sitehosting</h4>
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
							<h2 className="focus focusdifferent">Problem</h2>
							<p>
								While i was working on a few different react projects, i
								occasionally used github pages to deploy my react sites. The
								process of using github pages to deploy react sites, is
								different from the process that's used to deploy regular sites
								on github pages. I repeteadly found myself on stackoverflow
								trying to remember the process for deploying react sites on
								github.
							</p>
							<h2 className="focus">Solution</h2>
							<p>
								To avoid wasting time, i wrote down a step by step manual for
								this particular process. For this example, we are going to
								deploy a react app called ‘solitaire.
							</p>

							<div className="paragraph">
								<h2 className="focus">Step 1: Go into your Github account</h2>

								<ul>
									<li>Create a repository called 'solitaire'.</li>
									<li>Do not create an index.html.</li>
									<li>
										Once you see the 'quick set up' page, leave that page open
										in your browser, and move on to the 2nd step.
									</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">Step 2: Open your terminal</h2>
								<ul>
									<li>
										Instal 'yarn' via the administrator account of your
										computer:
									</li>
									<li className="code">npm i -g yarn</li>
									<li>Create react app :</li>
									<li className="code">npx create-react-app solitaire</li>
									<li>
										When this folder is downloaded, put it on your desktop.
									</li>
									<li>
										cd into the solitaire folder, and connect your local
										solitaire folder, to the solitaire repository in your Github
										pages:
									</li>
									<li className="code">cd ~/desktop</li>
									<li className="code">cd solitaire</li>
									<li className="code">yarn add gh-pages</li>
									<li>make your first commit</li>
									<li className="code">git add .</li>
									<li className="code">git commit -m "First commit."</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">
									Step 3: Go back to your Github account quick setup page
								</h2>
								<ul>
									<li>
										We are now going to upload the solitaire folder, that's
										currently on your desktop, to your Github repository
										solitaire, which is on the Github website.
									</li>
									<li>
										On the quick set up page, copy and paste the two lines that
										are under ‘or push an existing repository from the command
										line’.
									</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">Step 4: Go back to your terminal</h2>
								<ul>
									<li>
										Paste the two lines that you've have copied, into the
										terminal
									</li>
									<li>
										Below is the first line. It will give you remote control of
										your Github repository.
									</li>
									<li className="code">
										git remote add origin
										https://github.com/Elir-Mahad/solitaire.git
									</li>
									<li>
										Below is the second line. It will upload the folder into
										your repository. You will be asked to provide your Github
										username and password, so be ready to insert them into the
										terminal.
									</li>
									<li className="code">git push -u origin master</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">
									Step 5: Go to your Github account in your browser
								</h2>
								<ul>
									<li>Go into the settings of your repository</li>
									<li>In the settings, change the branch to master branch</li>
									<li>
										Refresh the page, and you will see your react apps url.
									</li>
									<li>Copy and paste the url</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">
									Step 6: Open your visual studio code editor
								</h2>
								<ul>
									<li>Open the solitaire folder inside the VSC editor.</li>
									<li>
										On the left panel, under 'gitignore' you will see a file
										titled ‘package.json’
									</li>
									<li>Open the 'package.json' file</li>
									<li>In the package.json, under [ private : true ]</li>
									<li className="code">
										type [ homepage: Insert-url-for-the-app ]
									</li>
									<li>
										In the package.json, in the scripts object, under [ eject :
										react-scripts-eject ]
									</li>
									<li className="code">
										type [ predeploy: "yarn build, deploy: "gh-pages -d build ]
									</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">Step 7: Go back to terminal</h2>
								<ul>
									<li>Type in the terminal:</li>
									<li className="code">git add .</li>
									<li className="code">
										git commit -m “Add Github Pages config.”
									</li>
									<li className="code">yarn run deploy</li>
									<li>
										Go to GitHub settings and change branch from master to
										gh-pages branch
									</li>
									<li>
										Insert your react apps url into the browser. The react site
										should be live.
									</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">Step 8: To make changes to your app</h2>
								<ul>
									<li>Open up the code page within the vsc</li>
									<li>Make the changes. Save the changes.</li>
									<li>Then open terminal (in visual studio code) and type</li>
									<li className="code">git add .</li>
									<li className="code">
										git commit -m “ insert-description-of-changes-made ”
									</li>
									<li className="code">git push -u origin master</li>
									<li className="code">yarn run deploy</li>
									<li>
										This will update the GitHub repository with the new
										files/changes, and it will update the site with the new
										changes.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DeployReactSiteGit;
