var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var unidos = [];
for (let i in pronoun){
     for (let j in adj){
         for (let k in noun){
             unidos.push(pronoun[i]+adj[j]+noun[k]+'.com \n')
        }
    }
}


let ul = document.createElement('ul');
document.body.appendChild(ul);

for (var i = 0; i < unidos.length; i++) {
    let li = document.createElement('li');
    li.innerHTML= unidos[i];
    ul.appendChild(li);
}