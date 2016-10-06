var autocomplete = new google.maps.places.AutocompleteService()

module.exports = {
	getOptions: function(input) {
		return new Promise((resolve, reject) => {
			autocomplete.getPlacePredictions({
				input,
				types: ["(cities)"]
			}, (res) => {
				if (res) {
					var options = res.map(item => {
						return item.description
					})
					resolve(options)
				} else {
					reject()
				}
			})
		})
	}
}
