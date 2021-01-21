import React from "react";
import "../AllBlogs.css";

function DeployHtmlSiteGit() {
	return (
		<section className="blogs">
			<div className="wrapper">
				<div className="blog">
					<div className="titletaganimation">
						<h1 className="title">
							Deploy basic html/css sites via github pages
						</h1>
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
							<h2 className="focus focusdifferent">Problem</h2>
							<p>
								While i was working on a few projects, i occasionally used
								github pages to deploy my sites. I repeteadly found myself on
								stackoverflow trying to remember the process for deploying sites
								on github.
							</p>

							<h2 className="focus">Solution</h2>
							<p>
								To avoid wasting time, i wrote down a step by step manual for
								this particular process. For this example, we are going to
								deploy a website ‘hogwartz'.
							</p>

							<div className="paragraph">
								<h2 className="focus">Step 1: Go into your Github account</h2>

								<ul>
									<li>Create a repository called 'hogwartz'.</li>
									<li>Do not create an index.html.</li>
									<li>
										Once you see the 'quick set up' page, leave that page open
										in your browser, and move on to the 2nd step.
									</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">
									Step 2: Create a local folder (with index,css files) on your
									desktop
								</h2>

								<ul>
									<li>On your desktop, create a folder called 'hogwartz'.</li>
									<li>Open terminal and cd into that folder</li>
									<li className="code">cd ~/desktop</li>
									<li className="code">cd hogwartz</li>
									<li>Create index and css files inside the folder</li>
									<li className="code">touch index.html</li>
									<li className="code">touch style.css</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">
									Step 3: Use visual studio code to cd into the local folder
									'hogwartz'
								</h2>

								<ul>
									<li>
										On your desktop, open the folder 'hogwartz' inside visual
										studio code
									</li>
									<li>
										Open visual studio code terminal - make sure you operating
										within the 'hogwartz' folder.
									</li>
									<li>
										If your'e not operating from within the 'hogwartz' folder,
										then inside the vsc terminal type
									</li>
									<li className="code">cd hogwartz</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">
									Step 4: Upload local folder to the github repository
								</h2>
								<ul>
									<li>
										Go back to your Github repository 'hogwartz'; find the quick
										setup page
									</li>
									<li>
										On the quick set up page, copy and paste the two lines that
										are under ‘or push an existing repository from the command
										line’.
									</li>
									<li>In the vsc terminal type</li>
									<li className="code">git init</li>

									<li>
										Paste the two lines that you've have copied, into the visual
										studio code terminal
									</li>
									<li>
										Below is the first line. It will give you remote control of
										your Github repository.
									</li>
									<li className="code">
										git remote add origin
										https://github.com/Elir-Mahad/hogwartz.git
									</li>
									<li>
										Below is the second line. It will upload the folder into
										your repository. You will be asked to provide your Github
										username and password, so be ready to insert them into the
										terminal.
									</li>
									<li className="code">git push -u origin master</li>
									<li>
										Go to your github repository and verify whether files have
										been uploaded or not
									</li>
									<li>
										You should see two files , index.html and style.css , in
										your repository
									</li>
								</ul>
							</div>
							<div className="paragraph">
								<h2 className="focus">Step 5: activate github pages</h2>
								<ul>
									<li>
										Go back to your Github repository 'hogwartz'; click on
										settings
									</li>
									<li>Scroll down on settings untill you see github pages</li>
									<li>
										Change the branch to master, save, and refresh the page
									</li>
									<li>You will now see the below line</li>
									<li className="code">
										Your site is published at
										https://elir-mahad.github.io/hogwartz/
									</li>
									<li>
										Your site will published at
										https://elir-mahad.github.io/hogwartz/index.html
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

export default DeployHtmlSiteGit;
