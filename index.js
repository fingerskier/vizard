$ = document.querySelectorAll

window.onload = ()=>{
	navigator.requestMIDIAccess().then(init, console.error)

	
}

init = (midi)=>{
	var inputs = midi.inputs
	var output = midi.outputs

	var sourceInfo = []

	inputs.forEach((dat)=>{
		sourceInfo.push(dat)
		sourceInfo.push(dat)
	})

	d3
	.selectAll('p')
	.data(sourceInfo)
	.enter()
	.append('p')
	.text((d)=>{
		return `id: ${d.id}, conn? ${d.connection}`
	})
}
