var censor = ["sad","bad","mad"];
var censorNew = [];
func change(text)
{
for(indx in censor)
{
text  = text.replace(censor[indx],"****");
}
for(indx in censorNew)
{
text = text.replace(censorNew[indx],"****");
}
return text;
}
func  addWord(text1)
{
censorNew.push(text1);
}
func getWord()
{
return censor.concat(censorNew);
}
exports.change = change;
exports.addWord = addWord;
exports.getWord = getWord;

