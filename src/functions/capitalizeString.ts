export const capitalizeString = (string: string): string => {
	let capitalized = '';
	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		if (charCode >= 97 && charCode <= 122) {
			capitalized += String.fromCharCode(charCode - 32);
		} else {
			capitalized += string[i];
		}
	}
	return capitalized;
};
