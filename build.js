const fs = require('fs')
const Remarkable = require('remarkable')

function read(file) {
	return fs.readFileSync(file, { encoding: 'utf8' })
}

const htmlTemplate = read('./template.html')

function build(name, outputName = name) {
	const contentHtml = new Remarkable().render(read(`./${name}.md`))

	fs.writeFileSync(`./${outputName}.html`, htmlTemplate.replace('<!--content-->', contentHtml))
}

build('readme', 'index')
build('isoft')
