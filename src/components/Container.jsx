function Container({children}){
	return(
		<div className="container h-screen flex flex-col items-center justify-center">
			{children}
		</div>
	);
}

export default Container;