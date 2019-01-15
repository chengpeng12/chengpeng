require.config({
	paths: {
		jquery: "jquery-1.11.3",
		index: "index"
	}
})


require(["index"],function(index){

	index.index()
})
