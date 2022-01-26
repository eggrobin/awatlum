import os, sys, json

os.chdir(os.path.dirname(sys.argv[0]))

keyboard = [i for l in json.load(open("../keyboard.json")) for i in l.split(" ")]

cmu = json.load(open("./cmu.json"))

for entry in cmu:
    for j,pron in enumerate(cmu[entry]):
        cmu[entry][j] = cmu[entry][j].replace("ː", "").replace("ˈ", "").replace("ˌ","").replace("r", "ɹ").replace("ɝ", "ɚ")

        if cmu[entry][j] == "mɛɹoʊ":
            print(entry)
        for char in cmu[entry][j]:
            if char not in keyboard:
                print(f"Found untypeable character {char}")
                sys.exit(0)

        
# print(cmu)
old_dictionary = json.load(open("../old-dictionary.json"))
old_targets = json.load(open("../old-targets.json"))

new_dictionary = [pron for entry in old_dictionary if entry in cmu for pron in cmu[entry]]
new_targets = [pron for entry in old_targets if entry in cmu for pron in cmu[entry]]

json.dump(new_dictionary, open("../dictionary.json", "w"), indent=1, sort_keys=True, ensure_ascii=False)
json.dump(new_targets, open("../targets.json", "w"), indent=1, sort_keys=True, ensure_ascii=False)