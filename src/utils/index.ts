import projects from 'services/projects.json'

const Colors = {
	'primary-100': '#9A9A9A',
}

const PROJECTS = projects

const emailMe = () => {
	window.location = 'mailto:cynthiamahofa@gmail.com' as string & Location
}

export default {
	Colors,
	PROJECTS,
	emailMe,
}
