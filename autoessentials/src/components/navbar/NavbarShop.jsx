import React from "react";

function NavbarShop() {
	return (
		<>
			<div className="container d-flex align-items-center border-bottom py-3">
				<div className="d-flex align-items-center" style={{ minWidth: "180px" }}>
				
				</div>
				<div className="d-flex flex-grow-1 justify-content-between">
					<form className="w-50 d-flex align-items-center">
						<input
							type="search"
							placeholder="Enter your search shoes"
							className="form-control form-control-sm"
							style={{ paddingRight: '25px' }}
							value={''}
						/>
						<i className="fa-solid fa-magnifying-glass" style={{ marginLeft: '-25px', color: 'rgba(0,0,0,.2)' }}></i>
					</form>
				</div>
			
			</div >
		</>
	)
}
export default NavbarShop;