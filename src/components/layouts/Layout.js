import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Contacts from "../sections/Contacts";
import ModalWindow from "../base/ModalWindow";
import UrInfo from "../blocks/UrInfo";

// import Header from "../components/sections/Header";
// import Request from "../components/sections/Request";
// import Footer from "../components/sections/Footer";
// import ModalRewiew from "../../src/components/base/ModalReview"

function Layout({ content }) {
	return (
		<div className="flex flex-col h-screen">
			<ModalWindow isActive ={false}/>
			<Header />
			<div className="flex-grow pt-t lg:pt-18 pb-4 padding-x">{content}</div>
			<div className="lg:padding-x mt-12">
				<UrInfo/>
			</div>
			<div className="bg-gray-EC mt-28 lg:mt-8">
				<Contacts/>
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
