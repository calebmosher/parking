<!doctype html>

<html>

<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Garage</title>

<link rel="stylesheet" href="style.css" />

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="script.js"></script>

</head>

<body>

<div class="wrap">
	<div class="garage">
		<h2>Free spaces: <span class="freeSpaces"></span></h2>
	</div>
	
	<div class="valet">
		<div class="dropOff">
			<form>
				<input type="text" placeholder="Name of Car..." />
				<input type="submit" value="Drop Off Car" />
			</form>
			
			<div class="tickets">
				<h3>Here are your tickets:</h3>
				<ul></ul>
			</div>
		</div>
		
		<div class="pickUp">
			<form>
				<input type="text" placeholder="Ticket Number..." />
				<input type="submit" value="Pick Up Car" />
			</form>
			
			<div class="returns">
				<h3>Cars returned:</h3>
				<ul></ul>
			</div>
		</div>
	</div>
</div>

</body>

</html>