import './App.css';

function App() {
	return (
		<div className="App">
			{/* <nav className="navbar">
			</nav> */}
			<div className="d-flex align-items-center justify-content-center navbar">
				<h1 className="title">
					Sublime
        </h1>
				<ul className="d-flex align-items-center justify-content-center start-nav">
					<li>
						<a className="active-navlink">
							Dashboard
            </a>
					</li>
					<li>
						<a>Borrow</a>
					</li>
					<li>
						<a>
							Lend</a>
					</li>
					<li>
						<a>
							Your Profile
            </a>
					</li>
				</ul>
			</div>
			<main>
				<div className="container">
					<div className="row">
					
						<div className="col-12 col-md-9">
							<div className="main-content">

							<h2 className="overview-title">
								Overview
            </h2>
							<div className="row">
								<div className="col-12 col-md-6 p-0">
									<div className="card overview-card mr-1">
										<h3>$16,034</h3>
										<p>Total borrowed amount</p>
									</div>
								</div>
								<div className="col-12 col-md-6 p-0">
									<div className="card overview-card">
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
								<div className="col-12 col-md-6 p-0">
									<div className="card overview-card mr-1">
										<h3>
											32%
                  </h3>
										<p>
											Total borrow rate
                  </p>
									</div>
								</div>
								<div className="col-12 col-md-6 p-0">
									<div className="card overview-card">
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
								<h2 className="deposit-title">Deposit and Save Overview</h2>
								<div className="col-12 col-md-4 p-0">
									<div className="card overview-card mr-1">
										<h3>
											$0
                  </h3>
										<p>
											Deposited
                  </p>
									</div>
								</div>
								<div className="col-12 col-md-4 p-0">
									<div className="card overview-card mr-1">
										<h3>
											$0
                  </h3>
										<p>
											Interest Earned
                  </p>
									</div>
								</div>
								<div className="col-12 col-md-4 p-0">
									<div className="card overview-card">
										<h3>
											6%
                  </h3>
										<p>
											Interest Rate
                  </p>
									</div>
								</div>
								<button className="btn view-more-btn">View More</button>
							</div>

							<div className="row">
								<h2 className="deposit-title">Credit Lines</h2>
								<div className="col-12 col-md-3 p-0">
									<div className="card overview-card mr-1">
										<h3>
											$0
                  </h3>
										<p>
											Credit Granted
                  </p>
									</div>
								</div>
								<div className="col-12 col-md-3 p-0">
									<div className="card overview-card mr-1">
										<h3>
											$0
                  </h3>
										<p>
											Active Credit
                  </p>
									</div>
								</div>
								<div className="col-12 col-md-3 p-0">
									<div className="card overview-card mr-1">
										<h3>
											0
                  </h3>
										<p>
											Interest Accrued
                  </p>
									</div>
								</div>
								<div className="col-12 col-md-3 p-0">
									<div className="card overview-card">
										<h3>
											6%
                  </h3>
										<p>
											Interest Rate
                  </p>
									</div>
								</div>
								<button className="btn view-more-btn">View More</button>

								{/* <div> */}
								<h3 className="deposit-title">My Pools</h3>
								<div className="row">
									<div className="col-12 col-md-6 all-pools-nav">
										<ul className="d-flex align-items-center">
											<li>
												<a className="active-navlink">All Pools</a>
											</li>
											<li>
												<a>Borrow</a>
											</li>
											<li>
												<a>Lend</a>
											</li>
										</ul>
									</div>
									<div className="col-12 col-md-6 search-bar">
										<div className="d-flex">
											<img src="search.svg" className="search-avatar" />
											<input
												type="text"
												placeholder="Search"
												className="search"
											/>
											<select className="form-select">
												<option selected>Filter by</option>
												<option value="1">Date</option>
												<option value="2">Time</option>
												<option value="3">Month</option>
											</select>
										</div>
									</div>
								</div>

								<div className="row card-container">

									<div className="col-12 col-md-6 mt-md-5">
									<div className="card pools-card">
											<div className="d-flex align-items-center">
												<div className="pools-avatar">
													<img src="/Ellipse 9.svg" />
												</div>
												<div className="cards-pool-description">
													<div className="d-flex align-items-center">
														<h6>stani.eth</h6>
														<img src="/Vector.svg" />
													</div>
													<h5>@StaniKulechov</h5>
													<div className="d-flex">
														<button className="btn open-pool-btn">Open pool</button>
														<button className="btn closed-btn grace-period-btn">Grace Period</button>
													</div>
												</div>
											</div>
											<hr />
											<div className="mt-3 mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrow Rate</h6>
												<h5 className="card-p-vals">200 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrowed Amount</h6>
												<h5  className="card-p-vals">1,000 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Repayment progress</h6>
												<div className="d-flex align-items-center justify-content-center">
													<h5 className="card-p-vals">100%</h5>
													<div className="card-progress">
														<div className="prog-bar"></div>
													</div>
												</div>
											</div>
											<div className=" d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Ended on</h6>
												<h5 className="card-p-vals">30th Jan 2021</h5>
											</div>
											<button className="text-center btn btn-dark card-p-view-more-button repay-btn">Repay</button>
										</div>
									
									</div>
									<div className="col-12 col-md-6 mt-md-5">
									<div className="card pools-card">
											<div className="d-flex align-items-center">
												<div className="pools-avatar">
													<img src="/Ellipse 9.svg" />
												</div>
												<div className="cards-pool-description">
													<div className="d-flex align-items-center">
														<h6>stani.eth</h6>
														<img src="/Vector.svg" />
													</div>
													<h5>@StaniKulechov</h5>
													<div className="d-flex">
														<button className="btn open-pool-btn">Open Borrow</button>
														<button className="btn closed-btn collecting-btn">Collecting</button>
													</div>
												</div>
											</div>
											<hr />
											<div className="mt-3 mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrow Rate</h6>
												<h5 className="card-p-vals">200 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrowed Amount</h6>
												<h5  className="card-p-vals">1,000 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Repayment progress</h6>
												<div className="d-flex align-items-center justify-content-center">
													<h5 className="card-p-vals">100%</h5>
													<div className="card-progress">
													</div>
												</div>
											</div>
											<div className=" d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Ended on</h6>
												<h5 className="card-p-vals">30th Jan 2021</h5>
											</div>
											<button className="text-center btn btn-dark card-p-view-more-button">Add collateral</button>
										</div>
									
									</div>
									
									<div className="col-12 col-md-6">
										<div className="card pools-card">
											<div className="d-flex align-items-center">
												<div className="pools-avatar">
													<img src="/Ellipse 9.svg" />
												</div>
												<div className="cards-pool-description">
													<div className="d-flex align-items-center">
														<h6>stani.eth</h6>
														<img src="/Vector.svg" />
													</div>
													<h5>@StaniKulechov</h5>
													<div className="d-flex">
														<button className="btn open-pool-btn">Open Borrow</button>
														<button className="btn closed-btn">Closed</button>
													</div>
												</div>
											</div>
											<hr />
											<div className="mt-3 mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrow Rate</h6>
												<h5 className="card-p-vals">200 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrowed Amount</h6>
												<h5  className="card-p-vals">1,000 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Repayment progress</h6>
												<div className="d-flex align-items-center justify-content-center">
													<h5 className="card-p-vals">100%</h5>
													<div className="card-progress">
													</div>
												</div>
											</div>
											<div className=" d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Ended on</h6>
												<h5 className="card-p-vals">30th Jan 2021</h5>
											</div>
											<button className="text-center btn btn-dark card-p-view-more-button">View more</button>
										</div>
									
									</div>
									<div className="col-12 col-md-6">
									<div className="card pools-card">
											<div className="d-flex align-items-center">
												<div className="pools-avatar">
													<img src="/Ellipse 9.svg" />
												</div>
												<div className="cards-pool-description">
													<div className="d-flex align-items-center">
														<h6>stani.eth</h6>
														<img src="/Vector.svg" />
													</div>
													<h5>@StaniKulechov</h5>
													<div className="d-flex">
														<button className="btn open-pool-btn">Open Borrow</button>
														<button className="btn closed-btn">Closed</button>
													</div>
												</div>
											</div>
											<hr />
											<div className="mt-3 mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrow Rate</h6>
												<h5 className="card-p-vals">200 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrowed Amount</h6>
												<h5  className="card-p-vals">1,000 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Repayment progress</h6>
												<div className="d-flex align-items-center justify-content-center">
													<h5 className="card-p-vals">100%</h5>
													<div className="card-progress">
													</div>
												</div>
											</div>
											<div className=" d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Ended on</h6>
												<h5 className="card-p-vals">30th Jan 2021</h5>
											</div>
											<button className="text-center btn btn-dark card-p-view-more-button">View more</button>
										</div>
									
									</div>
									<div className="col-12 col-md-6">
									<div className="card pools-card">
											<div className="d-flex align-items-center">
												<div className="pools-avatar">
													<img src="/Ellipse 9.svg" />
												</div>
												<div className="cards-pool-description">
													<div className="d-flex align-items-center">
														<h6>stani.eth</h6>
														<img src="/Vector.svg" />
													</div>
													<h5>@StaniKulechov</h5>
													<div className="d-flex">
														<button className="btn open-pool-btn">Open Borrow</button>
														<button className="btn closed-btn">Closed</button>
													</div>
												</div>
											</div>
											<hr />
											<div className="mt-3 mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrow Rate</h6>
												<h5 className="card-p-vals">200 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Borrowed Amount</h6>
												<h5  className="card-p-vals">1,000 DOT</h5>
											</div>
											<div className="mb-3 d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Repayment progress</h6>
												<div className="d-flex align-items-center justify-content-center">
													<h5 className="card-p-vals">100%</h5>
													<div className="card-progress">
													</div>
												</div>
											</div>
											<div className=" d-flex justify-content-between align-items-center">
												<h6 className="card-p-title">Ended on</h6>
												<h5 className="card-p-vals">30th Jan 2021</h5>
											</div>
											<button className="text-center btn btn-dark card-p-view-more-button">View more</button>
										</div>
									
									</div>
								</div>

							</div>
							</div>
						</div>
					
						<div className="col-12 col-md-3">
					
							<div className="side">
							<h3 className="important-title">Important <span className="number">(3)</span></h3>
							<div className="card vote-card mb-1">
								<div>
									<div className="d-flex align-items-center">
									<img className="avatar" src="/avatar1.svg" />
									<div className="pl-3 vote-content">
										<h5 className="vote">Vote for extension</h5>
										<h6 className="vote-description">@Lorem_ipsum</h6>
										<p className="vote-ends">Vote ends in 2 days</p>
									</div>
									</div>
									<div className="d-flex align-items-center">
										<button className="btn view-more-btn">Vote</button>
										<button className="btn dismiss-btn">Dismiss</button>
									</div>
								</div>
							</div>
							<div className="card vote-card mb-1">
								<div>
									<div className="d-flex align-items-center">
									<img className="avatar" src="/avatar2.svg" />
									<div className="pl-3 vote-content">
										<h5 className="vote">Vote for extension</h5>
										<h6 className="vote-description">@Lorem_ipsum</h6>
										<p className="vote-ends">Vote ends in 2 days</p>
									</div>
									</div>
									<div className="d-flex align-items-center">
										<button className="btn view-more-btn">Vote</button>
										<button className="btn dismiss-btn">Dismiss</button>
									</div>
								</div>
							</div>
							<div className="card vote-card mb-1">
								<div>
									<div className="d-flex align-items-center">
									<img className="avatar" src="/Ellipse 9.svg" />
									<div className="pl-3 vote-content">
										<h5 className="vote">Vote for extension</h5>
										<h6 className="vote-description">@Lorem_ipsum</h6>
										<p className="vote-ends">Vote ends in 2 days</p>
									</div>
									</div>
									<div className="d-flex align-items-center">
										<button className="btn view-more-btn">Vote</button>
										<button className="btn dismiss-btn">Dismiss</button>
									</div>
								</div>
							</div>
							</div>
						</div>
					
				</div>
			</div>

			</main>

			<hr/>
			<footer>
				<div className="container d-flex align-items-center justify-content-between">
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
