export const component = {
	name: "vw-depend",
	render() {
		return null;
	},
};

component.install = function (Vue) {
	Vue.component(component.name, component);
};

export default component;
