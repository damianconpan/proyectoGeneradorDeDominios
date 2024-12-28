let pronoun = ["the", "our", "yours"];
let adj = ["great", "big", "amazing", "spectacular", "unique"];
let noun = ["jogger", "racoon", "dog", "yisus", "web", "uwu"];
let dom = [".com", ".es", ".cl", ".net"];

for (let i = 0; i < pronoun.length; i++) {
  for (let y = 0; y < adj.length; y++) {
    for (let x = 0; x < noun.length; x++) {
      for (let z = 0; z < dom.length; z++) {
        console.log(pronoun[i] + adj[y] + noun[x] + dom[z]);
      }
    }
  }
}
