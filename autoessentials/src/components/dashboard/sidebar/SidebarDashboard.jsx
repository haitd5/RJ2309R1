import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgTranscript } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaGauge } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";


function SidebarDashboard() {
	return (
		<>
			<div className={`d-flex justify-content-between flex-column p-3 vh-100`}>
				<div className={``}>
					<Link to={`/dashboard`} className={'text-decoration-none'}>
						<span className={`nav-link`}>
							<span className={`mx-3 text-dark`}>
								<FaGauge size={20}/>
							</span>
							<span className={`fs-6 d-none d-sm-inline text-dark text-capitalize`}>Dashboard</span>
						</span>
					</Link>
					<hr className={`text-secondary`}/>
					<ul className={`nav nav-pills flex-column mt-5 `}>
						<NavLink to={`/dashboard/products`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<RxDashboard size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Product</span>
								</span>
							</li>
						</NavLink>
						<NavLink to={`/dashboard/orders`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<IoCartOutline size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Orders</span>
								</span>
							</li>
						</NavLink>
						<NavLink to={`/dashboard/customers`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<FiUsers size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Customers</span>
								</span>
							</li>
						</NavLink>
						<NavLink to={`/dashboard/shipments`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<CiDeliveryTruck size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Shipments</span>
								</span>
							</li>
						</NavLink>
						<NavLink to={`/dashboard/transactions`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<CgTranscript size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Transactions</span>
								</span>
							</li>
						</NavLink>
						<NavLink to={`/dashboard/settings`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<CiSettings size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Settings</span>
								</span>
							</li>
						</NavLink>
						<NavLink to={`/home`} className={'text-decoration-none my-2'}>
							<li className={`nav-item`}>
								<span className={`nav-link`}>
									<span className={`mx-3 text-dark`}>
										<MdOutlineLogout size={20}/>
									</span>
									<span className={`fs-6 d-none d-sm-inline text-dark`}>Logout</span>
								</span>
							</li>
						</NavLink>
					</ul>
					{/*<ul className={`nav nav-pills flex-column mt-5`}>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 1 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(1)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<FaGauge size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Dashboard</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 2 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(2)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<RxDashboard size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Product</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 3 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(3)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<FiUsers size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Customers</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 4 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(4)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<IoCartOutline size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Orders</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 5 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(5)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<CiDeliveryTruck size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Shipments</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 6 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(6)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<CgTranscript size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Transactions</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={active === 7 ? `active nav-link` : `nav-link`}*/}
					{/*			  onClick={() => setActive(7)}*/}
					{/*		>*/}
					{/*			<span className={`mx-3 text-dark icon`}>*/}
					{/*				<CiSettings size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Settings</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*	<li className={`nav-item mt-2`}>*/}
					{/*		<span className={`nav-link`}>*/}
					{/*			<span className={`mx-3 text-dark`}>*/}
					{/*				<MdOutlineLogout size={20}/>*/}
					{/*			</span>*/}
					{/*			<span className={`fs-6 d-none d-sm-inline text-dark`}>Logout</span>*/}
					{/*		</span>*/}
					{/*	</li>*/}
					{/*</ul>*/}
				</div>
			</div>
		
		</>
	)
}
export default SidebarDashboard