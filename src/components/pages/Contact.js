import	React from "react"

	const Contact = () => {

		return (

	 <div className="container">
	 <div className="py-4">
      <h1>Contact Page</h1>

		<form class="form-inline" action="/action_page.php">
			<label for="email">Email address:</label>
			<input type="email" class="form-control" placeholder="Enter email" id="email"/>
			<label for="pwd">Password:</label>
			<input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
			<div class="form-check">
			<label class="form-check-label">
			<input class="form-check-input" type="checkbox"/> Remember me
			</label>
			</div>
		<button type="submit" class="btn btn-primary">Submit</button>
		</form>

      </div>
    </div>




			)

}

export default Contact;
