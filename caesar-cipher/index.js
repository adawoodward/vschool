const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// CAESAR
function ceasarCipher(plaintext, key){
	 if(key < 0){
	 	return ceasarCipher(plaintext, key + 26);
	 }
	
	// Store the ciphered text
	var ciphertext = '';

	// Loop trough each letter in plaintext
	for(var i = 0, n = plaintext.length; i < n; i++){
		
		// Get the i-th character
		var c = plaintext[i];
		
		// If it's a letter
		if(c.match(/[a-z]/i)){
		
			// Get the ascii code of each character
			var code = plaintext.charCodeAt(i);
			
			// Uppercase letters
			if((code >= 65) && (code <= 90)){
				c = String.fromCharCode(((code - 65 + key ) % 26) + 65);
			}
			// Lowercase letters
			else if((code >= 97) && (code <= 122)){
				c = String.fromCharCode(((code - 97 + key ) % 26) + 97);
			}
		}
		ciphertext += c;
	}
	return ciphertext;	
};

// Get user's input
rl.question('\n' + 'What phrase would you like to encrypt? ', (message) => {
	var msg = message;

	rl.question('How many letters would you like to shift? ', (key) => {
		var key = parseInt(key);

		rl.write(" ----------\n" + '\n');	 

		console.log("Encrypted message: " + ceasarCipher(msg, key) + '\n'); 
	
		rl.close();
	});	 
});