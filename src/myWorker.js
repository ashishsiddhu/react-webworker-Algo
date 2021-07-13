export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;
		const users = [];
        console.log("Data into webworkers is >>  ",e.data)
		// const userDetails = {
		// 	name: 'Jane Doe',
		// 	email: 'jane.doe@gmail.com',
		// 	id: 1
		// };
        let data = 1;
		for (let i = 0; i < e.data; i++) {
            data = e.data * e.data;
		}
        

		postMessage(data);
	})
}
