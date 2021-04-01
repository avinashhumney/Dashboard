import './App.css';

function App() {
	return (
		<div className="App">
			<nav className="navbar">
				<h1>
					Sublime
        </h1>
				<ul>
					<li>
						<a>
							Dashboard
            </a>
					</li>
					<li>
						<a>
							Borrow
            </a>
					</li>
					<li>
						<a>
							Lend
            </a>
					</li>
					<li>
						<a>
							Your Profile
            </a>
					</li>
				</ul>
			</nav>
			<main>
				<div className="row">
					<div className="col-12 col-md-9">
						<h2>
							Overview
            </h2>
						<div className="row">
							<div className="col-6 col-md-6">
								<div className="card">
									<h3>
										$16,034
                  </h3>
									<p>
										Total borrowed amount
                  </p>
								</div>
							</div>
							<div className="col-6 col-md-6">
								<div className="card">
									<h3>
										$160,032
                  </h3>
									<p>
										Total supplied amount
                  </p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-6 col-md-6">
								<div className="card">
									<h3>
										32%
                  </h3>
									<p>
										Total borrow rate
                  </p>
								</div>
							</div>
							<div className="col-6 col-md-6">
								<div className="card">
									<h3>
										15%
                  </h3>
									<p>
										Total lending rate
                  </p>
								</div>
							</div>
						</div>

						<div className="row">
							<h2>Deposit and Save Overview</h2>
							<div className="col-4 col-md-4">
								<div className="card">
									<h3>
										$0
                  </h3>
									<p>
										Deposited
                  </p>
								</div>
							</div>
							<div className="col-4 col-md-4">
								<div className="card">
									<h3>
										$0
                  </h3>
									<p>
										Interest Earned
                  </p>
								</div>
							</div>
							<div className="col-4 col-md-4">
								<div className="card">
									<h3>
										6%
                  </h3>
									<p>
										Interest Rate
                  </p>
								</div>
							</div>
							<button className="btn btn-dark">View More</button>
						</div>

						<div className="row">
							<h2>Credit Lines</h2>
							<div className="col-6 col-md-3">
								<div className="card">
									<h3>
										$0
                  </h3>
									<p>
										Credit Granted
                  </p>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="card">
									<h3>
										$0
                  </h3>
									<p>
										Active Credit
                  </p>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="card">
									<h3>
										0
                  </h3>
									<p>
										Interest Accrued
                  </p>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="card">
									<h3>
										6%
                  </h3>
									<p>
										Interest Rate
                  </p>
								</div>
							</div>
							<button className="btn btn-dark">View More</button>

							<div>
								<h3>My Pools</h3>
								<div className="row">
									<div className="col-12 col-md-6">
										<ul>
											<li>
												<a>All Pools</a>
											</li>
											<li>
												<a>Borrow</a>
											</li>
											<li>
												<a>Lend</a>
											</li>
										</ul>
									</div>
									<div className="col-12 col-md-6">
										<div className="d-flex">
											<img src="search.svg" />
											<input
												type="text"
												placeholder="Search"
											/>
											<select className="form-select">
												<option selected>Open this select menu</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12 col-md-6">
									<div className="card text-center">
										<div className="d-flex align-items-center justify-content-center">
											<div>
												<img src="/Ellipse 9.svg" />
											</div>
											<div>
												<div className="d-flex align-items-center">
													<h6>stani.eth</h6>
													<img src="/Vector.svg" />
												</div>
												<h5>@StaniKulechov</h5>
												<div className="d-flex">
													<button className="btn">Open Borrow</button>
													<button className="btn">Closed</button>
												</div>
											</div>
										</div>
										<hr />
										<div className="d-flex justify-content-around">
											<h6>Borrow Rate</h6>
											<h5>200 DOT</h5>
										</div>
										<div className="d-flex justify-content-around">
											<h6>Borrowed Amount</h6>
											<h5>1,000 DOT</h5>
										</div>
										<div className="d-flex justify-content-around">
											<h6>Repayment progress</h6>
											<div>
												<h5>100%</h5>
												<div>
													<div className="progress">
														<div className="progress-bar" role="progressbar"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex  justify-content-around">
											<h6>Ended on</h6>
											<h5>30th Jan 2021</h5>
										</div>
										<button className="text-center btn btn-dark">View more</button>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="card">
										<div className="d-flex">
											<div>
												<img src="/Ellipse 9.svg" />
											</div>
											<div>
												<div className="d-flex">
													<h6>stani.eth</h6>
													<img src="/Vector.svg" />
												</div>
												<h5>@StaniKulechov</h5>
												<div className="d-flex">
													<button className="btn">Open Borrow</button>
													<button className="btn">Closed</button>
												</div>
											</div>
										</div>
										<hr />
										<div className="d-flex justify-space">
											<h6>Borrow Rate</h6>
											<h5>200 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Borrowed Amount</h6>
											<h5>1,000 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Repayment progress</h6>
											<div>
												<h5>100%</h5>
												<div>
													<div className="progress">
														<div className="progress-bar" role="progressbar"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex justify-space">
											<h6>Ended on</h6>
											<h5>30th Jan 2021</h5>
										</div>
										<button className="text-center btn btn-dark">View more</button>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="card">
										<div className="d-flex">
											<div>
												<img src="/Ellipse 9.svg" />
											</div>
											<div>
												<div className="d-flex">
													<h6>stani.eth</h6>
													<img src="/Vector.svg" />
												</div>
												<h5>@StaniKulechov</h5>
												<div className="d-flex">
													<button className="btn">Open Borrow</button>
													<button className="btn">Closed</button>
												</div>
											</div>
										</div>
										<hr />
										<div className="d-flex justify-space">
											<h6>Borrow Rate</h6>
											<h5>200 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Borrowed Amount</h6>
											<h5>1,000 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Repayment progress</h6>
											<div>
												<h5>100%</h5>
												<div>
													<div className="progress">
														<div className="progress-bar" role="progressbar"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex justify-space">
											<h6>Ended on</h6>
											<h5>30th Jan 2021</h5>
										</div>
										<button className="text-center btn btn-dark">View more</button>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="card">
										<div className="d-flex">
											<div>
												<img src="/Ellipse 9.svg" />
											</div>
											<div>
												<div className="d-flex">
													<h6>stani.eth</h6>
													<img src="/Vector.svg" />
												</div>
												<h5>@StaniKulechov</h5>
												<div className="d-flex">
													<button className="btn">Open Borrow</button>
													<button className="btn">Closed</button>
												</div>
											</div>
										</div>
										<hr />
										<div className="d-flex justify-space">
											<h6>Borrow Rate</h6>
											<h5>200 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Borrowed Amount</h6>
											<h5>1,000 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Repayment progress</h6>
											<div>
												<h5>100%</h5>
												<div>
													<div className="progress">
														<div className="progress-bar" role="progressbar"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex justify-space">
											<h6>Ended on</h6>
											<h5>30th Jan 2021</h5>
										</div>
										<button className="text-center btn btn-dark">View more</button>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="card">
										<div className="d-flex">
											<div>
												<img src="/Ellipse 9.svg" />
											</div>
											<div>
												<div className="d-flex">
													<h6>stani.eth</h6>
													<img src="/Vector.svg" />
												</div>
												<h5>@StaniKulechov</h5>
												<div className="d-flex">
													<button className="btn">Open Borrow</button>
													<button className="btn">Closed</button>
												</div>
											</div>
										</div>
										<hr />
										<div className="d-flex justify-space">
											<h6>Borrow Rate</h6>
											<h5>200 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Borrowed Amount</h6>
											<h5>1,000 DOT</h5>
										</div>
										<div className="d-flex justify-space">
											<h6>Repayment progress</h6>
											<div>
												<h5>100%</h5>
												<div>
													<div className="progress">
														<div className="progress-bar" role="progressbar"></div>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex justify-space">
											<h6>Ended on</h6>
											<h5>30th Jan 2021</h5>
										</div>
										<button className="text-center btn btn-dark">View more</button>
									</div>
								</div>
							</div>

						</div>
					</div>

					<div className="col-12 col-md-3">
						<h3>Important (3)</h3>
						<div className="card">
							<div>
								<img src="/avatar1.svg" />
								<div>
									<h5>Vote for extension</h5>
									<h6>@Lorem_ipsum</h6>
									<p>Vote ends in 2 days</p>
								</div>
								<div className="d-flex align-items-center justify-content-center">
									<button className="btn">Vote</button>
									<button className="btn">Dismiss</button>
								</div>
							</div>
						</div>
						<div className="card">
							<div>
								<img src="/avatar2.svg" />
								<div>
									<h5>Vote for extension</h5>
									<h6>@Lorem_ipsum</h6>
									<p>Pool ends in 2 days</p>
								</div>
								<div className="d-flex align-items-center justify-content-center">
									<button className="btn">Vote</button>
									<button className="btn">Dismiss</button>
								</div>
							</div>
						</div>
						<div className="card">
							<div>
								<img src="/Ellipse 9.svg" />
								<div>
									<h5>Vote for extension</h5>
									<h6>@Lorem_ipsum</h6>
									<p>Vote ends in 2 days</p>
								</div>
								<div className="d-flex align-items-center justify-content-center">
									<button className="btn">Vote</button>
									<button className="btn">Dismiss</button>
								</div>
							</div>
						</div>
					</div>

				</div>

			</main>

			<footer>
				<div className="d-flex align-items-center justify-content-between">
					<ul className="d-flex align-items-center">
						<li>
							<a>Terms & Agreements</a>
						</li>
						<li>
							<a>Blog</a>
						</li>
						<li>
							<a>Privacy Policy</a>
						</li>
						<li>
							<a>FAQ</a>
						</li>
						<li>
							<a>&#169; 2021 Sublime</a>
						</li>
					</ul>
					<div className="d-flex align-items-center">
						<img src="/GitHub.png" />
						<img src="/Twitter.png" />
					</div>
				</div>
				
			</footer>
		</div>
	);
}

export default App;
