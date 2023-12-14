import React from "react";

function MainDashboard() {
	return (
		<>
			<div className={`row mx-3`}>
				<div className={`col-md-3`}>
					<div className={'card border-left-primary shadow h-100 py-2'}>
						<div className={`card-body`}>
							<div className={`row mx-0 align-items-center`}>
								<div className={`col me-2`}>
									<div className={`text-primary text-uppercase mb-1`}>
										Order (MONTHLY)
									</div>
									<div className={`fs-3 text-secondary`}>
										3000
									</div>
								</div>
								<div className={`col-auto`}>
									<i className={`fas fa-calendar text-secondary fs-2`}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`col-md-3`}>
					<div className={'card border-left-success shadow h-100 py-2'}>
						<div className={`card-body`}>
							<div className={`row mx-0 align-items-center`}>
								<div className={`col me-2`}>
									<div className={`text-success text-uppercase mb-1`}>
										total amount (MONTHLY)
									</div>
									<div className={`fs-3 text-secondary`}>
										$40,000
									</div>
								</div>
								<div className={`col-auto`}>
									<i className={`fas fa-dollar-sign text-secondary fs-2`}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`col-md-3`}>
					<div className={'card border-left-info shadow h-100 py-2'}>
						<div className={`card-body`}>
							<div className={`row mx-0 align-items-center`}>
								<div className={`col me-2`}>
									<div className={`text-info text-uppercase mb-1`}>
										Tasks
									</div>
									<div className={`fs-3 text-secondary`}>
										400
									</div>
								</div>
								<div className={`col-auto`}>
									<i className={`fas fa-clipboard-list text-secondary fs-2`}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`col-md-3`}>
					<div className={'card border-left-warning shadow h-100 py-2'}>
						<div className={`card-body`}>
							<div className={`row mx-0 align-items-center`}>
								<div className={`col me-2`}>
									<div className={`text-warning text-uppercase mb-1`}>
										PENDING REQUESTS
									</div>
									<div className={`fs-3 text-secondary`}>
										18
									</div>
								</div>
								<div className={`col-auto`}>
									<i className={`fas fa-comments text-secondary fs-2`}></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default MainDashboard;