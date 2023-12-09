import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import BannerItems from "../components/banner/BannerItems";
import Recommend from "../components/recommend/Recommend";
import NewArrivals from "../components/newArrivals/NewArrivals";
import Blogs from "../components/Blogs/Blogs";
import Follow from "../components/follow/Follow";
import Footer from "../components/footer/Footer";

function HomePage() {
	return (
		<>
			<Header/>
			<Banner/>
			<BannerItems/>
			<Recommend/>
			<NewArrivals/>
			<Blogs/>
			<Follow/>
			<Footer/>
		</>
	)
}
export default HomePage