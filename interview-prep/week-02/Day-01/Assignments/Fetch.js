<!DOCTYPE html>
<html>
<body>

<h2>Using the Fetch Api</h2>

<div id="demo">
<button type="button" onclick="loadXMLDoc()">Change Image</button>
<br/>
<img id="image" src="" alt="..." />
</div>

<script>
function loadXMLDoc() {
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(result=>
document.getElementById("image").src =result.message
)
}
</script>

</body>
</html>