

const Input = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">User Name</span>
							</label>
							<input type="text" placeholder="User Name" className="input input-bordered" required />
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">See Details</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Input;