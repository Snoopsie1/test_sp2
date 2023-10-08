export const lowercaseString = (string: string): string => {
	let lowercased = '';
	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			lowercased += String.fromCharCode(charCode + 32);
		} else {
			lowercased += string[i];
		}
	}
	return lowercased;
};
