function Navbar(props) {
	return (
		<nav className="bg-yellow-300/50 flex justify-center items-center w-full">
			<div className="bg-white px-6 py-4 mt-20 rounded-[50px] flex gap-[24rem] justify-between items-center fixed shadow-lg backdrop-blur-lg">
				<div className="navbar__logo text-2xl font-bold">
					<a href="#">ROVA</a>
				</div>
				<div className="navbar__link flex gap-6">
					<a href="#" className="flex justify-center"><div className="bg-red-400/20 rounded-2xl w-[0.5rem] h-[0.5rem]"></div>About</a>
					<a href="#" className="flex justify-center"><div className="bg-green-400/20 rounded-2xl w-[0.5rem] h-[0.5rem]"></div>Work</a>
					<a href="#" className="flex justify-center"><div className="bg-blue-400/20 rounded-2xl w-[0.5rem] h-[0.5rem]"></div>Services</a>
					<a href="#"className="flex justify-center"><div className="bg-purple-400/20 rounded-2xl w-[0.5rem] h-[0.5rem]"></div>Contact</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;