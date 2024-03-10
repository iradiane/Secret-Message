let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
secretMessage.push("now","it","useful");
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("programming");
secretMessage.splice(6,5,"known");
console.log(secretMessage.join(' '));